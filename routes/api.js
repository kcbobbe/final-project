const router = require("express").Router();
const Kanji = require("../models/kanji.js");

router.get("/api/kanji", (req, res) => {
  Kanji.find({})
  .then(dbKanji => {
    res.json(dbKanji);
  })
  .catch(err => {
    res.status(400).json(err);
  })
})

module.exports = router;