var express = require('express');
var router = express.Router();
const advController = require('../controllers/advertisementController');

//routers
router.post('/addAdvertisement', function (req, res, next) {
    advController.addAdvertisement(req, res);
});

router.get('/deleteAdvertisement/:advID', function(req,res,next){
    advController.deleteAdvertisement(req,res);
});

router.get('/getAdvertisement/:advID', function(req,res,next){
    advController.getAdvertisement(req,res);
});

module.exports = router;

