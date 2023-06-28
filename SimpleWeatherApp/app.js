const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
  const query = req.body.cityName;
  const appId = '4f4250d9f1f958bef549cc20234f9e0d';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${appId}`;
  https.get(url, (response) => {
    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const iconn = weatherData.weather[0].icon;
      const url1 = `https://openweathermap.org/img/wn/${iconn}@2x.png`;
      res.write(`<h1>The temperature in ${query} is ${weatherData.main.temp}</h1>`);
      res.write(`<p>The weather is currently ${weatherData.weather[0].description}</p>`);
      res.write(`<img src=${url1} alt="">`);
      res.send();
    });
  });
});




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
