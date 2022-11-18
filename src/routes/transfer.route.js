const { Router } = require('express');
const router = Router();
const requireToken = require('../middlewares/requireToken');
const { create, get } = require('../controllers/transfer.controller');

router.post('/create', requireToken, create);

router.get('/get', requireToken, get);

module.exports = router;
