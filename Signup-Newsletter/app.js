/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();

app.use('/file', express.static('file'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});
app.post('/', (req, res) => {
  const fName = req.body.firstName;
  const lName = req.body.lastName;
  const emailEnter = req.body.email;
  console.log(fName, lName, emailEnter);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
