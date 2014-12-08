var mongoose = require('lib/mongoose');

var requestSchema = mongoose.Schema({
    text:      {
        type:     String,
        required: true
    },
    createdAt: {
        type:    Date,
        default: Date.now
    }
}, { id: false });

requestSchema.virtual('id').get(function() {
    return this._id;
});

var Request = mongoose.model('Request', requestSchema);

module.exports = Request;