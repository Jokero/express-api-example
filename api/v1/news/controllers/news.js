var News      = require('modules/news').News;
var HttpError = require('libs/httpError');

exports.index = function(req, res, next) {
    News.find(function(err, news) {
        if (err) {
            next(err);
            return;
        }
        res.json({ data: news });
    });
};

exports.post = function(req, res, next) {
    var news = new News({
        text: req.body.text
    });
    news.save(function (err, news) {
        if (err) {
            if (err.name === 'ValidationError') {
                // field must be set
                next(new HttpError(400, 'Validation error'));
            } else {
                next(err);
            }
            return;
        }

        res.json({ data: news });
    });
};

exports.get = function(req, res) {
    var news = req.object;
    res.json({ data: news });
};

exports.put = function(req, res, next) {
    var news  = req.object;
    news.text = req.body.text;

    news.save(function(err, news) {
        if (err) {
            if (err.name === 'ValidationError') {
                // field must be set
                next(new HttpError(400, 'Validation error'));
            } else {
                next(err);
            }
            return;
        }

        res.json({ data: news });
    });
};

exports.patch = function(req, res, next) {
    var news  = req.object;
    news.text = req.body.text;

    news.save(function(err, news) {
        if (err) {
            if (err.name === 'ValidationError') {
                // field must be set
                next(new HttpError(400, 'Validation error'));
            } else {
                next(err);
            }
            return;
        }

        res.json({ data: news });
    });
};

exports.delete = function(req, res) {
    var news = req.object;
    news.remove(function(err) {
        if (err) {
            next(err);
            return;
        }
        res.json({ data: true });
    });
};