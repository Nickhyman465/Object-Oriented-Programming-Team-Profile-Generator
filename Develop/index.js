const inquirer = require('inquirer');
const generateHtml = require("./utils/generateHtml.js");
const Engineer = require('./lib/engineer.js');
const Manager = require('./lib/manager.js');
const Intern = require('./lib/intern.js');


let teamMembers = [];
const managerRole = new Manager();
const engineerRole = new Engineer();
const internRole = new Intern();

function addManager() { 
    inquirer.prompt([
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
    {
        type: 'list',
        message: 'Please use the arrow keys to select from the following options',
        choices: ["Add an Manager", "Add an engineer", "Add an Intern", "View my current team"],
        name: 'options'
    }
    ]).then((data) => {
    const mRole = managerRole.getRole();

        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber, mRole)
    
    teamMembers.push(manager);
    console.log(teamMembers);
    switch (data.options) {
        case "Add an Manager":
            addManager();
            break;
        case "Add an engineer":
            addEngineer();
            break;
        case "Add an Intern":
            addIntern();
            break;
        case "View my current team":
            currentTeam(teamMembers);
            break;
    }
    })
}

function addEngineer() {
    inquirer.prompt([
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
    {
        type: 'list',
        message: 'Please use the arrow keys to select from the following options',
        choices: ["Add an Manager", "Add an engineer", "Add an Intern", "View my current team"],
        name: 'options'
    }
    ]).then((data) => {
        const eRole = engineerRole.getRole();

    const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub, eRole)
    
    teamMembers.push(engineer);
    console.log(teamMembers);
    switch (data.options) {
        case "Add an Manager":
            addManager();
            break;
        case "Add an engineer":
            addEngineer();
            break;
        case "Add an Intern":
            addIntern();
            break;
        case "View my current team":
            currentTeam(teamMembers);
            break;
    }
    })
}

function addIntern() {
    inquirer.prompt([
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
    {
        type: 'list',
        message: 'Please use the arrow keys to select from the following options',
        choices: ["Add an Manager", "Add an engineer", "Add an Intern", "View my current team"],
        name: 'options'
    }
    ]).then((data) => {
        const iRole = internRole.getRole();

        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool, iRole)
        
        teamMembers.push(intern);
        console.log(teamMembers);
        switch (data.options) {
            case "Add an Manager":
                addManager();
                break;
            case "Add an engineer":
                addEngineer();
                break;
            case "Add an Intern":
                addIntern();
                break;
            case "View my current team":
                currentTeam(teamMembers);
                break;
        }
        })
}

//  function writeToFile(fileName, data) {
//      fs.writeFile(fileName, generateHtml(data), (err) =>
//    err ? console.error(err) : console.log('HTML CREATED')
//    );
//  }


  function currentTeam(teamMembers) {
     
        //  console.log(teamMembers);
         generateHtml(teamMembers);
     
  }

function companyReady() { 
    inquirer.prompt([{
        type: 'confirm',
        name: 'ready',
        message: 'Does your company have a Manager?'
    }]).then((data) => {
        if(data.ready) {
        // call addManager prompt function to start adding team profiles
        addManager();
        } else {
          return console.log("Please come back when you have a team manager")  
        }
    }).catch((err) => console.error(err));
}
// Function call to initialize app
companyReady();
