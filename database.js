const mysql = require("mysql2");
const dotenv = require("dotenv");
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
dotenv.config();

const dbConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'css222',
    database: 'friendtal_database',
    port: '3306'
});

mongoose.connect('mongodb+srv://pana:root@cluster0.d0ziwse.mongodb.net/')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

dbConnection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

module.exports = dbConnection;
