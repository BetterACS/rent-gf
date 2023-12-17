const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/ourfriendtal', (req, res) => {
    // Send the HTML file
    const filePath = path.join(__dirname, '../views', 'chose.html');
    res.sendFile(filePath);
});

module.exports = router;