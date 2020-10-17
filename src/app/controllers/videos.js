const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Technologies = require('../models/Technologies');
const Videos = require('../models/Videos');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    return res.send(await Videos.find());
  } catch (err) {
    return res.status(400).send({ error: 'Failed' });
  }
});

router.post('/create', authMiddleware, async (req, res) => {
  const data = req.body;

  try {
    if (!await Technologies.findOne({ name: data.technology })) {
      return res.status(400).send({ error: "Technology don't exists." });
    }

    await Videos.create(data);

    return res.send({ 
      data
    });
  } catch (err) {
    return res.status(400).send({ error: 'Create failed' });
  }
});

module.exports = app => app.use('/videos', router);
