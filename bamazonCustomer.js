var inquirer = require("inquirer")
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Brian118",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});


function runSearch() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the product you want to purchase?",
      name: "productName"
    },

  ]).then(function (answer) {
    var query = "SELECT product_name FROM products";
    connection.query(query, { product_name: answer.productName }, function (err, res) {
      for (var i = 0; i < res.length; i++) {
        if (answer.productName === res[i]) {
          console.log(productName);
          quantitySearch();
        }
        else {
          console.log("please search for a different item.")
          runSearch()
        }
      }
    })
  })
}

function quantitySearch(){
  inquirer.prompt([
    {
      type: "input",
      message: "How many units would you like to purchase?",
      name: "productQuantity"
    }
  ]).then(function (answer) {
    
  })
}
