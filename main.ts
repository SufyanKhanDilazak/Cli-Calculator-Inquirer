#! /usr/bin/env node 
import inquirer from 'inquirer';
const answer =  await inquirer.prompt([
    {
type:"number",
name:"num1",
message:"Enter first number"

    },
    {
type:"number",
name:"num2",
message:"Enter second number"

    },
    {
type:"list",
name:"operator",
message:"Select Operator",
choices:["Add","Subtract","Multiply","Divide"]
    }
])
let result:number
switch(answer.operator){
    case "Add":
        result=answer.num1+answer.num2
        console.log(`answer  ` + result)
        break;
    case "Subtract":
        result=answer.num1-answer.num2
        console.log(`answer  ` + result)
        break;
    case "Multiply":
        result=answer.num1*answer.num2
        console.log(`answer  ` + result)
        break;
    case "Divide":
        result=answer.num1/answer.num2
        console.log(`answer  `+ result)
        break;
}