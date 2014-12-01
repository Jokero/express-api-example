var ApiError = require('../api');

function ApiNotFoundError(message, code) {
    ApiError.call(this, 404, code || ApiError.ERRORS_CODES.NOT_FOUND, message);
}
util.inherits(ApiNotFoundError, ApiError);

module.exports = ApiNotFoundError;