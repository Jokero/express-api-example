module.exports = function(model) {
    return function(req, res, next) {
        var objectId = req.params.id;
        if (!objectId) {
            if (['PUT', 'PATCH', 'DELETE'].indexOf(req.method) !== -1) {
                res.status(404).send({ error: 'Object not found' });
            } else {
                next();
            }
            return;
        }

        model.findById(objectId, function(err, object) {
            if (err) {
                res.status(500).send({ error: 'Server error' });
                return;
            }

            if (!object) {
                res.status(404).send({ error: 'Object not found' });
                return;
            }

            req.object = object;

            next();
        });
    };
};