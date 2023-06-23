var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/year', (req, res) => {
  const date = new Date()
  let year = date.getFullYear()
  res.json({ year: year})
})

module.exports = router;
