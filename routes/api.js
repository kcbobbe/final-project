const passport = require('passport');
const router = require("express").Router();
const Account = require("../models/account.js")
const Kanji = require("../models/kanji.js");

router.get("/api/kanjis", (req, res) => {
  Kanji.find({})
  .then(dbKanji => {
    res.json({
      "kanjis": dbKanji
    });
  })
  .catch(err => {
    res.status(400).json(err);
  })
})

// router.get("/api/grade/1", (req, res) => {
//   Kanji.find({kgrade: 1})
//   .then(dbKanji => {
//     res.json(dbKanji);
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   })
// })


// router.get("/api/grade/2", (req, res) => {
//   Kanji.find({kgrade: 2})
//   .then(dbKanji => {
//     res.json(dbKanji);
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   })
// })

router.get("/api/grade/:kgrade", (req, res) => {
  Kanji.find({kgrade: req.params.kgrade})
  .then(dbKanji => {
    res.json(dbKanji);
  })
  .catch(err => {
    res.status(400).json(err);
  })
})

router.get("/api/kanjis/:id", (req, res) => {
  Kanji.findOne({_id: req.params.id})
  .then(dbKanji => {
    res.json({
      "kanji": dbKanji
    });
  })
  .catch(err => {
    res.status(400).json(err);
  })
})

// AUTH

router.post('/register', function(req, res, next) {
  console.log('registering user');
  Account.register(new Account({username: req.body.username}), req.body.password, function(err) {
    if (err) {
      console.log('error while user register!', err);
      return next(err);
    }

    console.log('user registered!');
    // redo this redirect when hooking up with ember?
    res.redirect('/');
  });
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
  res.redirect('/');
});




module.exports = router;