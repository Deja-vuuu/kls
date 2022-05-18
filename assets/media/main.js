(async function () {
    const vscode = acquireVsCodeApi();

    function getNewsList(newsid) {
        return fetch(`http://m.fbecn.com/24h/news_fbe0406.json?newsid=${newsid}`).then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                return null
            }
        })
    }

    /**
     * 向指定元素添加一个带文本节点的子元素
     * @param parentalElement
     * @param childOptions tagName 子元素标签  className 子元素class  content 子元素文本内容
     */
    function appendChild(parentalElement, childOptions) {
        const ele = document.createElement(childOptions.tagName);
        ele.className = childOptions.className;
        const text = document.createTextNode(childOptions.content);
        ele.appendChild(text);
        parentalElement.appendChild(ele);
    }
    const mescroll = new MeScroll("mescroll", {
        down: {
            auto: false, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
            callback: downCallback //下拉刷新的回调
        },
        up: {
            auto: true, //是否在初始化时以上拉加载的方式自动加载第一页数据; 默认false
            isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
            callback: upCallback, //上拉回调,
            toTop: { //配置回到顶部按钮
                src: "https://deja-vuuu.github.io/kls/src/assets/mescroll-totop.png",
            }
        },
    });
    /*下拉刷新的回调 */
    function downCallback() {
        //请求加载数据
        getListDataFromNet(0, 1, function (data) {
            console.log('downCallback', data);
            //请求成功的回调,隐藏下拉刷新的状态
            mescroll.endSuccess();
            //设置列表数据
            const newsList = data.list;
            setList(newsList, true);
            vscode.postMessage({
                type: 'showInformationMessage',
                value: '刷新成功'
            });
        }, function () {
            //请求失败的回调,隐藏下拉刷新的状态
            mescroll.endErr();
        });
    }
    /*上拉加载的回调 page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
    function upCallback(page) {
        const pageSize = 20;
        const pageNum = page.num
        //请求加载数据
        getListDataFromNet(pageNum, pageSize, function (curPageData) {
            //请求成功的回调,隐藏下拉刷新和上拉加载的状态;
            const hasNext = !!curPageData.nextpage && ((pageNum - 1) * pageSize <= 260);
            const newsList = curPageData.list;
            mescroll.endSuccess(newsList.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)
            //设置列表数据
            setList(newsList, false);
        }, function () {
            //请求失败的回调,隐藏下拉刷新和上拉加载的状态;
            mescroll.endErr();
            vscode.postMessage({
                type: 'showErrorMessage',
                value: '哇哦~ 网络连接失败。请稍后再试'
            });

        });
    }
    // mescroll-fade-out mescroll-fade-in
    function setList(curPageData, isRefresh = false) {
        const listDom = document.getElementById("newsList");
        const toAddFragment = document.createDocumentFragment();

        if (isRefresh) {
            listDom.innerHTML = '';
        }
        curPageData.forEach((value, index) => {
            const li = document.createElement('li');
            appendChild(li, {
                tagName: 'span',
                className: "news-time",
                content: getHoursAndMinutes(value.time)
            });
            appendChild(li, {
                tagName: 'span',
                className: Number(value.Level) === 0 ? "news-content important-news " : "news-content",
                content: value.content
            });
            toAddFragment.appendChild(li);

        });

        listDom.appendChild(toAddFragment);

    }
    async function getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
        try {
            let data;
            if (pageNum === 0) {
                data = await getNewsList(0);
            } else {
                const newsid = (pageNum - 1) * pageSize;
                data = await getNewsList(newsid);

            }
            //请求成功的回调
            successCallback && successCallback(data);
        } catch (e) {
            console.log('e', e);
            //请求失败的回调
            errorCallback && errorCallback();
        }
    }
    const timer = setInterval(() => {
        refreshList()
    }, 1000 * 60 * 30);

    function refreshList() {
        mescroll.triggerDownScroll();
        vscode.postMessage({
            type: 'showInformationMessage',
            value: '刷新成功'
        });
    }

    window.addEventListener('message', event => {
        const message = event.data;
        switch (message.type) {
            case 'refreshList': {
                refreshList();
                break;
            }
        }
    });
    // -------------------------------- 工具函数 --------------------------------

    /**
     * 获取时分 并以 00:00返回
     *
     * @param    {Number}    num        [数字]
     * @returns  {String}               [格式化后的数字]
     */
    function getHoursAndMinutes(params) {
        const date = new Date(params);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${numtwo(hours)}:${numtwo(minutes)}`;
    }
    /**
     * [numtwo 个位数字两位显示的处理]
     *
     * @param    {Number}    num        [数字]
     * @returns  {String}               [格式化后的数字]
     */
    function numtwo(num) {
        const numStr = num.toString();
        return numStr.length === 1 ? 0 + numStr : numStr;
    }

}());