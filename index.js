
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

//Transporter object
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      
      user: 'muthukumaropen@gmail.com',
      pass: 'lauxzzystsolhhld',
      
    }
  });

//mailOptions object
let mailOptions = {
    from: 'muthukumaropen@gmail.com',
    to: 'poornaashavi@gmail.com',
    subject: 'NodemailerProject',
    text: 'Hi! I\'m your nodemailer project'
  };

//sendMail method
transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
});