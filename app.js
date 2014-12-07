var express                     = require('express');
var bodyParser                  = require('body-parser');
var config                      = require('config');
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

errorHandler.init(app);

app.listen(config.port, function() {
    console.log('Listening on port ' + config.port);
});