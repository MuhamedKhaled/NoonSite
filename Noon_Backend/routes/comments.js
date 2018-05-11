var express = require('express');
var router = express.Router();
//var app = express();
const commentController = require('../controllers/commentController');
//var Replies = require('./Replies');


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

router.post('/addReply', function (req, res, next) {
    commentController.addReply(req, res);
});

router.get('/:postID/:commentID/getReplies', function(req,res,next){
    commentController.getReplies(req,res);
});

router.post('/addLike', function (req, res, next) {
    commentController.addLike(req, res);
});

router.get('/:postID/:commentID/getLikes', function(req,res,next){
    commentController.getLikes(req,res);
})

//app.use('/:commentID/replies', Replies);

module.exports = router;
