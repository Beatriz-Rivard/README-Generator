// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of the project?'
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please provide a brief description of this project'
        },
        {
          type: 'input',
          name: 'contents',
          message: 'What is this project about?'
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Please provide instructions of how to install the project'
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Please provide the usage of the project'
        },
        {
          type: 'list',
          name: 'license',
          message: 'Choose a license for this project:',
          choices: ['MIT', 'Apache', 'None'],
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'How can others contribute to your project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide instructions of how to test your project'
          },
          {
            type: 'input',
            name: 'questions',
            message: 'If you have any questions, feel free to reach out.'
          },
      
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(README-PG, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully generated! ${utils/README-PG}`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.inquirer.prompt(questions).then(function(data) {
    writeToFile("README-PG", generateMarkdown(data));
    console.log(data)
  })
}

// Function call to initialize app
init();

