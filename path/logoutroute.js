const express = require('express');
const cookieSession = require('./cookie.js'); // Adjust the path accordingly
const router = express.Router();

// Apply the session middleware
router.use(cookieSession);

router.post('/logout', (req, res) => {
    // Clear user-related session data
    req.session.user = null;

    // Respond with a success message or redirect to the login page
    res.status(200).send('Logout successful');
    // Alternatively, you can redirect to the login page:
    // res.redirect('/login');
});

module.exports = router;
