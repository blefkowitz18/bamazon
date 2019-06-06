var inquirer = require("inquirer")
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Brian118",
    database: "bamazonDB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    start();
  });


inquirer.prompt([
    {
        type: "input",
        message: "What is the name of the product you want to purchase?",
        name: "productName"
    },

    {
        type: "input",
        message: "How many units would you like to purchase?",
        name: "productQuantity"
    }
])

