var express = require('express');
var router  = express.Router();

var controller = require('../controllers/links');

router.get('/news/links', controller.index);

module.exports = router;