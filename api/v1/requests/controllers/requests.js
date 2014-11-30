var Request   = require('modules/requests').Request;
var HttpError = require('libs/httpError');

exports.index = function(req, res, next) {
    Request.find(function(err, requests) {
        if (err) {
            next(err);
            return;
        }
        res.json({ data: requests });
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
                next(new HttpError(400, 'Validation error'));
            } else {
                next(err);
            }
            return;
        }

        res.json({ data: request });
    });
};

exports.get = function(req, res) {
    var request = req.object;
    res.json({ data: request });
};

exports.put = function(req, res, next) {
    var request  = req.object;
    request.text = req.body.text;

    request.save(function(err, request) {
        if (err) {
            if (err.name === 'ValidationError') {
                // field must be set
                next(new HttpError(400, 'Validation error'));
            } else {
                next(err);
            }
            return;
        }

        res.json({ data: request });
    });
};

exports.patch = function(req, res, next) {
    var request  = req.object;
    request.text = req.body.text;

    request.save(function(err, request) {
        if (err) {
            if (err.name === 'ValidationError') {
                // field must be set
                next(new HttpError(400, 'Validation error'));
            } else {
                next(err);
            }
            return;
        }

        res.json({ data: request });
    });
};

exports.delete = function(req, res, next) {
    var request = req.object;
    request.remove(function(err) {
        if (err) {
            next(err);
            return;
        }
        res.json({ data: true });
    });
};