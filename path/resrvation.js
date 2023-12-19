// resrvation.js
const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const dbConnection = require('../database');

router.get('/reservation', (req, res) => {
    // Send the HTML file
    const filePath = path.join(__dirname, '../views', 'DATINGRESERVATION.html');
    res.sendFile(filePath);
});

router.post('/reservation', upload.none(), (req, res) => {
    console.log(req.body);
    console.log('Received data:', req.body)
    const { plan, friendtal, username, email, Date, detail, payment_type } = req.body;

    // Remove the email check and directly insert into the database
    dbConnection.query(
        'INSERT INTO Summary(Fee_terms_ID, friendtal_Name, username, email, `Date`, detail, payment_type) VALUES (?, ?, ? ,?, ?, ?, ?)',
        [plan, friendtal, username, email, Date, detail, payment_type],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            return res.status(200).json({ message: 'Reservation successful.' });
        }
    );
});

module.exports = router;
