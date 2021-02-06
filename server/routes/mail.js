const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
var express = require("express");
var router = express.Router();

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
      api_user: '' // API KEY
    }
  }));

router.post('/sendMail', (req, res, next) => {
    return transporter.sendMail({
        to: email,
        from: '', // AUTHORIZED EMAIL ADDRESS
        subject: 'Signup',
        html: '<h1>You successfully signed up!</h1>'
      });
});
