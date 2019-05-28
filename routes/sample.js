let express = require('express');
let router = express.Router();
let path = require('path');

router.get('/vue', function (req, res) {
  res.render('pages/vue.ejs');
});
router.get('/promise', function (req, res) {
  res.sendFile(path.resolve('views/pages/promise.html'));
});

module.exports = router;
