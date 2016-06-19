'use strict';

var app = require('./index');
var http = require('http');
var fs = require('fs');
var server;
var config = require('./config/config.json');

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))


/*
 * Create and start HTTP server.
 */
server = http.createServer(app);

server.listen(config.port);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});