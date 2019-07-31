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

//get all category
app.get('/api/category',function(req,res){
    console.log("reached");
    categories.getCategories(function(err,result){
        if(!err){
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(500).send("{\"result\":\"error\"}")
        }
    });
});

module.exports = app

