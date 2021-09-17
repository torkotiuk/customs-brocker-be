const { Schema, model } = require('mongoose');

const decl = new Schema({
    number: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    }
});
 
const Declaration = model('declaration', decl)

module.exports = Declaration;