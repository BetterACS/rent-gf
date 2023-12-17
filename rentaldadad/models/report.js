const mongoose = require('mongoose');

const reportschema = new mongoose.Schema({

    report_text: {
        type: String,
    },
    Username: {
        type: String,
    },
});

module.exports = mongoose.model('Report', reportschema);