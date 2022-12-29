import { ipcRenderer } from "electron";

//console.log(`even names: ${ipcRenderer.eventNames}`);
let appPath: string;

export async function asyncInitPaths() {
  appPath = await ipcRenderer.invoke("getAppPath");

  console.log(`appPath: ${appPath}`);
}
export { appPath };
