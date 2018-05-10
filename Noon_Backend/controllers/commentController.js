var db = require("./DatabaseConnector");

class CommentController extends db {
    constructor() {
        super();
    }

    getComments(req, res) {
        //get all comments from DB
        this.con.query('SELECT * FROM heroku_a232b98420ced5b.comment where post_id = ' + req.params.postID + ';', function (err, rows) {
            if (err) {
                throw err;
            }
            else {
                res.json(rows);
            }
        });
    }

    getComment(req, res) {
        //get all comments from DB
        this.con.query('SELECT * FROM heroku_a232b98420ced5b.comment where post_id=' + req.params.postID + ' AND id=' + req.params.commentID + ';', function (err, row) {
            if (err) {
                throw err;
            }
            else {
                res.json(row);
            }
        });
    }

    addComment(req, res) {    //save to DB
        this.con.query(`INSERT INTO heroku_a232b98420ced5b.comment(content, post_id) VALUES ('${req.body.commentBody}', ${req.body.postID});`
            , function (err, rows) {
                if (err) {
                    throw err;
                }
                else {
                    console.log(rows);
                    res.end("Comment has been added");
                }
            });
    }

    deleteComment(req, res) {//delete from DB by id
        this.con.query(`DELETE from heroku_a232b98420ced5b.comment WHERE post_id = ${req.params.postID} AND id =  ${req.params.commentID};`
            , function (err, rows) {
                if (err) {
                    throw err;
                }
                else {
                    console.log(rows);
                    res.end("Comment has been deleted");
                }
            });
    }

    deleteComments(req, res) {
        this.con.query(`DELETE from heroku_a232b98420ced5b.comment WHERE post_id = ${req.params.postID};`
            , function (err, rows) {
                if (err) {
                    throw err;
                }
                else {
                    console.log(rows);
                    res.end("Comments for Post has been deleted");
                }
            });
    }
}

module.exports = new CommentController();