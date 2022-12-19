import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue(`
    // | |  /__  ___/ /|    //| | 
   //__| |    / /    //|   // | | 
  / ___  |   / /    // |  //  | | 
 //    | |  / /    //  | //   | | 
//     | | / /    //   |//    | | 
`));
const userInput = await inquirer.prompt([
    {
        name: "user_id",
        type: "input",
        message: "Enter your User Id:",
    },
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
        when(answer) {
            return answer.user_id;
        },
    },
    {
        name: "acc_type",
        type: "list",
        choices: ["Current Account", "Saving Account"],
        message: "Choose account type",
        when(answers) {
            return answers.pin;
        },
    },
    {
        name: "options",
        type: "list",
        choices: ["Fast Cash", "Current Inquiry", "Cash Withdraw"],
        message: "Choose given below",
        when(answers) {
            return answers.acc_type;
        },
    },
    {
        name: "cash_amt",
        type: "list",
        choices: [500, 1000, 2000, 3000, 4000, 5000],
        message: "Choose amount to withdraw",
        when(answers) {
            return answers.options == "Fast Cash";
        },
    },
    {
        name: "cash_amt",
        type: "number",
        message: "Enter your amount",
        when(answers) {
            return answers.options == "Cash Withdraw";
        },
    },
]);
const { user_id, pin, acc_type, options, cash_amt } = userInput;
const balance = Math.floor(Math.random() * 10000);
if (user_id && pin && cash_amt) {
    if (cash_amt > balance) {
        console.log(chalk.red(`Insufficient Balance`));
    }
    else {
        let currentBalance = balance - cash_amt;
        console.log(chalk.green(`Transaction Sucessfull \nYour Current Balance is: ${currentBalance}`));
    }
}
