var express = require('express');
var router = express.Router();
const photoController = require('../controllers/PhotoController');

router.get('/', function(req, res, next) {
    photoController.getPhotos(req, res);
});

module.exports = router;