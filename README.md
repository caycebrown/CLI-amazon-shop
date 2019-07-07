# About
This is a simple CLI application built with Node that mimics some limited functionality of an online store. It is able to keep track of inventory with the help of a local database and allow's the user to make 'purchases' if the inventory is availeble. The application also updates inventory quantities in correlation with 'purchases'.

#### View a video demonstration of this application via the link below:
https://drive.google.com/file/d/19zIiTOAiaHMFRK4b7SwScTjAgkOb9UYy/view

## Getting Started

### Requirements
* Node
* MySQL (workbench & server)

### Installation

To begin you will need to for your own copy of this repository. If you're unfamiliar with this, check here [How-to fork a repository](https://help.github.com/en/articles/fork-a-repo)

You will also need to install Nodejs if you haven't already - you can find it here --> [Node Homepage](https://nodejs.org/en/)

Next, you will need do install MySQL. [MySQL Installation Guide](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/), I recommend using the MySQL installer, information on this method is found in the previous link.

### Setup

Once the installation is complete, you will need to setup a connection and start your MySQL server. 
* A guide on that here --> [Connection Guide](https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-create-connection.html)

In the MySQL workbench you will need to create a database called 'bamazon_DB'.
To do this open up a new query tab from the Workbench home tab. In the query field run the following SQL statements to set up and populate your database:

```SQL

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INTEGER(10) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price NUMERIC(10 , 2 ) NOT NULL,
    stock_quantity INTEGER(10)
);
```

Once this is done, you will need to populate the table you just created with products for the application to use. To do this you will need to run the following code in the query field after clearing the previous code.

```SQL

INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES('product1', 'electronics', 49.99, 25);
```
You can duplicate this query as many times as you'd like and simply change the parameters inside the VALUES statement to add new items.
Next you will need to check a few settings inside the bamazonCustomer.js file.

At the begginning of the file check these settings:

```javascript
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'bamazon_DB',
    port: 3306,
  });
  ```
  
  You want to make sure that these settings match the connection settings from the MySQL workbench connection you setup earlier.
  * **IMPORTANT NOTE** *It is not recommended to push code to GitHub that includes your MySQL password if you have anything at all that needs to be kept secure in MySQL*. If you want to push code to Github, you can simply enter a dummy password in the connection settings before you push. Of course there are also alternative methods for keeping your password safe, but I will not cover those here at the moment.

If you are unsure about the connection settings you previously setup - check them by clicking 'database' > 'manage connections' in MySQL workbench. It should bring up a window resembling this:

 
  
  

