const express = require('express');
const passport = require('passport');
// const multer = require('multer');

const file = require('../controllers/file');
const upload = require('../middleware/upload');

// const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.get('/list', passport.authenticate('jwt', { session: false, failureRedirect: '/api/error-authenticate' }), file.getListFiles);
router.get('/download/:id', passport.authenticate('jwt', { session: false, failureRedirect: '/api/error-authenticate' }), file.downloadById);
router.post('/upload', passport.authenticate('jwt', { session: false, failureRedirect: '/api/error-authenticate' }), upload.any(), file.uploadFile);
router.put('/update/:id', passport.authenticate('jwt', { session: false, failureRedirect: '/api/error-authenticate' }), upload.any(), file.updateById);
router.delete('/delete/:id', passport.authenticate('jwt', { session: false, failureRedirect: '/api/error-authenticate' }), file.removeById);
router.get('/:id', passport.authenticate('jwt', { session: false, failureRedirect: '/api/error-authenticate' }), file.getInfoById);

module.exports = router;
