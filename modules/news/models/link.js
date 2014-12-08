var mongoose = require('lib/mongoose');

var linkSchema = mongoose.Schema({
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
}, { id: false });

var Link = mongoose.model('Link', linkSchema);

linkSchema.virtual('id').get(function() {
    return this._id;
});

module.exports = Link;