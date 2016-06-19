/**
 * [app module]
 * app 模块加载配置
 */
var express = require('express');
var path = require('path');
var mainRouter = require('./routers/main');
var AppMain = require(APP_PATH + '/index');
// var 
module.exports = function() {
	var app = express();
	app.set('baseDir', __dirname);
	app.set('views', path.join(__dirname, 'views'));
	app.locals._layoutFile = 'layout/master.html';
	
	app.use('/app', mainRouter);
	return app;
}