var express                     = require('express');
var bodyParser                  = require('body-parser');
var config                      = require('config');
var ApiError                    = require('./lib/apiError');
var NotFoundApiError            = require('./lib/apiError/notFound');
var ServerApiError              = require('./lib/apiError/serverError');
var addSendResponseDataMethod   = require('./middleware/addSendResponseDataMethod');
var addSendResponseObjectMethod = require('./middleware/addSendResponseObjectMethod');
var addSendErrorMethod          = require('./middleware/addSendErrorMethod');
var loadRouters                 = require('./lib/loadRouters');

var app = express();
app.use(addSendResponseDataMethod);
app.use(addSendResponseObjectMethod);
app.use(addSendErrorMethod);
app.use(bodyParser.json());

var routers = loadRouters('api');
app.use('/v1', routers.v1);

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

app.listen(config.port, function() {
    console.log('Listening on port ' + config.port);
});