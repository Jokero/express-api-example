module.exports = function(req, res, next) {
    res.sendError = function(err) {
        res.status(err.httpStatus)
           .json({ error: err.toJSON() });
    };
    next();
};