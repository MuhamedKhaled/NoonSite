'use strict';

var mysql = require('mysql');

module.exports = class DatabaseConnector{

    constructor(){
        this.con = mysql.createConnection({
            host: "us-cdbr-iron-east-05.cleardb.net",
            user: "b3c285398845dd",
            password: "13b5a9a4",
            database: "heroku_a232b98420ced5b"
        });
    }

};