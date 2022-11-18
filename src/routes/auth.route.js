const { Router } = require('express');
const router = Router();
const { signup, signin } = require('../controllers/auth.controller');

router.post('/signup', signup);

router.post('/signin', signin);

module.exports = router;
