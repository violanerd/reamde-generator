// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    const data = await inquirer.prompt(questions);
    const markdown = generateMarkdown(data);
    console.log(markdown);
};
// function init() {
//     return inquirer.prompt(questions)
//     .then(data => {
//         return generateMarkdown(data);
//     })
//     .then(markdown => {
//         console.log(markdown);
//     })
// };

// Function call to initialize app
init();
