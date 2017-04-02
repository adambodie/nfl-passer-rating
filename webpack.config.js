'use strict';
var UglifyJsPlugin = require("uglify-js-plugin");
var webpack = require('webpack');
var webpackConfig = {
  entry: './app.js',

  output: {
    path: 'build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = webpackConfig;
