var express = require('express');
var router = express.Router();
const photos = require('./photos');

router.use('/:sport_id/photos',function (req,res,next) {
    req.sport_id = req.params.sport_id;
    next()

},photos);

module.exports = router;