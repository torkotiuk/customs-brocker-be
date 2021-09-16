const { Schema, model } = require('mongoose')

const user = new Schema ({

    email: {
    type: String,
    required: true,
    unique: true,
    },

    password: {
        type: String,
        required: true
    }
})

const User = model('user', user)

module.exports = User;