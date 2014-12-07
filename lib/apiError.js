var util = require('util');

function ApiError(httpStatus, code, message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, ApiError);

    this.httpStatus = httpStatus;
    this.code       = code;
    this.message    = message;
    this.data       = {};
}

util.inherits(ApiError, Error);

ApiError.prototype.toJSON = function() {
    return {
        code:    this.code,
        message: this.message
    };
};

ApiError.prototype.name = 'ApiError';

module.exports = ApiError;

module.exports.ERRORS_CODES = {
    SERVER_ERROR: 10,
    BAD_REQUEST:  11,
    NOT_FOUND:    12,
    FORBIDDEN:    13
};