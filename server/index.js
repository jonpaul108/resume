const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');


const jsonParser = bodyParser.json();
const port = 3020;


app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/home', (req, res) => {
  res.status(200).send('home');
})

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected on port ' + port);
  }
});
