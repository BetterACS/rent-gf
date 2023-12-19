// report.js
const path = require('path');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ReportModel = require('../models/reportDB.js');  // แก้ชื่อตัวแปรเป็น ReportModel

router.get('/report', async (req, res, next) => {
    try {
        const reports = await ReportModel.find().exec();

        // Assuming your HTML template file is 'report.html'
        const filePath = path.join(__dirname, '../views', 'report.html');
        res.sendFile(filePath);
    } catch (err) {
        next(err);
    }
});

router.post('/report', async (req, res, next) => {
    try {
        const newReport = new ReportModel(req.body);
        const savedReport = await newReport.save();
        res.json({ message: 'Report sent successfully', report: savedReport });

    } catch (err) {
        next(err);
    }
});

module.exports = router;
