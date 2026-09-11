const express = require('express');
const User = require('../Controller/handleUsers.js');
const Games = require('../Controller/handleGames.js');

const router = express.Router();

router.use(express.json());

router.route('/')
    .post(User.addUser)
    .get(User.getUsers);

router.route('/:username/games')
    .post(Games.addGame)
    .get(Games.loadGames);

module.exports = router;