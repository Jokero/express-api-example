var express            = require('express');
var bodyParser         = require('body-parser');
var config             = require('config');
var HttpError          = require('./libs/httpError');
var addSendErrorMethod = require('middleware/addSendErrorMethod');
var loadRouters        = require('./libs/loadRouters');

var app = express();
app.use(addSendErrorMethod);
app.use(bodyParser.json());

var routers = loadRouters('api');
app.use('/v1', routers.v1);

app.use(/\/v\d+/, function(req, res, next) {
    next(new HttpError(404, 'Invalid API version'));
});
app.use(function(req, res, next) {
    next(new HttpError(404, 'API version must be set'));
});

app.use(function(err, req, res, next) {
    if (!(err instanceof HttpError)) {
        err = new HttpError(500, err.message);

        if (app.get('env') === 'development') {
            console.log(err);
        }
    }
    res.sendError(err);
});

app.listen(config.port, function() {
    console.log('Listening on port ' + config.port);
});