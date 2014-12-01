var ApiError = require('../api');

function ApiBadRequestError(message, code) {
    ApiError.call(this, 404, code || ApiError.ERRORS_CODES.BAD_REQUEST, message);
}
util.inherits(ApiBadRequestError, ApiError);

module.exports = ApiBadRequestError;