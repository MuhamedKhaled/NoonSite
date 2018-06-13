var db = require("./DatabaseConnector");

class PlayerController extends db {
    constructor() {
        super();
    }

    getPlayers(req, res) {
        this.con.getConnection(function(err,connection) {
            if(err) throw err;
            connection.query('SELECT * FROM heroku_a232b98420ced5b.player ;', function (err, rows) {
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

    getPlayer(req, res) {
        this.con.getConnection(function(err,connection) {
            if(err) throw err;
            //get all comments from DB
            connection.query('SELECT * FROM heroku_a232b98420ced5b.player where id = ' + req.params.id + ';', function (err, rows) {
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

    getPlayer(req, res , n) {
        this.con.getConnection(function(err,connection) {
            if(err) throw err;
            //get all comments from DB
            connection.query('SELECT * FROM heroku_a232b98420ced5b.player LIMIT'+ n +';', function (err, rows) {
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
module.exports = new PlayerController();