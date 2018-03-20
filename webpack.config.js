const {join, resolve} = require('path');

const loaders = require('./webpack/loaders');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    client: ['./src/main.ts'],
    "polyfills": [
      "./src/polyfills.ts"
    ],
  },
  output: {
    filename: '[name].js',
    path: resolve(join(__dirname, 'dist')),
    publicPath: '/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  externals: [
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      loaders.tsjit,
      loaders.html,
      loaders.css
    ]
  }
};
