var pool = require('./databaseConfig.js');

var categories = {
    getCategories:function (callback){
        console.log("reached too");
        pool.getConnection(function(err,conn){
            console.log("reached too 1");
            if(err){
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Database connected");
                var sql = 'SELECT * FROM categories';
                conn.query(sql, function(err,result){
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

    getCategoryById:function (id,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Database connected");
                var sql = 'SELECT * FROM categories WHERE id=?';
                conn.query(sql,[id], function(err,result){
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

    addCategory:function (name,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Database connected");
                var sql = 'INSERT INTO categories (name) VALUES (?)';
                conn.query(sql,[name], function(err,result){
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

    updateCategory:function (id,name,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Database connected");
                var sql = 'UPDATE categories SET name=? WHERE id=?';
                conn.query(sql,[name,id], function(err,result){
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

    deleteCategory:function (id,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Database connected");
                var sql = 'DELETE FROM categories WHERE id=?';
                conn.query(sql,[id], function(err,result){
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
    }
};

module.exports = categories