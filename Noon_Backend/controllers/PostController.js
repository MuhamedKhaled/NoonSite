var db = require("./DatabaseConnector");

class PostController extends db{
    constructor(){
        super();
    }

    getPosts(req,res,n){
            const conn = new db();
            const Post = this.con.query(`SELECT * FROM post LIMIT ${n}`,

            function (err,result){
                if(err)
                    throw err;
                    
                    if(result.length>0)
                    {
                        res.send(result);
                    }
            }
        );        
    }

    getPostsByID(req,res){
        const conn = new db();
        const Post = this.con.query(`SELECT * FROM post WHERE id=${req.params.id.toString()}`,

            function (err,result){
                if(err)
                    throw err;

                if(result.length>0)
                {
                    res.send(result);
                }
            }
        );
    }

    AddPost(req,res){
        const conn = new db();
        const newPost ={
            image: "" ,
            title: "100 post hna",
            description: "ay 7aga blaaaaaaaaa",
            sport_id: 1,
            type:1
        };
        this.savePost(newPost);
    }

    savePost(newPost){
        this.con.query(`INSERT INTO post (image,title,description,sport_id,type) VALUES
         ('${newPost.image}','${newPost.title}','${newPost.description}',${newPost.sport_id},'${newPost.type}')`,
        
         function(err,result){
             if(err)
                throw err;
        }

        );
    }
}

module.exports = new PostController();