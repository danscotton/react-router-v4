const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack(require('./webpack.config'));

module.exports = 
    express()
        .use(middleware(compiler, { logLevel: 'debug' }));
