const crypto = require('crypto');

var db = require("./DatabaseConnector");

class AdminController extends db{

    constructor(){
        super();
    }

    addUser(req, res)
    {
        const newUser = {
            username: req.body.username,
            password: this.hashPassword(req.body.password)
        };
        this.saveUser(newUser);
        var response = {
            result: "1 record inserted!"
        };
        res.end(JSON.stringify(response));
    }

    hashPassword(password)
    {
        return crypto.createHash("md5").update(password).digest("hex");
    }

    saveUser(newUser)
    {
        this.con.query(`INSERT INTO admin (username, password) VALUES ('${newUser.username}', '${newUser.password}')`,
            function(err, result){
                if(err)
                    throw err;
            }
        );
    }

    login(req, res)
    {
        const dbConn = new db();
        const loggedinuser = this.con.query(`SELECT * FROM admin WHERE username = '${req.body.username}'
            AND password = '${crypto.createHash("md5").update(req.body.password).digest("hex")}'`,
            function(err, result){
                if(err)
                    throw err;
                if(result.length>0)
                {
                    if(result[0].token === null)
                    {
                        var token = crypto.randomBytes(30).toString("hex");
                        dbConn.con.query(`UPDATE admin SET token = '${token}' WHERE id = '${result[0].id}'`,
                            function(err, result){
                                if(err)
                                    throw err;
                                var resultedToken = {
                                    token: token
                                };
                                res.end(JSON.stringify(resultedToken));
                            }
                        );
                    }
                    else
                    {
                        var resultedToken = {
                            token: result[0].token
                        };
                        res.end(JSON.stringify(resultedToken));
                    }
                }
                else
                {
                    res.status(404);
                    res.end("Invalid Credentials!");
                }
            }
        );
    }

    logout(req, res)
    {
        this.con.query(`UPDATE admin SET token = ${null} WHERE token = '${req.headers.token}'`,
            function(err, result){
                if(err)
                    throw err;
                if(result.changedRows === 0)
                {
                    res.status(404);
                    res.end("You're already not logged in!");
                }
                else
                {
                    res.end("Logged out!");
                }
            }
        );
    }

}

module.exports = new AdminController();