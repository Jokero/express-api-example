var mongoose = require('libs/mongoose');

var Link = mongoose.model('Link', mongoose.Schema({
    text: {
        type:     String,
        required: true
    },
    url: {
        type:     String,
        required: true
    },
    createdAt: {
        type:    Date,
        default: Date.now
    }
}));

module.exports = Link;