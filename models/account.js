let mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose');

const KanjiModule = require("./kanji")

const Account = new Schema({
  username: String,
  favorites: [KanjiModule.schema]
})

Account.plugin(passportLocalMongoose);


module.exports = mongoose.model('Account', Account);