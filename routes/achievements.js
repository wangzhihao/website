var express = require('express');
var router = express.Router();

/* GET achievements page. */
router.get('/', function(req, res, next) {
  res.render('achievements', { title: 'Accomplishments' });
});

module.exports = router;
