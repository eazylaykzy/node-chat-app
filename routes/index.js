const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Join | Chat App'});
});

router.get('/chat', (req, res, next) => {
  res.render('chat', { title: 'Chat | Chat App'});
});

module.exports = router;
