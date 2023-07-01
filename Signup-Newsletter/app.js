// Mailchimp API Key: 10b2ebcae12628dea3fc36d4ffcff16f-us11
// List ID: d7973ff559

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
  const data = {
    members: [
      {
        email_address: emailEnter,
        status: 'subscribed',
        merge_fields: {
          FNAME: fName,
          LNAME: lName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const options = {
    method: 'POST',
    auth: 'VincentN:10b2ebcae12628dea3fc36d4ffcff16f-us11',
  };
  const reques = https.request('https://us11.api.mailchimp.com/3.0/lists/d7973ff559', options, (response) => {
    response.on('data', (dat) => {
      if (response.statusCode === 200) {
        res.sendFile(`${__dirname}/success.html`);
      }
    });
  });
  reques.write(jsonData);
  reques.end();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
