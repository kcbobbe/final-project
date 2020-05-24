const passport = require('passport');
const router = require("express").Router();
const Account = require("../models/account.js")
const Kanji = require("../models/kanji.js");

router.get("/api/kanjis", (req, res) => {
  Kanji.model.find({})
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
  Kanji.model.find({kgrade: req.params.kgrade})
  .then(dbKanji => {
    res.json(dbKanji);
  })
  .catch(err => {
    res.status(400).json(err);
  })
})

router.get("/api/kanjis/:id", (req, res) => {
  Kanji.model.findOne({_id: req.params.id})
  .then(dbKanji => {
    res.json({
      "kanji": dbKanji
    });
  })
  .catch(err => {
    res.status(400).json(err);
  })
})

router.get("/api/accounts", (req, res) => {
  Account.find({})
  .then(dbKanji => {
    res.json({
      "accounts": dbKanji
    });
  })
  .catch(err => {
    res.status(400).json(err);
  })
})

router.get("/api/accounts/:id", (req, res) => {
  Account.findOne({_id: req.params.id})
  .then(dbKanji => {
    res.json({
      "account": dbKanji
    });
  })
  .catch(err => {
    res.status(400).json(err);
  })
})


// adding to favorites

router.put("/api/accounts/:id", (req, res) => {
  const addedFavorite = req.body;
  Account.update(
    {_id: req.params.id},
    { $push: { favorites: addedFavorite }},
    (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data)
    }
  }
  )
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