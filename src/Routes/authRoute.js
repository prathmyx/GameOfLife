const express = require('express');
const {signUpUser, loginUser, logoutUser} = require('../Controller/handleAuth.js');

const router = express.Router();

router.use(express.json());

router.post('/signup', signUpUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;