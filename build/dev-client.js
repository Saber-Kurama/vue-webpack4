#!/usr/bin/env node

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const conf = require('./webpack.dev');
const opn = require('opn');
const compiler = webpack(conf);
const PORT = process.env.PORT ||8080;
const HOST = 'localhost';
const browser = process.platform === 'win32' ? 'Chrome' : '/Applications/Google Chrome.app';
new WebpackDevServer(compiler, {})
    .listen(PORT, HOST, (err) => {
      if(err){
        return console.log(err)
      }
      opn(`http://${HOST}:${PORT}`, {
        app: browser
      })
    })