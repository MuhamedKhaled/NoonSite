var db = require("./DatabaseConnector");

class AdvertisementController extends db {
    constructor() {
        super();
    }

    addAdvertisement(req, res) {    //save to DB
        console.log(req.body.URL);
        this.con.getConnection(function(err,connection) {
            if (err) throw err;
            connection.query(`INSERT INTO heroku_a232b98420ced5b.advertisement(url,title) VALUES ('${req.body.URL}', '${req.body.title}');`
                , function (err, rows) {
                    if (err) {
                        throw err;
                    }
                    else {
                        console.log(rows);
                        res.end("Advertisement has been added");
                    }
                    connection.release();
                });
        });
    }

    deleteAdvertisement(req, res) {//delete from DB by id
        this.con.getConnection(function(err,connection) {
            if (err) throw err;
            connection.query(`DELETE from heroku_a232b98420ced5b.advertisement WHERE id = ${req.params.advID};`
                , function (err, rows) {
                    if (err) {
                        throw err;
                    }
                    else {
                        console.log(rows);
                        res.end("Advertisement has been deleted");
                    }
                    connection.release();
                });
        });
    }

    getAdvertisement(req,res) {
        this.con.query(`SELECT * FROM heroku_a232b98420ced5b.advertisement where id=' ${req.params.advID} ';`, function (err, row) {
            if (err) {
                throw err;
            }
            else {
                res.json(row);
            }
        });
    }
}

module.exports = new AdvertisementController();