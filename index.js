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
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write out the instructions for use and include screenshots'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'How can someone else contribute, what are the guidelines?'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the instructions to test the application?'
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

//inquirer.prompt(questions).then((answers) => {console.log(answers)});
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
