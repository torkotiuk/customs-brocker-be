const { Schema, model } = require('mongoose');

const decl = new Schema({
    declNumber: {
        type: String,
        required: true,
    },
    declDateFrom: {
        type: String,
        required: true
    },

    declDateTo: {
        type: String,
        required: true
    },

    proformNumber: {
        type: Number,
        required: true
    },

    ammount: {
        type: Number,
        required: true
    }

    // will connected with entity collection on MongoDB
    // aritcul: {
    //     type: String,
    //     required: true
    // }

});
 
const Declaration = model('declaration', decl)

module.exports = Declaration;