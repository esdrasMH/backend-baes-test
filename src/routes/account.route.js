const { Router } = require('express');
const router = Router();
const requireToken = require('../middlewares/requireToken');
const { get } = require('../controllers/account.controller');

router.get('/get', requireToken, get);

module.exports = router;
