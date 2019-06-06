DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (50),
department_name VARCHAR (50),
price FLOAT (5),
stock_quantity INT (2),
primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("body wash", "cosmetics", 3.65, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("shampoo", "cosmetics", 4.65, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("basketball", "sports", 5.15, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("volleyball", "sports", 8.05, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("t-shirts", "clothing", 10.50, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("athletic shorts", "clothing", 15.29, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("dry erase markers", "school supplies", 2.50, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("pencils", "school supplies", 0.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("poufs", "home-decor", 40.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("canvas", "home-decor", 30.00, 12);

SELECT * FROM products