'use strict';

var webpackConfig = {
  entry: './app.js',

  output: {
    // path: 'build',
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
  }
};

module.exports = webpackConfig;
