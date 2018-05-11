var db = require('./DatabaseConnector');

class PhotoController extends db{

    constructor(){
        super();
    }

    getPhotos(req, res)
    {
        this.con.query(`SELECT * FROM photo WHERE sport_id = ${req.sport_id}`,
            function(err, result)
            {
                if(err)
                    throw err;
                res.send(result);
                res.end();
            }
        );
    }
}

module.exports = new PhotoController();