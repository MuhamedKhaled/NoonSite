'use strict';

var mysql = require('mysql');

module.exports = class DatabaseConnector{

    constructor(){
            this.con = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "12345",
            database: "heroku_a232b98420ced5b"
        });
    }

};