var express = require('express');
var router = express.Router();
const postController = require('../controllers/PostController');

router.get('/getpost',(req,res)=>{
     //res.send('hello form other side');
     let n = req.query.number || 2;
     postController.getPosts(req,res,n);
});

router.get('/Addpost',(req,res)=>{
    //res.send('hello form other side');
    postController.AddPost(req,res);
});


module.exports = router;
