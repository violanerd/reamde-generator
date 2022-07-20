// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('node:fs/promises'); 
const generateMarkdown = require('./utils/generateMarkdown');

const dummyData = {
    username: 'Maddy',
    email: 'Test',
    title: 'Test',
    description: 'Test',
    license: 'MIT',
    installation: 'npm i',
    usage: '',
    contributing: '',
    testInstructions: 'npm test'
  }
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'CDDL-1.0', 'none'],
        default: 'MIT'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write out the instructions for use and include screenshots'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does a user need to know about contributing?'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the instructions to test the application?',
        default: 'npm test'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
    const data = await inquirer.prompt(questions, dummyData);
    const markdown = generateMarkdown(data);
    writeToFile('README.md', markdown);
};

// Function call to initialize app
init();

// function init() {
//     return inquirer.prompt(questions)
//     .then(data => {
//         return generateMarkdown(data);
//     })
//     .then(markdown => {
//         writeToFile('README.md', markdown);
//     })
// };