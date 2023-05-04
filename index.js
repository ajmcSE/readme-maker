// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    
    type: "input",
    name: "title",
    message: "what is the title of your project?",
},{
    type: "input",
    name: "description",
    message: "what is the description of your project?",
    
},{
    type: "input",
    name: "installation",
    message: "what are the installation instructions?",
},{ 
    type: "input",
    name: "usage",
    message: "what is the purpose of this project?",

},{
    type: "input",
    name: "contributors",
    message: "who contributed to this project?",
},{

    type: "input",
    name: "test",
    message: "who were the testers?",
},{
   
    type: "list",
    name: "licenses",
    message: "what license will you use?",
    choices: ["MIT","Apache","No license"]

}



];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    ).then((answers) => {
        console.log(answers)
        const data = generateMarkdown(answers);

    fs.writeFile('readme.md', data, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
    }) 
}

// Function call to initialize app
init();
