import * as vscode from "vscode";
import { getNonce } from "./utils";

class NewsViewProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = "kls.plugin.webView";

  private _view?: vscode.WebviewView;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    this._view = webviewView;
    webviewView.webview.options = {
      // Allow scripts in the webview
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
  }
  private _getHtmlForWebview(webview: vscode.Webview) {
    // Get the local path to main script run in the webview, then convert it to a uri we can use in the webview.
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "src/media", "main.js")
    );
    const mescrollScriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "src/lib", "mescroll.min.js")
    );

    const styleResetUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "src/media", "reset.css")
    );
    const styleVSCodeUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "src/media", "vscode.css")
    );
    const styleMainUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "src/media", "main.css")
    );
    const styleMescrollUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "src/lib", "mescroll.min.css")
    );
    console.log("styleMescrollUri", styleMescrollUri);
    const nonce = getNonce();
    return `<!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${
                    webview.cspSource
                  }; script-src 'nonce-${nonce}'; connect-src ${"http://m.fbecn.com"}">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <link href="${styleResetUri}" rel="stylesheet">
                  <link href="${styleVSCodeUri}" rel="stylesheet">
                  <link href="${styleMainUri}" rel="stylesheet">
                  <link href="${styleMescrollUri}" rel="stylesheet">
                  <script nonce="${nonce}" src="${mescrollScriptUri}"></script>
                  <title>快兰斯</title>
              </head>
              <body>
              <div id="mescroll" class="mescroll">
                <ul id="newsList" class="news-list"></ul>
              </div>
              <script nonce="${nonce}" src="${scriptUri}"></script>
              </body>
              </html>`;
  }
}

const creatNewsProvider = (context: vscode.ExtensionContext) => {
  const provider = new NewsViewProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      NewsViewProvider.viewType,
      provider
    )
  );
};

export default creatNewsProvider;
