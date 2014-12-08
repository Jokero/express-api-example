var _ = require('lodash');

module.exports = function(object, map) {
    var mappedObject = {};

    _.forOwn(object, function(value, key) {
        if (map[key] === true) {
            mappedObject[key] = value;
        } else if (_.isFunction(map[key])) {
            mappedObject[key] = map[key](value);
        }
    });

    return mappedObject;
};