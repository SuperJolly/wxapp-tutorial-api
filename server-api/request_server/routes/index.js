var express = require('express');
var router = express.Router();

/* GET Request. */
router.get('/', function(req, res, next) {
  var resObj = {
    text: 'hello,world!'
  };
  res.send(resObj);
});
/* POST Request */
router.post('/', function(req, res, next) {
  console.log(req.body,'~');
  res.send('from post request!');
})
module.exports = router;
