var mongoose = require('lib/mongoose');

var pieceOfNewsSchema = mongoose.Schema({
    text: {
        type:     String,
        required: true
    },
    createdAt: {
        type:    Date,
        default: Date.now
    }
}, { id: false });

pieceOfNewsSchema.virtual('id').get(function() {
    return this._id;
});

var PieceOfNews = mongoose.model('News', pieceOfNewsSchema);

module.exports = PieceOfNews;