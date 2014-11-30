var config   = require('config');
var mongoose = require('mongoose');

mongoose.connect(config.mongo.connectionString);

mongoose.connection.on('error', function () {
    throw new Error('Unable to connect to database ' + config.mongo.connectionString);
});

module.exports = mongoose;