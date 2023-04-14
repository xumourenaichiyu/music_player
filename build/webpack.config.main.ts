/*
 * @Author: xumourenaichiyu
 * @Date: 2023-03-28 20:30:14
 * @LastEditTime: 2023-03-28 21:17:41
 */
import webpack from 'webpack';
import {resolve} from 'path'
import {merge} from 'webpack-merge';
import baseConfig from './webpack.config.base';
const config: webpack.Configuration = {
  entry: [
    resolve(__dirname,'../src/main/index.ts')
  ],
  output: {
    filename: "[name].js",
    path: resolve(__dirname, '../dist')
  },
  target: 'electron-main'
}
export default merge(baseConfig, config);