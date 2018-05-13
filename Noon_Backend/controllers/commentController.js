var db = require("./DatabaseConnector");

class CommentController extends db {
    constructor() {
        super();
    }

    getComments(req, res) {
        this.con.getConnection(function(err,connection) {
            if(err) throw err;
        //get all comments from DB
            connection.query('SELECT * FROM heroku_a232b98420ced5b.comment where post_id = ' + req.params.postID + ' AND ISNULL(replies_to);', function (err, rows) {
            if (err) {
                throw err;
            }
            else {
                res.json(rows);
            }
        connection.release();
            });
        });
    }

    getComment(req, res) {
        this.con.getConnection(function(err,connection) {
            if (err) throw err;
            //get all comments from DB
            connection.query('SELECT * FROM heroku_a232b98420ced5b.comment where post_id=' + req.params.postID + ' AND id=' + req.params.commentID + ';', function (err, row) {
                ;
                if (err) {
                    throw err;
                }
                else {
                    res.json(row);
                }
                connection.release();
            });
        });
    }

    addComment(req, res) {//save to DB
        var content = req.body.commentBody;
        content = content.replace("'", "''");
        this.con.getConnection(function(err,connection) {
            if (err) throw err;
            connection.query(`INSERT INTO heroku_a232b98420ced5b.comment(content, post_id) VALUES ('${content}', ${req.body.postID});`, function (err, rows) {
                ;
                if (err) {
                    throw err;
                }
                else {
                    console.log(rows);
                    res.end("Comment has been added");
                }
                connection.release();
            });
        });
    }

    deleteComment(req, res) {//delete from DB by id
        this.con.getConnection(function(err,connection) {
            if (err) throw err;
            connection.query(`DELETE from heroku_a232b98420ced5b.comment WHERE post_id = ${req.params.postID} AND id =  ${req.params.commentID};`, function (err, rows) {
                ;
                if (err) {
                    throw err;
                }
                else {
                    console.log(rows);
                    res.end("Comment has been deleted");
                }
                connection.release();
            });
        });
    }

    deleteComments(req, res) {
        this.con.getConnection(function(err,connection) {
            if (err) throw err;
            connection.query(`DELETE from heroku_a232b98420ced5b.comment WHERE post_id = ${req.params.postID};`, function (err, rows) {
                ;
                if (err) {
                    throw err;
                }
                else {
                    console.log(rows);
                    res.end("Comments for Post has been deleted");
                }
                connection.release();
            });
        });
    }

    addReply(req,res) {
        var content = req.body.commentBody;
        content = content.replace("'","''");
        this.con.getConnection(function(err,connection) {
            if (err) throw err;
            connection.query(`INSERT INTO heroku_a232b98420ced5b.comment(content, post_id , replies_to) VALUES ('${content}', ${req.body.postID} , ${req.body.commentID});`, function (err, rows) {
                ;
                if (err) {
                    throw err;
                }
                else {
                    console.log(rows);
                    res.end("Reply has been added");
                }
                connection.release();
            });
        });
    }

    getReplies(req,res) {
        this.con.getConnection(function(err,connection) {
            if (err) throw err;
            connection.query(`SELECT * FROM heroku_a232b98420ced5b.comment where post_id = ${req.params.postID} AND replies_to = ${req.params.commentID};`, function (err, rows) {
                ;
                if (err) {
                    throw err;
                }
                else {
                    res.json(rows);
                }
                connection.release();
            });
        });
    }

    addLike(req,res) {
        this.con.getConnection(function(err,connection) {
            if (err) throw err;
            connection.query(`UPDATE heroku_a232b98420ced5b.comment SET likes = likes+1  WHERE post_id =  ${req.body.postID} AND 
        id = ${req.body.commentID};`
                , function (err, rows) {
                    ;
                    if (err) {
                        throw err;
                    }
                    else {
                        console.log(rows);
                        res.end("Like has been added");
                    }
                    connection.release();
                });
        });
    }

    getLikes(req,res) {
        this.con.getConnection(function(err,connection) {
            if (err) throw err;
            connection.query(`SELECT likes FROM heroku_a232b98420ced5b.comment where post_id = ' ${req.params.postID } 'AND id =' ${req.params.commentID}' ;`, function (err, rows) {
                ;
                if (err) {
                    throw err;
                }
                else {
                    res.json(rows);
                }
                connection.release();

            });
        });
    }
}

module.exports = new CommentController();