const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

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

router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.me.id,
  };

  messages[id] = message;

  return res.send(message);
})

router.get('/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});

router.delete('/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = messages;

  messages = otherMessages;

  return res.send(message);
})

module.exports = router;
