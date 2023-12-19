// review.js
const path = require('path');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const reviewModel = require('../models/reviewDB.js');

router.get('/review', async (req, res, next) => {
    try {
        const reviews = await reviewModel.find().exec();

        // Assuming your HTML template file is 'review.html'
        const filePath = path.join(__dirname, '../views', 'review.html');
        res.sendFile(filePath);
    } catch (err) {
        next(err);
    }
});

router.post('/review', async (req, res, next) => {
    try {
        const newReview = new reviewModel(req.body);
        const savedReview = await newReview.save();
        res.json(savedReview);
        res.json({ message: 'Review sent successfully', review: savedReview });

    } catch (err) {
        next(err);
    }
});

module.exports = router;
