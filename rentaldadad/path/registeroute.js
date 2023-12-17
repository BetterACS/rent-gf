const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const dbConnection = require('../database');


router.get('/signup', (req, res) => {
    // Send the HTML file
    const filePath = path.join(__dirname, '../views', 'signup.html');
    res.sendFile(filePath);
});

router.post('/signup', upload.none(), (req, res) => {
    console.log(req.body);
    const { email, username, tel, age, gender, password } = req.body;

    dbConnection.query('SELECT email FROM User WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.length > 0) {
            return res.status(400).json({ error: 'Email address is already in use.' });
        } else {
            dbConnection.query('INSERT INTO User (email, username, passwords, tel, gender , age) VALUES (?, ?, ? ,?, ?, ?)',
                [email, username, password, tel, gender, age],
                (err, results) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ error: 'Internal Server Error' });
                    }

                    return res.status(200).json({ message: 'Registration successful. Redirecting to login page.' });
                });
        }
    });
});



module.exports = router;

    