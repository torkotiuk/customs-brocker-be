const { Schema, model } = require('mongoose');
const { token } = require('morgan');

const user = new Schema ({

    email: {
    type: String,
    required: true,
    unique: true,
    },

    password: {
        type: String,
        required: true
    },

    token: {
        type: String,
        required: false
    }
})

const User = model('user', user)

module.exports = User;