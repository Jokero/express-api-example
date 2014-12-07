var mongoose = require('lib/mongoose');

var PieceOfNews = mongoose.model('News', mongoose.Schema({
    text: {
        type:     String,
        required: true
    },
    createdAt: {
        type:    Date,
        default: Date.now
    }
}));

module.exports = PieceOfNews;