import { ConnectableObservable } from 'rx';

//Dependencies
const mySQL = require('mySQL');
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
        ConnectableObservable.query('SELECT * FROM products', function(err, inventory) {
            if (err) throw err;

            console.log('Data received from the "Bamazon" database:\n');

            var selectedID = [];
            var stock = [];
            var cost = [];

            for (var i = 0; i < inventory.length; i++) {
                console.log(inventory[i].itemID + " | " + inventory[i].departmentName);
                console.log(separator);
                console.log(" product name =" + inventory[i].productName);
                console.log(" price per unit =" + inventory[i].price);
                console.log(" quantity in stock =" + inventory[i].stockQuantity);
                console.log('');
                //
            }
        })
    }







} //end of Bamazon wrapper function