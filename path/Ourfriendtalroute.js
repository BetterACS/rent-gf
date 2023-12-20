const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/ourfriendtal', (req, res) => {
    // Send the HTML file
    const filePath = path.join(__dirname, '../views', 'chose.html');
    res.sendFile(filePath);
});

router.get('/ourfriendtal', function (req, res, next) {
    const query = 'SELECT friendtal_ID, location_id, Name, age, blood_type, personality, gender, bust, waist, hip, height, weight, picture FROM friendtal';

    dbConnection.query(query, function (err, rows) {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.render('ourfriendtal', { data: rows });
        }
    });
});

module.exports = router;