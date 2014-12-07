var PieceOfNews        = require('modules/news').PieceOfNews;
var map                = require('../maps/news');
var BadRequestApiError = require('lib/apiError/badRequest');

exports.index = function(req, res, next) {
    PieceOfNews.find(function(err, news) {
        if (err) {
            next(err);
            return;
        }
        res.sendResponseObject(news, map);
    });
};

exports.post = function(req, res, next) {
    var news = new PieceOfNews({
        text: req.body.text
    });
    news.save(function (err, pieceOfNews) {
        if (err) {
            if (err.name === 'ValidationError') {
                // field must be set
                next(new BadRequestApiError('Validation error'));
            } else {
                next(err);
            }
            return;
        }

        res.sendResponseObject(pieceOfNews, map, 201);
    });
};

exports.get = function(req, res) {
    res.sendResponseObject(req.object);
};

exports.put = function(req, res, next) {
    var pieceOfNews  = req.object;
    pieceOfNews.text = req.body.text;

    pieceOfNews.save(function(err, pieceOfNews) {
        if (err) {
            if (err.name === 'ValidationError') {
                // field must be set
                next(new BadRequestApiError('Validation error'));
            } else {
                next(err);
            }
            return;
        }

        res.sendResponseObject(pieceOfNews, map);
    });
};

exports.patch = function(req, res, next) {
    var pieceOfNews  = req.object;
    pieceOfNews.text = req.body.text;

    pieceOfNews.save(function(err, news) {
        if (err) {
            if (err.name === 'ValidationError') {
                // field must be set
                next(new BadRequestApiError('Validation error'));
            } else {
                next(err);
            }
            return;
        }

        res.sendResponseObject(pieceOfNews, map);
    });
};

exports.delete = function(req, res) {
    var pieceOfNews = req.object;
    pieceOfNews.remove(function(err) {
        if (err) {
            next(err);
            return;
        }
        res.sendResponseData(true);
    });
};