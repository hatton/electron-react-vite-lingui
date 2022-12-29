import { ipcRenderer } from "electron";

//console.log(`even names: ${ipcRenderer.eventNames}`);
let appPath: string;
appPath = await ipcRenderer.invoke("getAppPath");
export { appPath };

console.log(`appPath: ${appPath}`);
