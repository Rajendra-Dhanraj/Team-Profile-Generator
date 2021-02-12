const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let checkManagerAdded = true;

const pickRoleType = [
  {
    type: "list",
    name: "roleType",
    message: "Please select employee type",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const questions = {
  Manager: [
    {
      type: "input",
      name: "name",
      message: 'Enter managers name:',
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter managers name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter managers id:",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter managers id:");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter managers email address:",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter managers email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter managers office number",
      validate: (numberInput) => {
        if (numberInput) {
          return true;
        } else {
          console.log("Please enter managers office number!");
          return false;
        }
      },
    },
  ],
};

const promptUser = () => {
  return inquirer.prompt(pickRoleType).then((response) => {
    if (response.roleType === "Manager") {
      if (checkManagerAdded) {
        inquirer.prompt(questions.Manager).then((response) => {
          const manager = new Manager(
            response.name,
            response.id,
            response.email,
            response.officeNumber
          );
        });
      }
    }
  });
};

promptUser();
