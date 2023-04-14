/*
 * @Author: xumourenaichiyu
 * @Date: 2023-03-28 20:22:25
 * @LastEditTime: 2023-04-11 22:35:51
 */
import {app} from 'electron';
import {resolve} from 'path';
import {createWindow, env} from './utils/index';
const createMainWin = () => {
  const win = createWindow({
    width: 400,
    height: 600,
    resizable: false,
    titleBarStyle: 'hidden',
    frame: true
  });
  env === 'production' ? 
    win.loadFile(resolve(__dirname, '../renderer/index.html')) :
    win.loadURL(`http://localhost:8080`);
}

app.on('window-all-closed', () => {
  app.quit();
})

app.on('ready', () => {
  createMainWin();
})