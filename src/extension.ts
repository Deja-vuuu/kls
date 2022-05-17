import * as vscode from "vscode";
import creatNewsProvider from "./newsProvider";

export function activate(context: vscode.ExtensionContext) {
  creatNewsProvider(context);  
}
