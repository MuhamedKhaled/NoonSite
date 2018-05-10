var express = require('express');
var router = express.Router();
const postController = require('../controllers/PostController');

router.get('/getpost',(req,res)=>{
     //res.send('hello form other side');
     postController.getPosts(req,res,2);
});

router.get('/Addpost',(req,res)=>{
    //res.send('hello form other side');
    postController.AddPost(req,res);
});


module.exports = router;
