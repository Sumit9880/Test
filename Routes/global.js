const express = require('express');
const router = express.Router();
var globalService = require('../Services/global');

router

    .use('/api/stream', require('./stream'))

module.exports = router;

