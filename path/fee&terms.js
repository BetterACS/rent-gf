const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/free&terms', (req, res) => {
    // Send the HTML file
    const filePath = path.join(__dirname, '../views', 'Fee&Terms.html');
    res.sendFile(filePath);
});

module.exports = router;