const express = require('express');
const path = require('path');
const logger = require('morgan')
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/kanjicard";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
  if (err) {
    console.log('Could not connect to mongodb.');
  }
});

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

passport.use(new BearerStrategy(
  function(token, done) {
    Account.findOne({ token: token }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: 'read' });
    });
  }
));

// mongoose.connect('mongodb://localhost/kanjicard')

mongoose.set('useCreateIndex', true);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// exports = module.exports = app;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});