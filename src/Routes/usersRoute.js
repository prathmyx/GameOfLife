const express = require('express');
const User = require('../Controller/handleUsers.js');

const router = express.Router();

router.use(express.json());

router.route('/')
    .post(User.addUser)
    .get(User.getUsers);



module.exports = router;