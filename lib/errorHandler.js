var ApiError         = require('./apiError');
var NotFoundApiError = require('./apiError/notFound');
var ServerApiError   = require('./apiError/serverError');

module.exports.init = function(app) {
    app.use(/\/v\d+/, function(req, res, next) {
        next(new NotFoundApiError('Invalid API version'));
    });

    app.use(function(req, res, next) {
        next(new ServerApiError('API version must be set'));
    });

    app.use(function(err, req, res, next) {
        if (!(err instanceof ApiError)) {
            if (app.get('env') === 'development') {
                console.log(err);
            }
            err = new ServerApiError();
        }
        res.sendError(err);
    });
};