const router = require("express").Router();
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


module.exports = router;