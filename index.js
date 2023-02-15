const inquirer = require("inquirer");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require("fs");
const generateHtml = require('./src/templateHTML.js');
const pageArray = [];

function app() {
    function createTeam() {
        inquirer.prompt([{
                type: "list",
                name: "selectEmployee",
                message: "What type of employee would you like to add to your team?",
                choices: ["Manager", "Engineer", "Intern", "Finish adding team members."]
        }]).then(function (userInput) {
            console.log(userInput);
            switch (userInput.selectEmployee) {
                case 'Manager': addManager();            
                    break;
                case 'Engineer': addEngineer();
                    break;
                case 'Intern': addIntern();
                    break;
                default: teamMembers();
            }
        })
        };

function addManager() {
    console.log(`
    =============================
    Adding employees to the team
    =============================
    `);
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the manager's name?",
                    name:"managerName",
                },
                {
                    type: "input",
                    message:"What is the manager's employee ID?",
                    name:"managerId",
                },
                {
                    type: "input",
                    message: "What is the manager's email address?",
                    name: "managerEmail",
                },
                {
                    type: "input",
                    message: "What is the manager's office number?",
                    name: "managerOfficeNumber",
                }
            ]).then((data) => {
                const manager = new Manager(
                    data.managerName,
                    data.managerId,
                    data.managerEmail,
                    data.managerOfficeNumber,
                )
                pageArray.push(manager);
                createTeam();
            })
        };

function addEngineer() {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the engineer's name?",
                    name:"engineerName",
                },
                {
                    type: "input",
                    message:"What is the engineer's employee ID?",
                    name:"engineerId",
                },
                {
                    type: "input",
                    message: "What is the engineer's email address?",
                    name: "engineerEmail",
                },
                {
                    type: "input",
                    message: "What is the engineer's github name?",
                    name: "engineerGithub",
                }
            ]).then((data) => {
                const engineer = new Engineer(
                    data.engineerName,
                    data.engineerId,
                    data.engineerEmail,
                    data.engineerGithub,
                )
                pageArray.push(engineer);
                createTeam();
            })
        };

function addIntern() {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the intern's name?",
                    name:"internName",
                },
                {
                    type: "input",
                    message:"What is the intern's employee ID?",
                    name:"internId",
                },
                {
                    type: "input",
                    message: "What is the intern's email address?",
                    name: "internEmail",
                },
                {
                    type: "input",
                    message: "What is the intern's school name?",
                    name: "internSchool",
                }
            ]).then((data) => {
                const intern = new Intern(
                    data.internName,
                    data.internId,
                    data.internEmail,
                    data.internSchool,
                )
                pageArray.push(intern);
                createTeam();
            })
        };

function teamMembers(){
            console.log(pageArray);
            fs.writeFile('./dist/team.html', generateHtml(pageArray), (err) =>
            err ? console.error(err) : console.log('Success! File has been created.'));
        };
    createTeam();

    };
    
    app();
    


