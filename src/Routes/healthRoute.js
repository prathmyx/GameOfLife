const express = require('express');
const getHealth = require('../Controller/handleHealth.js');

const router = express.Router();

router.get('/', getHealth);

module.exports = router;