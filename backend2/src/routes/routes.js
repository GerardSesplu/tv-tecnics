const express = require('express');
const router = express.Router();
const app = express();
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(express.json());

  // create application/json parser
  var jsonParser = bodyParser.json();
        
  // create application/x-www-form-urlencoded parser
  var urlencodedParser = bodyParser.urlencoded({ extended: false });



    router.post('/send', jsonParser, urlencodedParser, (req,res) => {

        const email = req.body.email;
        const title = req.body.title;
        const text = req.body.text; 

        //Nodemailer

        var transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'gerardsesplu@gmail.com',
                pass:'Persepolis1414'
            }
        });

        var mailOptions = {
            from:'gerardsesplu@gmail.com',
            to:'gerardsesplu@gmail.com',
            subject: title,
            text: text + ' ' + email
        };

        transport.sendMail(mailOptions, function(err, info){
            if(err){
                console.log(err);
            } else {
                console.log('email sended', info.response, email, title, text);
            }
        });

        res.send(`email sended ${email,title,text}`); 
    });

    router.get('/check', (req, res) => {
        res.send('get request working')
         console.log('get request working');
    });

module.exports = router;



   