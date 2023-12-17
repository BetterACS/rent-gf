const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/FriendtalProfile', (req, res) => {
    // Send the HTML file
    const filePath = path.join(__dirname, '../views', 'profileU.html');
    res.sendFile(filePath);
});

module.exports = router;