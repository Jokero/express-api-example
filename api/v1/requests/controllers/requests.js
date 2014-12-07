var Request            = require('modules/requests').Request;
var map                = require('../maps/request');
var BadRequestApiError = require('lib/apiError/badRequest');

exports.index = function(req, res, next) {
    Request.find(function(err, requests) {
        if (err) {
            next(err);
            return;
        }
        res.sendResponseObject(requests, map);
    });
};

exports.post = function(req, res, next) {
    var request = new Request({
        text: req.body.text
    });
    request.save(function (err, request) {
        if (err) {
            if (err.name === 'ValidationError') {
                // field must be set
                next(new BadRequestApiError('Validation error'));
            } else {
                next(err);
            }
            return;
        }

        res.sendResponseObject(request, map);
    });
};

exports.get = function(req, res) {
    res.sendResponseObject(req.object, map);
};

exports.put = function(req, res, next) {
    var request  = req.object;
    request.text = req.body.text;

    request.save(function(err, request) {
        if (err) {
            if (err.name === 'ValidationError') {
                // field must be set
                next(new BadRequestApiError('Validation error'));
            } else {
                next(err);
            }
            return;
        }

        res.sendResponseObject(request, map);
    });
};

exports.patch = function(req, res, next) {
    var request  = req.object;
    request.text = req.body.text;

    request.save(function(err, request) {
        if (err) {
            if (err.name === 'ValidationError') {
                // field must be set
                next(new BadRequestApiError('Validation error'));
            } else {
                next(err);
            }
            return;
        }

        res.sendResponseObject(request, map);
    });
};

exports.delete = function(req, res, next) {
    var request = req.object;
    request.remove(function(err) {
        if (err) {
            next(err);
            return;
        }
        res.sendResponseData(true);
    });
};