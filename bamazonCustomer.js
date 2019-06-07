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
      type: "list",
      message: "What is the name of the product you want to purchase?",
      choices: ["body wash", "shampoo", "basketball", "volleyball", "t-shirts", "athletic shorts", "poufs", "canvas", "pencils", "dry-erase markers"],
      name: "productName"
    },

  ]).then(function (answer) {
    var query = "SELECT * FROM products WHERE ?";
    connection.query(query, { product_name: answer.productName }, function (err, res) {
      for (var i = 0; i < res.length; i++) {
        var chosenItem = res[i].product_name;
          console.log(chosenItem);
          quantitySearch();
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
