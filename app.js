const express = require('express');
const webpack = require('webpack');
const historyApiFallback = require('connect-history-api-fallback');
const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');
const compiler = webpack(require('./webpack.config'));

module.exports = 
    express()
        .use(historyApiFallback())
        .use(dev(compiler, { logLevel: 'debug' }))
        .use(hot(compiler));
