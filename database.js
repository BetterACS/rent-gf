const mysql = require("mysql2");
const dotenv = require("dotenv");
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
dotenv.config();

const dbConnection = mysql.createConnection({   
    host: process.env.HOST ,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT,
})

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

