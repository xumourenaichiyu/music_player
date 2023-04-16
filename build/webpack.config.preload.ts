/*
 * @Author: xumourenaichiyu
 * @Date: 2023-03-28 20:30:14
 * @LastEditTime: 2023-04-16 21:48:40
 */
import webpack from 'webpack';
import { resolve } from 'path'
import { merge } from 'webpack-merge';
import baseConfig from './webpack.config.base';
const config: webpack.Configuration = {
  mode: 'development',
  entry: resolve(__dirname, '../src/main/preload.ts'),
  output: {
    filename: "preload.js",
    path: resolve(__dirname,'./dll'),
    library: {
      type: 'umd'
    }
  },
  target: 'electron-preload'
}
export default merge(baseConfig, config);