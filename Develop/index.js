const inquirer = require('inquirer');
// const fs = require("fs");
// const generateHtml = require("./utils/generateHtml.js");
// // const Engineer = require('./lib/engineer.js');
// // const Manager = require('./lib/manager.js');
// // const Intern = require('./lib/intern.js');

// if you don't have the required employees, you can't start the team profile

const questions = [
    //manager prompts
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of your team manager?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's employee ID?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email address?"
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the team manager's Office Number?"
    },
    //engineer prompts
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the name of your team engineer?"
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is the team engineer's employee ID?"
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the team engineer's email address?"
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the team engineer's Github username?"
    },
    //intern prompts
    {
        type: 'input',
        name: 'internName',
        message: "What is the name of your team intern?"
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the team intern's employee ID?"
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the team intern's email address?"
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is the team intern's University/School?"
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHtml(data), (err) =>
  err ? console.error(err) : console.log('HTML CREATED')
  );
}


function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('index.html', data)
    })
    .then(() => console.log('HTML CREATED SUCCESSFULLY!'))
    .catch((err) => console.error(err));
}

function companyReady() { 
    inquirer.prompt([{
        type: 'confirm',
        name: 'ready',
        message: 'Does your company have a Manager, Engineer, and Intern?'
    }]).then((data) => {
        if(data.ready) {
           // Function call to initialize app if condition is true
            init();
        } else {
          return console.log("Please come back when you have enough employees")  
        }
    }).catch((err) => console.error(err));
}
// Function call to initialize app
companyReady();
