var express = require('express');
var router = express.Router();
const indexModule = require("../module/index.js")
const helper = require("../class/helper.class.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/name', async function (req, res, next) {
  const result = await indexModule.getMember();
  helper.sendResponse(res, result)
})

module.exports = router;
