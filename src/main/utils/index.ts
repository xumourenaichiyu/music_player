/*
 * @Author: xumourenaichiyu
 * @Date: 2023-04-11 20:29:10
 * @LastEditTime: 2023-04-16 22:22:47
 */
import {BrowserWindow, BrowserWindowConstructorOptions, app} from 'electron';
import {join} from 'path';
const env: Env_Type = (process.env.NODE_ENV || 'development').trim() as Env_Type;
/**
 * @description 通用创建窗口方法
 * @param options
 * @returns 
 */
const createWindow = (options: BrowserWindowConstructorOptions = {}) => {
  return new BrowserWindow({
    autoHideMenuBar: true,
    ...options,
    webPreferences: {
      devTools: env === 'development',
      preload: app.isPackaged ? join(__dirname,'../preload.js') : join(__dirname,'../../../build/dll/preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      ...options.webPreferences || {},
    }
  })
}

export {
  createWindow,
  env
}