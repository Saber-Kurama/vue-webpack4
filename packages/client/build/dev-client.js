#!/usr/bin/env node

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const conf = require('./webpack.dev');
const opn = require('opn');

const PORT = process.env.PORT ||8080;
const HOST = 'localhost';
const browser = process.platform === 'win32' ? 'Chrome' : '/Applications/Google Chrome.app';
const options = {
  contentBase: '../dist',
  hot: true,
  host: 'localhost'
};
webpackDevServer.addDevServerEntrypoints(conf, options);
const compiler = webpack(conf);
new webpackDevServer(compiler, options).listen(PORT, HOST, (err) => {
      if(err){
        return console.log(err)
      }
      opn(`http://${HOST}:${PORT}`, {
        app: browser
      })
    })