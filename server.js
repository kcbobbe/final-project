const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect('mongodb://localhost/kanjicard')
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.use(require('./routes/api.js')); 

// exports = module.exports = app;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});