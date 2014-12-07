var ApiError = require('../apiError');
var util     = require('util');

function NotFoundApiError(message) {
    ApiError.call(this, 404, ApiError.ERRORS_CODES.NOT_FOUND, message);
}
util.inherits(NotFoundApiError, ApiError);

module.exports = NotFoundApiError;