import 'webpack-dev-server';
import webpack from 'webpack';
import baseConfig from './webpack.config.base';
import {merge } from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {resolve} from 'path';
import {spawn} from 'child_process';
const env = process.env.NODE_ENV;
const config: webpack.Configuration = {
  mode: 'development',
  target: ['web', 'electron-renderer'],
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname,'../src/renderer/index.html')
    })
  ],
  output: {
    filename: "[name].js",
    path: resolve(__dirname, './dist')
  },
  entry: [resolve(__dirname,'../src/renderer/index.tsx')],
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: [
          env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (path) => !/node_modules/.test(path),
                localIdentName: "[name]_[local]_[hash:base64:5]"
              },
            }
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              },
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
    compress: true,
    hot: true,
    static: {
      publicPath: '/'
    },
    setupMiddlewares: (Middlewares)=>{
      console.log('starting main process...');
      spawn('yarn',['start:main'], {shell: true,stdio: 'inherit'})
      return Middlewares;
    }
  }
}

export default merge(baseConfig, config);