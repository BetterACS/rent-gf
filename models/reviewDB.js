const mongoose = require('mongoose');

const reviewschema = new mongoose.Schema({

    review_text:  String,
    review_rating: Number,
    Username: String,

});

module.exports = mongoose.model('Review', reviewschema);