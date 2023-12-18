// deleteUserRoute.js
const express = require('express');
const router = express.Router();
const dbConnection = require('../database'); // Import your database connection

router.post('/user/delete', (req, res) => {
    // Ensure the user is logged in
    if (!req.session.user.user_id) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Use the user_id from the session to delete the user account
    const user_id = req.session.user.user_id;

    // Perform the delete operation on MySQL
    dbConnection.query('DELETE FROM User WHERE user_id = ?', [user_id], (err, results) => {
        if (err) {
            console.error('Error deleting user from MySQL:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        // Clear the session and send a success response
        req.session = null;
        res.status(200).json({ message: 'User deleted successfully' });
    });
});

module.exports = router;