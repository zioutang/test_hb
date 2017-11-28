const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/build/index.html');
});

app.get('/data', (req, res) => {
  var data = fs.readFileSync('./data/JCD5zR6X.json', {
    encoding: 'utf8'
  });
  res.json(data);
})
app.get('/dataWithSpouse', (req, res) => {
  var data = fs.readFileSync('./data/income_json_sample.json', {
    encoding: 'utf8'
  });
  res.json(data);
})
app.listen(PORT, error => {
  error
    ?
    console.error(error) :
    console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
