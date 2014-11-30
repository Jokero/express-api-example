var Link      = require('modules/news').Link;
var HttpError = require('libs/httpError');

exports.index = function(req, res, next) {
    Link.find(function(err, links) {
        if (err) {
            next(err);
            return;
        }
        res.json({ data: links });
    });
};