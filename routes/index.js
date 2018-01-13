const express = require('express');
const router = express.Router();
const pug = require('pug');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'My Chat App'});
});

module.exports = router;
