module.exports = function(req, res, next) {
    res.sendResponseData = function(data, httpStatus) {
        if (httpStatus) {
            res.status(httpStatus);
        }
        res.json({ data: data });
    };
    next();
};