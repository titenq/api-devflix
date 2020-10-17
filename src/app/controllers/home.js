const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    return res.send({ message: 'DEVFLIX API' });
  } catch (err) {
    return res.status(400).send({ error: 'Failed' });
  }
});

module.exports = app => app.use('/', router);
