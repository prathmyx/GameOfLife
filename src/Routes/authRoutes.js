const express = require('express');
const {signUpUser, loginUser} = require('../Controller/handleAuth.js');
const router = express.Router();

router.post('/signup', signUpUser);
router.post('/login', loginUser);

module.exports = router;