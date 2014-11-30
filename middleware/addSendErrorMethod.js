module.exports = function(req, res, next) {
    res.sendError = function(err) {
        res.status(err.status)
           .json({ message: err.message });
    };
    next();
};