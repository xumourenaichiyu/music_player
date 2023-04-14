/*
 * @Author: xumourenaichiyu
 * @Date: 2023-04-11 20:29:10
 * @LastEditTime: 2023-04-11 21:20:33
 */
import {BrowserWindow, BrowserWindowConstructorOptions} from 'electron';
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
      ...options.webPreferences || {},
    }
  })
}

export {
  createWindow,
  env
}