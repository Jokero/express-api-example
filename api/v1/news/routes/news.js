var express = require('express');
var router  = express.Router();

var PieceOfNews = require('modules/requests').PieceOfNews;
var fetchObject = require('middleware/fetchObject');
var controller  = require('../controllers/news');

router.use('/news', fetchObject(PieceOfNews));

router.get('/news', controller.index);
router.post('/news', controller.post);
router.get('/news/:id', controller.get);
router.put('/news/:id', controller.put);
router.patch('/news/:id', controller.patch);
router.delete('/news/:id', controller.delete);

module.exports = router;