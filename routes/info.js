const express = require('express');
const passport = require('passport');

const info = require('../controllers/info');

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false, failureRedirect: '/api/error-authenticate' }), info.info);

module.exports = router;
