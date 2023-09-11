const express = require('express');
const router = express.Router();


let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

router.get('/', (req, res) => {
  return res.send(Object.values(messages));
});

router.get('/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});

module.exports = router;
