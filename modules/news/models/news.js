var mongoose = require('libs/mongoose');

var News = mongoose.model('News', mongoose.Schema({
    text: {
        type:     String,
        required: true
    },
    createdAt: {
        type:    Date,
        default: Date.now
    }
}));

module.exports = News;