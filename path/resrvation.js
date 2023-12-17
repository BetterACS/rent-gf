const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/resrvation', (req, res) => {
    // Send the HTML file
    const filePath = path.join(__dirname, '../views', 'DATINGRESERVATION.html');
    res.sendFile(filePath);
});

module.exports = router;