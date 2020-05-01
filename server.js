const express = require('express');
const path = require('path');
const logger = require('morgan')
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({keys: ['secretkey1', 'secretkey2', '...']}));

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(require('./routes/api.js')); 

// Configure passport-local to use account model for authentication
const Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));

passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// mongoose.connect('mongodb://localhost/kanjicard')

mongoose.connect('mongodb://localhost/kanjicard', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
  if (err) {
    console.log('Could not connect to mongodb on localhost.');
  }
});
mongoose.set('useCreateIndex', true);


// exports = module.exports = app;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});