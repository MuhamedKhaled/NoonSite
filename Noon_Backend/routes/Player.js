var express = require('express');
var router = express.Router();
//var app = express();
const playerController = require('../controllers/PlayerController');


router.get('/getPlayer/:id', function (req, res, next) {
    playerController.getPlayer(req, res);
});

router.get('/getPlayer/:id', function (req, res, next) {
    let n = req.query.number || 6;
    playerController.getPlayer(req, res,n);
});

router.get('/getPlayers', function (req, res, next) {
    playerController.getPlayers(req, res);
});
module.exports = router;
