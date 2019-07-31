var pool = require('./databaseConfig');

var products = {
    getProducts:function(callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Database connected");
                var sql = 'SELECT * FROM products';
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

    getProductsById:function(id,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Database connected");
                var sql = 'SELECT * FROM products WHERE id=?';
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

    saveProduct:function(name,price,duedate,active,catid,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Database connected");
                var sql = 'INSERT INTO products (name,price,duedate,active,category_id) VALUES (?,?,?,?,?)';
                conn.query(sql,[name,price,duedate,active,catid], function(err,result){
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

    updateProduct:function(id,name,price,duedate,active,category_id,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Database connected");
                var sql = 'UPDATE products SET name=?,price=?,duedate=?,active=?,category_id=? WHERE id=?';
                conn.query(sql,[name,price,duedate,active,category_id,id], function(err,result){
                    conn.release;
                    if(err){
                        console.log(err);
                        return callback(err,null);
                    } else {
                        console.log(result);
                        return callback(null, result)
                    }
                });
            }
        });
    },

    deleteProducts:function(id,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Database connected");
                var sql = 'DELETE FROM products WHERE id=?';
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
}

module.exports = products