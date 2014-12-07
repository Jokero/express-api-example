var ApiError = require('../apiError');
var util     = require('util');

function BadRequestApiError(message) {
    ApiError.call(this, 404, ApiError.ERRORS_CODES.BAD_REQUEST, message);
}
util.inherits(BadRequestApiError, ApiError);

module.exports = BadRequestApiError;