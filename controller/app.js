var express = require('express');
var cors = require('cors'); 
var app = express();
app.use(cors());
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
var jsonParser = bodyParser.json();
var users = require('../model/users.js');
var categories = require('../model/categories.js');
var products = require('../model/products.js');

//get user by username
app.post('/api/login',urlencodedParser,jsonParser,function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    users.getUserByKey(username,function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

//save the data user
app.post('/api/signup',urlencodedParser,jsonParser,function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var position = req.body.position;
    var email = req.body.email;
    var phone = req.body.phone;
    var affiliation = req.body.affiliation;
    users.signUp(username,password,position,email,phone,affiliation,function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

//update user
app.post('/api/user',urlencodedParser,jsonParser,function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var position = req.body.position;
    var email = req.body.email;
    var phone = req.body.phone;
    var affiliation = req.body.affiliation;
    users.updateUser(username,password,position,email,phone,affiliation,function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

//get all category
app.get('/api/category',function(req,res){
    categories.getCategories(function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

//get category by id
app.get('/api/category/:id',function(req,res){
    var id = req.params.id;
    categories.getCategoryById(id,function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

//save category
app.post('/api/category',urlencodedParser,jsonParser,function(req,res){
    var name = req.body.name;
    categories.addCategory(name,function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

//edit category
app.post('/api/category/:id',urlencodedParser,jsonParser,function(req,res){
    var name = req.body.name;
    var id = req.params.id;
    categories.updateCategory(id,name,function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

//hapus category
app.delete('/api/category/:id',urlencodedParser,jsonParser, function(req,res){
    var id = req.params.id;
    categories.deleteCategory(id,function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

//get products by searching
app.get('/api/productsearch/:key',function(req,res){
    var key = req.params.key;
    products.getProductsByKey(key,function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

//get all products
app.get('/api/products',function(req,res){
    products.getProducts(function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

//get product by id
app.get('/api/products/:id',function(req,res){
    var id = req.params.id;
    products.getProductsById(id,function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

//save the product
app.post('/api/products',urlencodedParser,jsonParser,function(req,res){
    var name = req.body.name;
    var price = req.body.price;
    var duedate = req.body.duedate;
    var active = req.body.active;
    var catid = req.body.category_id;
    products.saveProduct(name,price,duedate,active,catid,function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

//update the product
app.post('/api/products/:id',urlencodedParser,jsonParser,function(req,res){
    var name = req.body.name;
    var price = req.body.price;
    var duedate = req.body.duedate;
    var active = req.body.active;
    var catid = req.body.category_id;
    var id = req.params.id;
    products.updateProduct(id,name,price,duedate,active,catid,function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

//delete products
app.delete('/api/products/:id',urlencodedParser,jsonParser,function(req,res){
    var id = req.params.id;
    products.deleteProducts(id,function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

module.exports = app

