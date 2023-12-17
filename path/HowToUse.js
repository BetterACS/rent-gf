const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/HowToUse', (req, res) => {
    // Send the HTML file
    const filePath = path.join(__dirname, '../views', 'How to use.html');
    res.sendFile(filePath);
});

module.exports = router;