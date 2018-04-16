var express = require('express');
var router = express.Router();
var fileFunc = require('../modules/fileFunc');

/* upload service */
router.post('/', fileFunc.upload);

module.exports = router;
