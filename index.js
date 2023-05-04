// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    
    type: "input",
    name: "title",
    messeage: "what is the title of your project?",
},{
    type: "input",
    name: "description",
    messeage: "what is the description of your project?",
    
},{
    type: "input",
    name: "installation",
    messeage: "what are the installation instructions?",
},{ 
    type: "input",
    name: "usage",
    messeage: "what is the purpose of this project?",

},{
    type: "input",
    name: "contributors",
    messeage: "who contributed to this project?",
},{

    type: "input",
    name: "test",
    messeage: "who were the testers?",
},{
   
    type: "input",
    name: "license",
    messeage: "what license will you use?",
}



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
