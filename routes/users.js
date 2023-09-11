const express = require('express');
const router = express.Router();

let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};

router.get('/', (req, res) => {
  return res.send(Object.values(users));
});

router.get('/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

router.post('/', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

router.delete('/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});

module.exports = router;
