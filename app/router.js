var kanjis = require('../api/kanji');

module.exports = function(router) {
  router.route('/api/kanji').get(function(req,res){
    kanjis.getAllKanjis(req,res);
  });
  router.route('*').get(function(req, res) {
      res.sendfile('./public/index.html'); // load our public/index.html file
  });
};