// import { ConnectableObservable } from 'rx';

//Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');

function Bamazon() {

    var connection = mysql.createConnection({
        host: "localhost",
        port: 3307,

        // Your username
        user: "root",

        // Your password
        password: "root",
        database: "Bamazon_db"
    });

    connection.connect(function(err) {
        if (err) {
            console.log("error connecting to Bamazon_db");
            return;
        }
        console.log("Connection to Bamazon database established successfully");
    });

    function storefrontDatabase() {
        connection.query('SELECT * FROM products', function(err, inventory) {
                if (err) throw err;

                console.log('Data received from the "Bamazon" database:\n');

                var selectedID = [];
                var stock = [];
                var cost = [];

                for (var i = 0; i < inventory.length; i++) {
                    console.log(inventory[i].itemID + " | " + inventory[i].departmentNAME);
                    // console.log(separator);
                    console.log(" product name = " + inventory[i].productNAME);
                    console.log(" price per unit = " + inventory[i].price);
                    console.log(" quantity in stock = " + inventory[i].stockQuantity);
                    // console.log('');
                    //
                    selectedID.push("" + inventory[i].itemID);
                    stock.push("" + invetory[i].stockQuantity);
                    cost.push("" + inventory[i].price);
                };
                //call selection function here:
                //Pass in ID, stock, and cost
                selection(selectedID, stock, cost);
                
            }); //end of connector.query

            } //end of storefront.database

        function selection(options, quantities, price) {

            inquirer.prompt([{
                type: "list",
                name: "option",
                message: "What is the itemID of the product you would like to purchase?",
                choices: options
            },{
                type: "input",
                message: "What quantity of the selected product do you want?",
                name: "quantity"
            }
            ]).then(function(choices){
                var index = choices.option -1;
                var total = choices.quantity * price[index];
                console.log("You have selected" + options[index]);
                console.log("There are" + quantities[index] + "of this item available");
                console.log("You have selected" + choices.quantity + "of this item");
                
                if(parseInt(choices.quantity) > parseInt(quantities[index])){
                    console.log("You can't buy blood from a stone");
                    connection.end();
                } else {
                    choices.quantity = quantities[index] - choices.quantity;
                    console.log("You are purchasing"+ choices.quantity + "of this item");
                    //inventoryUpdate(choices);
                }

            }); //end of .then function

            
//update function goes here
        }



            storefrontDatabase();

        }; //end of Bamazon wrapper function

        Bamazon();