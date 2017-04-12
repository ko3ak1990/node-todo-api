var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    createdAt: {
        type: Number,
        default: null
    }
});

module.exports = {User};