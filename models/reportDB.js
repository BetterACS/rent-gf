const mongoose = require('mongoose');

const reportschema = new mongoose.Schema({

    Problem: String,
    Username: String,
    email: String,
    description : String,
});

module.exports = mongoose.model('Report', reportschema);