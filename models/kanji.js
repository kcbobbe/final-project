const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kanjiSchema = new Schema({
  kanji: String,
  kmeaning: String,
  kgrade: Number,
  kunyomi_ja: String,
  kunyomi: String,
  onyomi_ja: String,
  onyomi: String,
  examples: Array
})

module.exports = mongoose.model("Kanji", kanjiSchema);

