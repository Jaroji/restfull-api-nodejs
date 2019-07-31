# restfull-api-nodejs

Databse structure

Berikut sintaks SQL untuk membuat database

create database ecommerceapp;
	
Berikut sintaks SQL untuk membuat table users

CREATE TABLE users (
    username varchar(30) not null primary key,
    password varchar(255) not null,
    position varchar(100),
    phone varchar(18),
    email varchar(50),
    affiliation varchar(100),
    modified DATE
)

Berikut sintaks SQL untuk membuat table categories

CREATE TABLE categories(
	id int(2) AUTO_INCREMENT not null PRIMARY KEY,
    name varchar(50)
)
	
Berikut sintaks SQL untuk membuat table products

CREATE TABLE products (
	id int(3) AUTO_INCREMENT NOT null PRIMARY KEY,
    name varchar(80),
    price varchar(10),
    duedate DATE,
    active int(1),
    category_id int(2),
    FOREIGN KEY(category_id) REFERENCES categories(id)
)
