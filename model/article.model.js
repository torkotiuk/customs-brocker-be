const { Schema, model } = require('mongoose');

const article = new Schema({
    art: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
    

})

const Article = model('article', article)

module.exports = Article;