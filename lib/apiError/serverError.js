var ApiError = require('../apiError');
var util     = require('util');

function ServerApiError() {
    ApiError.call(this, 500, ApiError.ERRORS_CODES.SERVER_ERROR, 'Server error');
}
util.inherits(ServerApiError, ApiError);

module.exports = ServerApiError;