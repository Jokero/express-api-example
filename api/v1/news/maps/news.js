module.exports = {
    id:   true,
    text: function(value) {
        return value.substr(0, 2) + '...';
    }
};