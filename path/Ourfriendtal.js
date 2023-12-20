const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const dbConnection = require('../database');

router.get('/ourfriendtal', (req, res) => {
    // Fetch data from the database
    const query = `
        SELECT
            Friendtal.friendtal_id,
            Friendtal.friendtal_Name,
            Friendtal.age,
            Friendtal.blood_type,
            Friendtal.personality,
            Friendtal.gender,
            Friendtal.bust,
            Friendtal.waist,
            Friendtal.hip,
            Friendtal.height,
            Friendtal.weight,
            Friendtal.picture,
            Location.province,
            Location.district
        FROM
            Friendtal
        JOIN
            Location ON Friendtal.location_id = Location.location_id;
    `;

    dbConnection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching friendtal data:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Render HTML with dynamic friendtal cards
        const friendtalCards = results.map((friendtal, index) => {
            const isFirstInRow = index % 2 === 0;
            const friendtalCardClass = isFirstInRow ? 'friendtal-card start-of-row' : 'friendtal-card';

            return `
                <div class="${friendtalCardClass}">
                    <img src="${friendtal.picture}" alt="">
                    <h1 class="friendtal-name">${friendtal.friendtal_Name}</h1>
                    <p class="title">${friendtal.province}</p>
                    <p>${friendtal.district}</p>
                    <p>Age: ${friendtal.age}</p>
                    <p>Blood Type: ${friendtal.blood_type}</p>
                    <p>Personality: ${friendtal.personality}</p>
                    <p>Gender: ${friendtal.gender}</p>
                    <p>Bust: ${friendtal.bust}</p>
                    <p>Waist: ${friendtal.waist}</p>
                    <p>Hip: ${friendtal.hip}</p>
                    <p>Height: ${friendtal.height} cm</p>
                    <p>Weight: ${friendtal.weight} kg</p>
                    <!-- Add other friendtal details as needed -->
                </div>
            `;
        }).join('');

        // Read the HTML file and insert the generated friendtal cards
        const filePath = path.join(__dirname, '../views', 'chose.html');
        fs.readFile(filePath, 'utf8', (err, html) => {
            if (err) {
                console.error('Error reading HTML file:', err);
                res.status(500).send('Internal Server Error');
                return;
            }

            // Replace the placeholder with generated friendtal cards
            const updatedHTML = html.replace('<!-- Friendtal Cards will be inserted here dynamically -->', friendtalCards);

            // Send the updated HTML to the client
            res.send(updatedHTML);
        });
    });
});

module.exports = router;