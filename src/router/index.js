const router = require('express').Router();

router.get('/status', (req, res) => {
  res.send({ status: 'online' });
});

module.exports = router;
