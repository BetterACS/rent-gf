// index.js
const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./path/loginroute');
const RegisterRoute = require('./path/registeroute');
const homepageroute = require('./path/homepageroute');
const datingplanroute = require('./path/datingplanroute');
const confirm = require('./path/confirm');
const editprofile = require('./path/editprofile');
const ourfriendtal = require('./path/Ourfriendtal');
const profile = require('./path/userprofile');
const resrvation = require('./path/resrvation');
const FriendtalProfile = require('./path/friendtalprofile');
const Fee_terms = require('./path/fee&terms');
const review = require('./path/review');
const HowToUse = require('./path/HowToUse');
const sessionMiddleware = require('./path/cookie');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(sessionMiddleware);


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

// Use the route
app.use('/' , loginRoute);
app.use('/' , RegisterRoute);
app.use('/' , homepageroute);
app.use('/' , datingplanroute);
app.use('/' , confirm);
app.use('/' , editprofile);
app.use('/' , ourfriendtal);
app.use('/' , profile);
app.use('/' , resrvation);
app.use('/' , FriendtalProfile);
app.use('/' , Fee_terms);
app.use('/' , review);
app.use('/' , HowToUse);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
    
});
