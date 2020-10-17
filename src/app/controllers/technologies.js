const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

const Technologies = require('../models/Technologies');

// router.use(authMiddleware);

/* 
  Para usar o middleware em rotas específicas
  Lembrando de deletar o router.use(authMiddleware);

  To use middleware on specific routes
  Remembering to delete the router.use(authMiddleware);

  router.get('/', authMiddleware, (req, res) => {
    res.send({ ok: true, user: req.userId });
  }); 
*/

router.get('/', async (req, res) => {
  try {
    return res.send(await Technologies.find());
  } catch (err) {
    return res.status(400).send({ error: 'Failed' });
  }
});

router.post('/create', authMiddleware, async (req, res) => {
  const data = req.body;

  try {
    if (await Technologies.findOne({ name: data.name })) {
      return res.status(400).send({ error: 'Technology already exists.' });
    }

    return res.send(await Technologies.create(data));
  } catch (err) {
    return res.status(400).send({ error: 'Create failed' });
  }
});

module.exports = app => app.use('/technologies', router);
