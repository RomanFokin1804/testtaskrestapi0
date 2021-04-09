const express = require('express');
const passport = require('passport');
const auth = require('../controllers/auth');

const router = express.Router();

router.post('/signin', auth.signin);
router.post('/signin/new_token', auth.newToken);
router.post('/signup', auth.signup);
router.get('/logout', passport.authenticate('jwt', { session: false, failureRedirect: '/api/error-authenticate' }), auth.logout);

module.exports = router;
