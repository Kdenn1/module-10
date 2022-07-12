//declare the const values 
const inquirer = require("inquirer");
const fs = require("fs");
//link to the test files for each class 
const Engineer = require("./Tests/Engineer.test");
const Intern = require("./Tests/Intern.test");
const Manager = require("./Tests/Manager.test");

//empty string 
const employees = [];

//function to start the app and prompt user with questions and update the member list 
function initApp() {
    startHtml(); //generate the html from question responses
    addMember(); //add a new member to the group 
}

//Prompts user with questions 
function addMember() {
    inquirer.prompt([{
        //start passing messages into the terminal for user to answer 
        message: "What is your team manager's name?",
        name: "name"
        },
        {
         message: "What is your employee ID?",
         name: "ID"
        },
        {
        message: "What is your email address?",
        name: "email"
        },
        {
        message: "What is your office number?",
        name: "office"
        },
        {
        type: "list",
        message: "What position will you be adding to your team?",
        choices: [
            "Engineer",
            "Intern",
            "Finish building team"
        ],
        name: "role"
    }])

// .then function to determine what happens after user selects one of the options 
.then(function({name, role, ID, email}){
let roleInfo = "";
//if statement for Engineer, Intern or finish outcomes  
if(role === "Engineer") {
    roleInfo = "Github Username";
} else if (role === "Intern") {
    roleInfo = "school name";
} else {
    roleInfo = "phone number";
}
inquirer.prompt([{
    message: `Please Enter your team member's ${roleInfo}`,
    name: "roleInfo"
},
{
    type: "list",
    message: "Do you need to add more team members?",
    choices: [
        "yes",
        "no"
    ],
    name: "moreMembers"
}])
//if else statment to add more members or be done generating employee list 
.then(function({roleInfo, moreMembers}){
    let newMember;
    //if statement for engineer 
    if (role === "Engineer") {
        newMember = new Engineer(name, id, email, roleInfo);
    }
})
})



}
