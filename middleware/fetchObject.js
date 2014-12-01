var ApiNotFoundError = require('libs/errors/api/notFound');
var ApiServerError   = require('libs/errors/api/serverError');

module.exports = function(model) {
    return function(req, res, next) {
        var objectId = req.params.id;
        if (!objectId) {
            var err;
            if (['PUT', 'PATCH', 'DELETE'].indexOf(req.method) !== -1) {
                err = new ApiNotFoundError('Object not found');
            }
            next(err);
            return;
        }

        model.findById(objectId, function(err, object) {
            if (err) {
                next(new ApiServerError());
                return;
            }

            if (!object) {
                next(new ApiNotFoundError('Object not found'));
                return;
            }

            req.object = object;

            next();
        });
    };
};