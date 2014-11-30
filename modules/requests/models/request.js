var mongoose = require('libs/mongoose');

var Request = mongoose.model('Request', mongoose.Schema({
    text:      {
        type:     String,
        required: true
    },
    createdAt: {
        type:    Date,
        default: Date.now
    }
}));

module.exports = Request;