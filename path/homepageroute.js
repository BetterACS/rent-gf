const path = require('path');
const express = require('express');
const router = express.Router();
const Review = require('../models/reviewDB'); // Import the review model

router.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find().limit(4); // Limit to 4 reviews
        res.json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;