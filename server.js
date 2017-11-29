'use strict';
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require('axios');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/build/index.html');
});

app.get('/data', (req, res) => {
  axios(`https://pastebin.com/raw/JCD5zR6X`)
    .then(data => {
      res.json(data.data);
    }).catch(err => {
      console.log('err: ', err);
    })
})
app.get('/dataWithSpouse', (req, res) => {
  axios(`https://pastebin.com/raw/8KmXcj51`)
    .then(data => {
      res.json(data.data);
    }).catch(err => {
      console.log('err: ', err);
    })
})

app.listen(PORT, error => {
  error
    ?
    console.error(error) :
    console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
