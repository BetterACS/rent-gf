// loginroute.js
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const upload = multer();
const dbConnection = require('../database');
const cookieSessionConfig = require('./cookie');

router.use(cookieSessionConfig);

router.get('/login', (req, res) => {
    // Send the HTML file
    const filePath = path.join(__dirname, '../views', 'login.html');
    res.sendFile(filePath);
});

router.post('/login', upload.none(), (req, res) => {
    const { user_email, user_pass } = req.body;
    console.log('User data:', user_email, user_pass);
    console.log('Session data:', req.session);

    dbConnection.query('SELECT user_id, email, passwords FROM User WHERE email = ?', [user_email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.length > 0) {
            const user = results[0];
            console.log('User data:', user);

            // WARNING: Storing passwords in plaintext is extremely insecure!
            if (user_pass === user.passwords) {
                req.session.user = user;

                if (req.session.user && req.session.user.user_id) {
                    return res.redirect('http://localhost:3000/profile');
                } else {
                    return res.redirect('http://localhost:3000/');
                }
            } else {
                return res.status(400).json({ error: 'Incorrect password' });
            }
        } else {
            return res.status(400).json({ error: 'User not found' });
        }
    });
});

module.exports = router;