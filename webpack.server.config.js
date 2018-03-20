const {join, resolve} = require('path');

const webpack = require('webpack');
const loaders = require('./webpack/loaders');

module.exports = {
  target: 'node',
  entry: {
    server: ['./server/index.ts'],
  },
  output: {
    filename: 'index.js',
    path: resolve(join(__dirname, 'dist-server')),
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  externals: [/(node_modules|main\..*\.js)/,],
  module: {
    rules: [
      loaders.tsjit,
      loaders.html,
      loaders.css
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?angular(\\|\/)core(.+)?/,
      join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?express(\\|\/)(.+)?/,
      join(__dirname, 'src'),
      {}
    )
  ],
  externals: [
    '@angular/animations',
    '@angular/cli',
    '@angular/common',
    '@angular/compiler',
    '@angular/compiler-cli',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/router',
    '@angular/tsc-wrapped',
    '@angular/service-worker',
    'angular-ssr',
    'express',
    function(context, request, callback) {
      const exclusions = [/\@ngrx/, /rxjs/, /zone\.js/, /reflect-metadata/];

      if (exclusions.some(expr => expr.test(request))) {
        callback(null, `commonjs ${request.replace(/^.*?(\\|\/)node_modules(\\|\/)/, String())}`);
      }
      else {
        callback();
      }
    },
  ],
  node: {
    process: true,
    __dirname: true,
    __filename: true
  }
};
