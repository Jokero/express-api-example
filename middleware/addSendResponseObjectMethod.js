var _ = require('lodash');

function getMappedObject(object, map) {
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
    res.sendResponseObject = function(objectOrArray, map) {
        var response;
        if (!_.isArray(objectOrArray)) {
            response = getMappedObject(objectOrArray, map);
        } else {
            response = [];
            objectOrArray.forEach(function(object) {
                response.push(getMappedObject(object, map));
            });
        }

        res.sendResponseData(response);
    };
    next();
};