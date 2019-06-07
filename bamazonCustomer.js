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
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    inquirer.prompt([
      {
        name: "productName",
        type: "rawlist",
        message: "What is the name of the product you want to purchase?",
        choices: function () {
          var choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push(results[i].product_name);
          }
          return choiceArray;
        }
      },
      {
        type: "input",
        message: "How many units would you like to purchase?",
        name: "productQuantity"
      },

    ]).then(function (answer) {
      var chosenItem;
      for (var i = 0; i < results.length; i++) {
        if (results[i].product_name === answer.productName) {
          chosenItem = results[i];
        }
      }
      var intProductQuantity = parseInt(answer.productQuantity)
      if (chosenItem.stock_quantity < intProductQuantity) {
        console.log("insufficient Quantity");
        runSearch()
      }
      else {
        newStockQuantity = chosenItem.stock_quantity - intProductQuantity
        connection.query(
          "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: newStockQuantity
          },
          {
            id: chosenItem.id
          }
        ],
          function(){
            var price = chosenItem.price * intProductQuantity
            console.log("The cost of your order will be $" + price + ".");
            runSearch()
          }
        )
      }
    })
  })
}