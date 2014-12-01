var express            = require('express');
var bodyParser         = require('body-parser');
var config             = require('config');
var ApiNotFoundError   = require('./libs/errors/api/notFound');
var ApiServerError     = require('./libs/errors/api/serverError');
var addSendErrorMethod = require('middleware/addSendErrorMethod');
var loadRouters        = require('./libs/loadRouters');

var app = express();
app.use(addSendErrorMethod);
app.use(bodyParser.json());

var routers = loadRouters('api');
app.use('/v1', routers.v1);

app.use(/\/v\d+/, function(req, res, next) {
    next(new ApiNotFoundError('Invalid API version'));
});
app.use(function(req, res, next) {
    next(new ApiNotFoundError('API version must be set'));
});

app.use(function(err, req, res, next) {
    if (!(err instanceof ApiError)) {
        if (app.get('env') === 'development') {
            console.log(err);
        }
        err = new ApiServerError();
    }
    res.sendError(err);
});

app.listen(config.port, function() {
    console.log('Listening on port ' + config.port);
});