var mysql = require('mysql');
var dbconnect =  mysql.createPool({
            host: "localhost", //localhost
            user: "root",
            password: "root",
            database: "ecommerceapp",
            port: "8889"
        });     
module.exports = dbconnect
