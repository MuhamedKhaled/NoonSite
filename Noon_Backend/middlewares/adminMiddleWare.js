const db = require('../controllers/DatabaseConnector');

module.exports = function(req, res, next){
    if(req.method != 'GET' && req.url != '/admins/login')
    {
        if(req.headers.token)
        {
            const dbConn = new db();
            dbConn.con.query(`SELECT * FROM admin WHERE token = '${req.headers.token}'`,
                function(err, result){
                    if(err)
                        throw err;
                    if(result.length===0)
                    {
                        res.status(401);
                        res.end("Unauthorized");
                    }
                    else
                        next();
                }
            );
        }
    }
    else
    {
        next();
    }
};