const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/review', (req, res) => {
    // Send the HTML file
    const filePath = path.join(__dirname, '../views', 'comment.html');
    res.sendFile(filePath);
});

module.exports = router;