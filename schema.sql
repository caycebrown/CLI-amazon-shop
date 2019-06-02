CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INTEGER(10) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price NUMERIC(10 , 2 ) NOT NULL,
    stock_quantity INTEGER(10)
);


--The below sytax can be used to populate the table with data, simply update the 4 fields with your desired values.

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('product1', 'electronics', 49.99, 25);
