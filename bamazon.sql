CREATE DATABASE Bamazon_db;

use Bamazon_db;
CREATE TABLE products (
	itemID integer NOT NULL auto_increment,
    productNAME varchar(60),
    departmentNAME varchar(50),
    price float (62,2),
    stockQuantity integer NOT NULL,
    constraint PRIMARY KEY (itemID)
    );
    
use Bamazon_db;
CREATE TABLE departments (
	departmentID integer NOT NULL auto_increment,
    departmentName VARCHAR(60),
    overheadCosts decimal(62,2),
    totalSales decimal(62,2),
    constraint PRIMARY KEY (departmentID)
    );
    
INSERT INTO products (productName, departmentName, price, stockQuantity)
	values ('The Gulag Archipelago', 'books', 19.99, 10);
INSERT INTO products (productName, departmentName, price, stockQuantity)
	values ('Valerian and the City of A Thousand Planets', 'movies', 19.99, 10);
INSERT INTO products (productName, departmentName, price, stockQuantity)
	values ('Gevalia Deluxe Coffee Maker', 'housewares', '59.99', 10);
INSERT INTO products (productName, departmentName, price, stockQuantity)
	values ('BioShock Infinite','Video Games' , 20.00, 30);
INSERT INTO products (productName, departmentName, price, stockQuantity)
	values ('Lenovo Flex Laptop','Electronics', 599.99, 25);
INSERT INTO products (productName, departmentName, price, stockQuantity)
	values ('','' , ,);
INSERT INTO products (productName, departmentName, price, stockQuantity)
	values ('','' , ,);
INSERT INTO products (productName, departmentName, price, stockQuantity)
	values ('','' , ,);
INSERT INTO products (productName, departmentName, price, stockQuantity)
	values ('','' , ,);
    
INSERT INTO departments (departmentName, overheadCosts, totalSales)
	values ('books', 10.00, 20);
INSERT INTO departments (departmentName, overheadCosts, totalSales)
	values ('movies', 300.00, 68);
INSERT INTO departments (departmentName, overheadCosts, totalSales)
	values ('housewares', 6000.00, 315);
INSERT INTO departments (departmentName, overheadCosts, totalSales)
	values ();
			
	