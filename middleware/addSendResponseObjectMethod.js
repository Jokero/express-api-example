var _         = require('lodash');
var mapObject = require('../lib/mapObject');

module.exports = function(req, res, next) {
    res.sendResponseObject = function(objectOrArray, map, httpStatus) {
        var response, objectData;
        if (!_.isArray(objectOrArray)) {
            objectData = objectOrArray.toJSON({ virtuals: true });
            response   = mapObject(objectData, map);
        } else {
            response = [];
            objectOrArray.forEach(function(object) {
                objectData = object.toJSON({ virtuals: true });
                response.push(mapObject(objectData, map));
            });
        }

        res.sendResponseData(response, httpStatus);
    };
    next();
};