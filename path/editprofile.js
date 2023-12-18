// editprofile.js
const express = require("express");
const router = express.Router();
const path = require('path');
const dbConnection = require("../database"); // Assuming you have a file named database.js for MySQL connection

// Handle GET request for /editprofile
router.get("/editprofile", (req, res) => {
    
    // Assuming you store the user ID in the session
    const filePath = path.join(__dirname, '../views', 'edit.html');
    res.sendFile(filePath);
});


router.post("/editprofile", (req, res) => {
    const { username, email, Tel  } = req.body; 
    const user_id = req.session.user.user_id; 
    const updateQuery = 'UPDATE User SET username=?, email=?, tel=? WHERE user_id=?';
    console.log([username, email, Tel, user_id]);
    dbConnection.query(updateQuery, [username, email, Tel, user_id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ success: false, error: "Failed to update profile." });
        } else {
            
            console.log("Profile updated successfully.");
            res.redirect("/profile");
            console.log(results);
        }
    });
});

module.exports = router;
