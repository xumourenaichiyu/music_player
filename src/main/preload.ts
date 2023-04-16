// import { contextBridge, ipcRenderer } from "electron";
// import { readdir,readdirSync } from "fs";
// contextBridge.exposeInMainWorld(
//   'electron',
//   {
//     ipcRenderer
//   }
// )

import { ipcRenderer } from "electron";

global.ipcRenderer = ipcRenderer;