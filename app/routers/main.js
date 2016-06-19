/**
 * [main router]
 * 主要的路由
 */
var express = require('express');
var router = express.Router();

var mainController = require('../controllers/main');

router.get('/', mainController.index);

module.exports = router;