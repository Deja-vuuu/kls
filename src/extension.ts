import * as vscode from "vscode";
import creatNewsProvider from "./newsProvider";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "kls" is now active!');
  creatNewsProvider(context);
}
