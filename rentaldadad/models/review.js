const mongoose = require('mongoose');

const reviewschema = new mongoose.Schema({

    review_text: {
        type: String,
    },
    Username: {
        type: String,
    },
});

module.exports = mongoose.model('Review', reviewschema);