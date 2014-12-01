var util = require('util');

function ApiError(httpStatus, code, message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, ApiError);

    this.httpStatus = httpStatus;
    this.code       = code;
    this.message    = message;
    this.data       = {};
}

ApiError.prototype.toJSON = function() {
    return {
        code:    this.code,
        message: this.message
    };
};

util.inherits(ApiError, Error);

ApiError.prototype.name = 'ApiError';

module.exports = ApiError;

exports.ERRORS_CODES = {
    SERVER_ERROR: 10,
    BAD_REQUEST:  11,
    NOT_FOUND:    12
};