//declare the const values 
const inquirer = require("inquirer");
const fs = require("fs");
//link to the test files for each class 
const Engineer = require("./Tests/Engineer.test");
const Intern = require("./Tests/Intern.test");
const Manager = require("./Tests/Manager.test");

//empty string 
const employees = [];

//function to start the app and prompt user with questions 
function initApp() {
    startHtml(); //generate the html from question responses
    addMember(); //add a new member to the group 
}

