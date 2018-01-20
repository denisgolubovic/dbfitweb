var express = require('express');
var router = express.Router();

router.get('/div', function(req, res, next) {
	res.render('div.html');
})

module.exports = router;