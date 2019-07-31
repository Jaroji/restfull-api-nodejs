var pool = require('./databaseConfig.js');

var users = {
    getUserByKey:function (username,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Database connected");
                var sql = 'SELECT * FROM users WHERE username=?';
                conn.query(sql,[username], function(err,result){
                    conn.release;
                    if(err){
                        console.log(err);
                        return callback(err,null);
                    } else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            }
        });
    },

    signUp:function(uname,pass,possition,email,phone,affilition,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Database connected");
                var sql = 'INSERT INTO users (username,password,position,email,phone,affiliation) VALUES (?,?,?,?,?,?)';
    
                conn.query(sql,[uname,pass,possition,email,phone,affilition], function(err,result){
                    conn.release;
                    if(err){
                        console.log(err);
                        return callback(err,null);
                    } else {
                        console.log(result)
                        return callback(null, result);
                    }
                });
            }
        });
    }
}

module.exports = users