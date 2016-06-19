/**
 * main controller
 */
var controller = {};

controller.index = function(req, res, next) {
	res.render('index');
}


module.exports = controller;