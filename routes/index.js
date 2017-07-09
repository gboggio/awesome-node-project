const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const ger = { name: 'ger', age: 33, cool: true };
  // res.send('Hey! It works!');
  // res.json(ger);
  // res.send(req.query.name);
  res.send(req.query);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join((''));
  res.send(reverse);
});

module.exports = router;
