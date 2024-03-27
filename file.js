#! /usr/bin/env node
import inquirer from "inquirer";
let accountPin = 2585;
let accountBalance = 25000; // dollars
console.log(accountPin);
const pinAnswer = await inquirer.prompt([
    {
        name: "atmPin",
        type: "number",
        message: "please enter your pin to proceed:",
    },
]);
if (pinAnswer.atmPin === 2585) {
    const proceed = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select one of the transaction mode to proceed the transaction:",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    if (proceed.operation === "withdraw") {
        let amount = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "enter the amount you want to withdraw",
        });
        if (amount.amount <= accountBalance) {
            console.log(`withdrawl successful! your remaining balance is: ${accountBalance - amount.amount}`);
        }
        else
            console.log("insufficient balance");
    }
    else if (proceed.operation === "fast cash") {
        let amount = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "please select one amount",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        if ((amount.fastCash === 1000, 2000, 5000, 10000)) {
            console.log(`withdrawl successful! your remaining balance is: ${accountBalance - amount.fastCash}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
    if (proceed.operation === "check balance") {
        console.log(`${accountBalance}`);
    }
}
else {
    console.log("incorrect pin");
}
