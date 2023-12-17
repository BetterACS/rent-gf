const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/editprofile', (req, res) => {
    // Send the HTML file
    const filePath = path.join(__dirname, '../views', 'edit.html');
    res.sendFile(filePath);
});

module.exports = router;