const path = require('path');
const express = require('express');
const router = express.Router();
const dbConnection = require('../database');

router.get('/confirm', (req, res) => {
    dbConnection.query(`
    SELECT S.username, S.email, S.friendtal_Name, S.Date, S.detail, S.payment_type, F.terms AS plan, F.price
    FROM Summary S JOIN Fee_terms F ON S.Fee_terms_ID = F.Fee_terms_ID
    ORDER BY S.summary_id DESC LIMIT 1 `, (err, results) => {
        if (err) {
            console.error('Error fetching user info:', err);
            res.status(500).json({ error: 'Error fetching user info' });
        } else {
            // Check if results array is not empty
            if (results.length > 0) {
                const data = {
                    username: results[0].username,
                    email: results[0].email,
                    friendtal: results[0].friendtal_Name,
                    date: results[0].Date,
                    detail: results[0].detail,
                    payment_type: results[0].payment_type,
                    plan: results[0].plan,
                    price: results[0].price,
                };

                // Send JSON response if it's an AJAX request
                if (req.xhr || req.headers.accept.indexOf('json') > -1) {
                    res.json(data);
                } else {
                    // Render HTML template with the retrieved data
                    const filePath = path.join(__dirname, '../views', 'confirm.html');
                    const fs = require('fs');

                    fs.readFile(filePath, 'utf8', (readErr, content) => {
                        if (readErr) {
                            console.error('Error reading HTML file:', readErr);
                            res.status(500).json({ error: 'Error reading HTML file' });
                        } else {
                            // Replace placeholders in HTML content with dynamic data
                            const modifiedContent = content
                                .replace('{{username}}', data.username)
                                .replace('{{your_email}}', data.email)
                                .replace('{{friendtal}}', data.friendtal)
                                .replace('{{date}}', data.date)
                                .replace('{{detail}}', data.detail)
                                .replace('{{payment}}', data.payment_type)
                                .replace('{{plan}}', data.plan)
                                .replace('{{price}}', data.price);

                            // Send modified HTML as the response
                            res.send(modifiedContent);
                        }
                    });
                }
            } else {
                res.status(404).json({ error: 'Summary not found' });
            }
        }
    });
});

// Export the router
module.exports = router;
