var express = require('express');
var router  = express.Router();

var Request     = require('modules/requests').Request;
var fetchObject = require('middleware/fetchObject');
var controller  = require('../controllers/requests');

router.use('/requests', fetchObject(Request));

router.get('/requests', controller.index);
router.post('/requests', controller.post);
router.get('/requests/:id', controller.get);
router.put('/requests/:id', controller.put);
router.patch('/requests/:id', controller.patch);
router.delete('/requests/:id', controller.delete);

module.exports = router;