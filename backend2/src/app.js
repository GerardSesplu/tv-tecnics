const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('port', process.env.PORT || 8080);

//Middlewares

app.use(express.json());

//routes

app.use(require('./routes/routes'));

//Starting the server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

