const express = require('express');
const User = require('../Controller/handleUsers.js');
const Games = require('../Controller/handleGames.js');
const verifyTokenMiddleware = require('../middlewares/auth.js');

const router = express.Router();

router.use(express.json());

router.route('/')
    .post(User.addUser)
    .get(User.getUsers);

router.route('/games', verifyTokenMiddleware)
    .post(verifyTokenMiddleware, Games.addGame)
    .get(verifyTokenMiddleware, Games.loadGames);

module.exports = router;