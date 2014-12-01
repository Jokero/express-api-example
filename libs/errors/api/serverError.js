var ApiError = require('../api');

function ApiServerError() {
    ApiError.call(this, 500, ApiError.ERRORS_CODES.SERVER_ERROR, 'Server error');
}
util.inherits(ApiServerError, ApiError);

module.exports = ApiServerError;