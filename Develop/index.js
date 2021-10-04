const inquirer = require('inquirer');
const fs = require("fs");
const generateHtml = require("./utils/generateHtml.js");
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

const questions = []

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHtml(data), (err) =>
  err ? console.error(err) : console.log('HTML CREATED')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('index.html', data)
    })
    .then(() => console.log('HTML CREATED SUCCESSFULLY!'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
