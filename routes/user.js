var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send(200, {data: 'respond with a resource'});
});

module.exports = router;
