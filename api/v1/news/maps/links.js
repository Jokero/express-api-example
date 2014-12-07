module.exports = {
    id:   true,
    url:  true,
    text: function(value) {
        return value.substr(0, 2) + '...';
    }
};