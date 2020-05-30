const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KanjiSchema = new Schema({
  kanji: String,
  kmeaning: String,
  kgrade: Number,
  kunyomi_ja: String,
  kunyomi: String,
  onyomi_ja: String,
  onyomi: String,
  examples: Array,
  kstroke: Number
})

const Kanji = mongoose.model('Kanji', KanjiSchema);

module.exports = {
  model: Kanji,
  schema: KanjiSchema
}

