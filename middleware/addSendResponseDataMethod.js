module.exports = function(req, res, next) {
    res.sendResponseData = function(data) {
        res.json({ data: data });
    };
    next();
};