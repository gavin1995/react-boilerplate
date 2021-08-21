const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    }
  },
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, '../src/index'),
  ],
  target: 'web',
  devServer: {
    hot: true,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
})
