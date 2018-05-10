var express = require('express');
var router = express.Router();
const commentController = require('../controllers/commentController');


router.get('/getComments/:postID', function (req, res, next) {
    commentController.getComments(req, res);
});

router.get('/getComment/:postID/:commentID', function (req, res, next) {
    commentController.getComment(req, res);
});

router.post('/addComment', function (req, res, next) {
    commentController.addComment(req, res);
});

router.get('/deleteComment/:postID/:commentID', function(req,res,next){
    commentController.deleteComment(req,res);
});

router.get('/deleteComments/:postID', function(req,res,next){
    commentController.deleteComments(req,res);
});

module.exports = router;