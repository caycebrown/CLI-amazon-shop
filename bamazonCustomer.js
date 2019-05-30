var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'bamazon_DB',
    port: 3306,
  });
   
  connection.connect();
   
function makeListing(data){
    console.log(`------------------
Item Number: ${data.item_id}
Item: ${data.product_name}
Price: ${data.price}
------------------\n`);
};   

idArray = [];//Will be used to select items for purchase by item_id via inquirer prompt


//Populates idArray with appropriate item_ids for products in DB
connection.query('SELECT item_id from products', function (err, results){
    if (err) throw (err);
    for (i = 0; i < results.length; i++){
        idArray.push(results[i].item_id);
    };
});

console.log('\nWelcome to the bamazon shop!\n');


//Creates a listing for each product in the DB
connection.query('SELECT * from products', function (error, results) {
    if (error) throw error;
    results.map(makeListing);
    purchase();
  });



//=====================================================================
//Initial Prompt For User Interaction With Application
//=====================================================================
function purchase(){

    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to purchase?",
            choices: idArray,
            name: "selectItem"
        }
    ]).then(function(response){
        console.log(response.selectItem);
        
        inquirer.prompt([
            {
                type: "input",
                message: "Enter the quantity you would like to purchase:",
                name: "quantity"
            }]).then(function(response){
                console.log(response.quantity);

                inquirer.prompt([
                    {
                        type: "confirm",
                        message: "Would you like to make another purchase?",
                        name: "runAgain"
                    }]).then(function(response){
                        if (response.runAgain){
                            purchase();}
                        connection.end();
                    });
            });
    });

};

