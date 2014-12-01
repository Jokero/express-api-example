var path = require('path');
var util = require('util');
var http = require('http');

function ApiError(status, message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, ApiError);

    this.status  = status;
    this.message = message || http.STATUS_CODES[status];
}

util.inherits(ApiError, Error);

ApiError.prototype.name = 'ApiError';

module.exports = ApiError;