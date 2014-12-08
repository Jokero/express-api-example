var _ = require('lodash');

function mapObject(object, map) {
    var objectData   = object.toJSON({ virtuals: true });
    var mappedObject = {};

    _.forOwn(objectData, function(value, key) {
        if (map[key] === true) {
            mappedObject[key] = value;
        } else if (_.isFunction(map[key])) {
            mappedObject[key] = map[key](value);
        }
    });

    return mappedObject;
}

module.exports = function(req, res, next) {
    res.sendResponseObject = function(objectOrArray, map, httpStatus) {
        var response;
        if (!_.isArray(objectOrArray)) {
            response = mapObject(objectOrArray, map);
        } else {
            response = [];
            objectOrArray.forEach(function(object) {
                response.push(mapObject(object, map));
            });
        }

        res.sendResponseData(response, httpStatus);
    };
    next();
};