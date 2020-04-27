const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

require("./models/kanji")

const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kanjicard')
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


var router = express.Router();
app.use('/', router);
require('./app/router')(router); 

app.listen(port);


exports = module.exports = app;
