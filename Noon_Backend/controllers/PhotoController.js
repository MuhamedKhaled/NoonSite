// Ismail Ahmed
// Alaa Atef

var db = require('./DatabaseConnector');

class PhotoController extends db{

    constructor(){
        super();
    }

    getPhotos(req, res)
    {
        this.con.getConnection(function(err,connection){
            if (err) throw err;
            connection.query(`SELECT * FROM photo WHERE sport_id = ${req.sport_id}`,
                function(err, result)
                {
                    if(err)
                        throw err;
                    res.send(result);
                    res.end();
                    connection.release();
                }
            );
        });

    }
}

module.exports = new PhotoController();