var ApiError = require('../apiError');
var util     = require('util');

function ForbiddenApiError(message) {
    ApiError.call(this, 403, ApiError.ERRORS_CODES.NOT_FOUND, message);
}
util.inherits(ForbiddenApiError, ApiError);

module.exports = ForbiddenApiError;