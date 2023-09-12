const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let users = req.context.models.users;
  return res.send(users[req.context.me.id]);
});

module.exports = router;
