var Link = require('modules/news').Link;
var map  = require('../maps/link');

exports.index = function(req, res, next) {
    Link.find(function(err, links) {
        if (err) {
            next(err);
            return;
        }
        res.sendResponseObject(links, map);
    });
};