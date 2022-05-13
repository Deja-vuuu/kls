//@ts-check

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(async function () {
    const vscode = acquireVsCodeApi();
    const oldNewsState = vscode.getState() || {
        news: []
    };




    function getNewsList(newsid) {

        console.log('newsid---', newsid);
        // return fetch(`http://m.fbecn.com/24h/news_fbe0406.json?newsid=${newsid}`).then((response) => {
        //     console.log('response', response)
        //     if (response.status === 200) {
        //         return response.json()
        //     } else {
        //         return null
        //     }
        // })
        return {
            "list": [{
                    "newsID": null,
                    "time": "2022-05-07 11:11:54",
                    "content": "【北京市政务服务大厅暂停办理现场业务】为进一步落实新冠肺炎疫情防控工作要求，配合属地做好疫情风险排查，保障办事群众身体健康，北京市政务服务中心自2022年5月7日9：00起暂停办理现场业务。请通过北京市政务服务网、“北京通”APP以及微信“北京政务服务”小程序、支付宝“北京通”小程序、百度“北京通”小程序进行网上办、掌上办，或请就近就便在各区、镇街政务服务中心（村居服务站点）办理。（北京日报）",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 11:10:00",
                    "content": "【宁德时代上海工厂生产能力恢复至疫情前水平】从宁德时代获悉，该公司上海工厂返岗员工数量已超过1000人，返岗率达90%，生产能力已恢复至疫情前水平，工厂计划在条件允许的情况下继续增加产量。（界面）",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 11:08:44",
                    "content": "【神州租车五一大数据：超五成用户随订随走，日均里程比往年显著减少】神州租车五一出游趋势显示，受疫情不确定性和出行受限的影响，五一小长假出游半径变短，以本地游、周边游为核心的旅游场景占主流，超五成用户选择“临门一脚”，于放假前两天开启假期租车预订，决策周期同比缩短了约3天；日均里程100多公里，比往年显著减少。",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 11:07:54",
                    "content": "【五月前六日上海核酸检测超5700万人次，抗原检测1亿人次】5月7日，上海市卫生健康委副主任赵丹丹介绍，5月1日起对三区开展分区分级的“抗原+核酸”组合筛查。截至6日，累计核酸检测超5700万人次、抗原检测超过1亿人次。(澎湃新闻网)",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:47:13",
                    "content": "【网传浙江金华放松限售政策 当地房地产服务中心回应：属实】网传浙江金华放松限售，由之前的取得《不动产权证》满3年后方可上市交易调整为“自合同备案之日起满三年后方可上市交易”。对此，当地房地产服务中心确认消息属实。 (中国证券报)",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:45:05",
                    "content": "【天舟四号货运飞船船箭组合体顺利垂直转运至发射区 将于近日择机发射】据中国载人航天工程办公室消息，北京时间2022年5月7日，天舟四号货运飞船与长征七号遥五运载火箭组合体垂直转运至发射区。目前，文昌航天发射场设施设备状态良好，后续将按计划开展发射前的各项功能检查、联合测试等工作。",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:43:54",
                    "content": "【上海5月6日最新“三区”划分：防范区49277个】从今天（7日）举行的上海市疫情防控新闻发布会上获悉，依据阶段性筛查结果，5月6日上海全市共划分封控区10390个，涉及人口数约235万人；管控区19403个，涉及人口数约403万人；防范区49277个，涉及人口数约1686万人。（央视新闻）",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:33:00",
                    "content": "【联想控股：已向北京证监局提交书面整改报告完成整改】联想控股公告称，针对2022年4月14日收到的北京证监局下发的行政监管措施决定书，已经按照要求完成相关整改工作并已向北京证监局提交书面整改情况报告。",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:28:49",
                    "content": "【中信证券：基建稳增长的落地见效将具备更好条件】中信证券发表文章称，2022年疫情爆发以来，基建稳增长重要性进一步提升。从各省重点或重大项目建设计划和头部建筑企业订单增速来看，可落地的项目量充足，专项债、REITs等对基建资金构成一定支撑，同时对专项债的监测也将促进项目尽快落地。后续，随着疫情逐步好转，天气进入晴好时期，基建稳增长的落地见效将具备更好条件，头部建筑企业被延迟的需求有望在旺季集中兑现为收入增长弹性。",
                    "Level": "0",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:28:43",
                    "content": "【天津加大金融支持力度 帮助企业纾难解困】天津市金融局、人民银行天津分行、天津银保监局、天津证监局日前制定出台多项措施，帮助市场主体纾困解难，提高金融服务精准性、直达性和有效性。鼓励银行机构主动对12条重点产业链企业，以及住宿餐饮、批发零售、文化旅游等接触型服务业有贷款余额企业的年内贷款到期情况开展摸排，提前研判企业续贷能力，按照市场化、法治化原则，对有需要的企业通过提供中长期贷款、降低利率、展期或续贷支持等方式，帮助做好资金接续。（央视新闻）",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:28:43",
                    "content": "【长征七号遥五运载火箭与天舟四号货运飞船组合体今天垂直转运】今年，中国空间站已经转入建造阶段，共计划实施6次飞行任务，今天早上，长征七号遥五运载火箭与天舟四号货运飞船组合体从总装测试厂房垂直转运到发射区。(央视新闻)",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:26:25",
                    "content": "【快手电商成立房产业务中心】快手电商今年4月在内部信正式宣布成立了房产业务中心，该中心负责人直接向电商负责人笑古汇报。内部信中表示：“成立房产业务中心，负责满足快手用户的购房需求，帮助业主更高效的卖房，探索大宗线下交易业务在快手生态闭环的业务模式。”据快手的内部人士透露，快手从2019年已经开始研究房产业务，去年电商部门组建了专门的团队，探索跑通直播电商房产业务模式，尤其是在避开贝壳直接竞争的二三线城市市场。据悉，房产业务中心今年制定了跑通业务模式，突破百亿成交总额的目标。（36氪）",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:11:44",
                    "content": "【国家卫健委：有序推进疫苗同源和序贯加强免疫接种，提高老年人接种率】5月6日，国家卫生健康委召开党组会议。会议要求，刻不容缓推进上海和北京等地聚集性疫情处置，尽快实现社会面清零，完善新冠肺炎疫情处置措施，指导各地抓早抓小，力争以最小代价、最小范围、最短时间控制住疫情传播。继续推进科研攻关和疫苗接种工作，有序推进疫苗同源和序贯加强免疫接种，提高老年人接种率。（证券时报）",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:09:34",
                    "content": "【“满记甜品”与“小满茶田”合并，新集团完成新一轮战略融资】近日传统甜品巨头“满记甜品”与新茶饮品牌“小满茶田”完成合并，小满茶田创始人刘子正将出任智港集团（满记甜品母公司）总裁及满记甜品联席CEO。合并同时，智港集团也宣布完成新一轮战略融资，由知名餐饮集团和新消费独角兽公司联合领投。原星巴克中国供应链负责人、皮爷咖啡COO胡逢春以及原小满茶田COO、星巴克中国前华东区运营负责人宋晓莉将共同加入。（36氪）",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:08:53",
                    "content": "【上海高考延期至7月7日至9日举行】上海市疫情防控工作新闻发布会通报：上海市秋季高考统考延期至7月7日至9日举行，高中学业水平等级性考试延期至6月18日至19日举行，中考延期至7月11日至12日举行，取消初中理化实验考试、外语听说测试，相关成绩以满分计入学生中考总成绩。（央视新闻）",
                    "Level": "0",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:06:54",
                    "content": "【斯里兰卡总统宣布该国进入紧急状态】斯里兰卡总统拉贾帕克萨当地时间5月6日宣布该国进入紧急状态，这是五周以来该国第二次进入紧急状态。(央视新闻)",
                    "Level": "2",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:03:18",
                    "content": "【浙江省昨日新增本土阳性病例18例】5月6日0-24时，浙江省11个市报告新增本土阳性18例，其中集中隔离点检出17例、社区筛查1例，均已落实管控措施。(浙江新闻)",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 10:02:24",
                    "content": "【广州地铁：8个站点停止对外服务】记者从广州地铁获悉，因疫情防控需要，自5月7日9:00起 ，广州地铁三号线机场北站，广州东环城际白云机场北站停止对外服务（保留内部地铁与城际换乘功能）。截至目前，广州地铁共8个站点停止对外服务，包括二号线黄边，三号线永泰、白云大道北、人和、机场南、机场北，三号线及九号线高增，二、三及十四号线嘉禾望岗，其中，嘉禾望岗站、高增站仅保留站内换乘功能。 (央视新闻)",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 09:58:10",
                    "content": "【博时基金：A股整体估值处于较低水平 已具备不错的中长期投资价值】博时基金5月6日晚发表观点指出，在多重因素交织下，短期内A股或延续震荡格局。经过前期的回调，A股风险得到一定释放，且整体估值处于较低水平，已具备不错的中长期投资价值。当前时点，可适当关注受益经济转型升级行业的优质龙头企业的机会，如先进制造、新能源等板块。",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                },
                {
                    "newsID": null,
                    "time": "2022-05-07 09:41:53",
                    "content": "【古巴哈瓦那酒店爆炸事故已致22人死亡】截至当地时间5月6日夜间，当天上午在古巴首都哈瓦那老城区发生的酒店爆炸事故已造成22人死亡。 (央视新闻)",
                    "Level": "1",
                    "Type": "0",
                    "Keywords": null
                }
            ],
            "nextpage": "http://m.fbecn.com/24h/news_fbe0406.json?newsid=20"
        };

    }

    /**
     *
     * @param parentalElement
     * @param childOptions
     */
    function appendChild(parentalElement, childOptions) {
        const ele = document.createElement(childOptions.tagName);
        ele.className = childOptions.className;
        const text = document.createTextNode(childOptions.content);
        ele.appendChild(text);
        parentalElement.appendChild(ele);
    }

    function getHoursAndMinutes(params) {
        const date = new Date(params);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours}:${minutes}`;
    }


    const mescroll = new MeScroll("mescroll", {
        down: {
            auto: false, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
            callback: downCallback //下拉刷新的回调
        },
        up: {
            auto: true, //是否在初始化时以上拉加载的方式自动加载第一页数据; 默认false
            isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
            callback: upCallback, //上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
            toTop: { //配置回到顶部按钮
                src: "src/assets/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
                //offset : 1000
            }
        },

    });

    /*下拉刷新的回调 */
    function downCallback() {
        console.log('downCallback', downCallback);
        //请求加载数据
        getListDataFromNet(0, 1, function (data) {
            console.log('downCallback', data);
            //请求成功的回调,隐藏下拉刷新的状态
            mescroll.endSuccess();
            //设置列表数据
            const newsList = data.list;
            refreshList();
            // setList(newsList, true)
        }, function () {
            //请求失败的回调,隐藏下拉刷新的状态
            mescroll.endErr();
        });
    }

    /*上拉加载的回调 page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
    function upCallback(page) {
        console.log('upCallback', page);
        const pageSize = 20;
        //请求加载数据
        getListDataFromNet(page.num, pageSize, function (curPageData) {
            console.log('curPageData', curPageData);
            //请求成功的回调,隐藏下拉刷新和上拉加载的状态;
            const hasNext = !!curPageData.nextpage;
            const newsList = curPageData.list;
            mescroll.endSuccess(newsList.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)
            //设置列表数据
            setList(newsList, true);
        }, function () {
            //请求失败的回调,隐藏下拉刷新和上拉加载的状态;
            mescroll.endErr();
        });
    }

    function refreshList() {
        const listDom = document.getElementById("newsList");
        const listDomChild = document.querySelectorAll('li');
        listDom.innerHTML = '';
        console.log('listDom', listDom);
        console.log('listDomChild', listDomChild);

        // listDom.remove(listDomChild)

    }

    function setList(curPageData, isAppend) {
        const listDom = document.getElementById("newsList");
        const toAddFragment = document.createDocumentFragment();
        let li = '';
        curPageData.forEach((value, index) => {
            const li = document.createElement('li');
            appendChild(li, {
                tagName: 'span',
                className: "news-time",
                content: getHoursAndMinutes(value.time)
            });
            appendChild(li, {
                tagName: 'span',
                className: "news-content",
                content: value.content
            });

            toAddFragment.appendChild(li);
        });
        if (isAppend) {
            listDom.appendChild(toAddFragment); //加在列表的后面,上拉加载
        } else {
            listDom.insertBefore(toAddFragment, listDom.firstChild); //加在列表的前面,下拉刷新
        }
    }
    async function getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
        console.log(pageNum, pageSize);
        try {
            let data = [];
            if (pageNum === 0) {
                data = await getNewsList(0);
            } else {
                console.log('312', 312);
                const newsid = (pageNum - 1) * pageSize;
                data = await getNewsList(newsid);
                console.log('daat', data);

            }
            console.log('successCallback------', data);
            //请求成功的回调
            successCallback && successCallback(data);
        } catch (e) {
            console.log('e', e);
            //请求失败的回调
            errorCallback && errorCallback();
        }
    }

}());