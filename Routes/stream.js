const express = require('express');
const router = express.Router();
const streamService = require('../Services/stream');

router
    .get('/get', streamService.get)


module.exports = router;