// userprofile.js
const path = require('path');
const express = require('express');
const router = express.Router();
const dbConnection = require('../database');

const redirectLogin = (req, res, next) => {
    if (!req.session.user) {
        res.redirect('/login');
    } else {
        next();
    }
};

router.get('/profile', redirectLogin, (req, res) => {
    dbConnection.query('SELECT user_id, username, email, tel, gender, age FROM User WHERE user_id = ? GROUP BY user_id', [req.session.user.user_id], (err, results) => {
        if (err) {
            console.error('Error fetching user info:', err);
            res.status(500).json({ error: 'Error fetching user info' });
        } else {
            // Check if results array is not empty
            if (results.length > 0) {
                const data = results.map((row) => ({
                    user_id: row.user_id,
                    username: row.username,
                    email: row.email,
                    tel: row.tel,
                    gender: row.gender,
                    age: row.age,
                }));

                // Send JSON response if it's an AJAX request
                if (req.xhr || req.headers.accept.indexOf('json') > -1) {
                    res.json(data);
                } else {
                    // Render HTML template with the retrieved data
                    const filePath = path.join(__dirname, '../views', 'profileC.html');
                    const fs = require('fs');

                    fs.readFile(filePath, 'utf8', (readErr, content) => {
                        if (readErr) {
                            console.error('Error reading HTML file:', readErr);
                            res.status(500).json({ error: 'Error reading HTML file' });
                        } else {
                            // Replace placeholders in HTML content with dynamic data
                            const modifiedContent = content
                                .replace('{{username}}', data[0].username)
                                .replace('{{email}}', data[0].email)
                                .replace('{{age}}', data[0].age)
                                .replace('{{gender}}', data[0].gender)
                                .replace('{{tel}}', data[0].tel);

                            // Send modified HTML as the response
                            res.send(modifiedContent);
                        }
                    });
                }
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        }
    });
});

// Export the router
module.exports = router;
