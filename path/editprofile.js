// editprofile.js
const express = require("express");
const router = express.Router();
const path = require('path');
const dbConnection = require("../database");

// Handle GET request for /editprofile
router.get("/editprofile", (req, res) => {
    const filePath = path.join(__dirname, '../views', 'edit.html');
    res.sendFile(filePath);
});

router.post("/editprofile", (req, res) => {
    const { username, email, Tel } = req.body;
    const user_id = req.session.user.user_id;

    // Fetch existing user data from the database
    const selectQuery = 'SELECT * FROM User WHERE user_id = ?';
    dbConnection.query(selectQuery, [user_id], (selectErr, selectResults) => {
        if (selectErr) {
            console.error(selectErr);
            return res.status(500).json({ success: false, error: "Failed to fetch user data." });
        }

        if (selectResults.length === 0) {
            return res.status(404).json({ success: false, error: "User not found." });
        }

        const existingUserData = selectResults[0];

        // Initialize arrays to store columns and values for the update query
        const columns = [];
        const values = [];
        console.log(existingUserData);
        console.log(columns);
        console.log(values);

        // Check each field and include it in the update query if it's different from the existing data and not null/empty
        if (username !== existingUserData.username && username.trim() !== "") {
            columns.push('username');
            values.push(username);
        }

        if (email !== existingUserData.email && email.trim() !== "") {
            columns.push('email');
            values.push(email);
        }

        if (Tel !== existingUserData.tel && Tel.trim() !== "") {
            columns.push('tel');
            values.push(Tel);
        }

        // Check if there are fields to update
        if (columns.length === 0) {
            return res.redirect("/profile");
        }

        // Build the update query
        const updateQuery = `UPDATE User SET ${columns.map(col => `${col}=?`).join(', ')} WHERE user_id=?`;

        // Add user_id to values array
        values.push(user_id);

        // Execute the update query
        dbConnection.query(updateQuery, values, (updateErr, updateResults) => {
            if (updateErr) {
                console.error(updateErr);
                res.status(500).json({ success: false, error: "Failed to update profile." });
            } else {
                console.log("Profile updated successfully.");
                res.redirect("/profile");
            }
        });
    });
});

module.exports = router;
