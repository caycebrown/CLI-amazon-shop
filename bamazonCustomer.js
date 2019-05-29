var mysql = require("mysql");

var inquirer = require("inquirer");

console.log('Welcome to the bamazon shop!\n');

idArray = [1,2,3,4,5]//need to poplulate this array with id's from DB

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
        console.log('your 1st prompt is working\n');
        
        inquirer.prompt([
            {
                type: "input",
                message: "Enter the quantity you would like to purchase:",
                name: "quantity"
            }]).then(function(response){
                console.log(response.quantity);
                console.log('your 2nd prompt is working');

                inquirer.prompt([
                    {
                        type: "confirm",
                        message: "Would you like to make another purchase?",
                        name: "runAgain"
                    }]).then(function(response){
                        if (response.runAgain){
                            purchase();}
                    });
            });
    });

};


purchase();