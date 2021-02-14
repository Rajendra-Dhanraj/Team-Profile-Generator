const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/templateHtml");
const fs = require("fs");

let manager = [];
let engineer = [];
let intern = [];
let teamArr = { manager, engineer, intern };

function promptUser() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Select employee role",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Enter Employee name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee ID number:",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee email:",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter email address!");
            return false;
          }
        },
      },
    ])
    .then(({ name, id, email, role }) => {
      if (role === "Manager") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "officeNumber",
              message: "Enter the Manager's office number:",
              validate: (numberInput) => {
                if (numberInput) {
                  return true;
                } else {
                  console.log("Please enter managers office number!");
                  return false;
                }
              },
            },
            {
              type: "confirm",
              name: "addNewEmp",
              message: "Add another employee?",
              default: false,
            },
          ])
          .then(({ officeNumber, addNewEmp }) => {
            manager.push(new Manager(name, id, email, officeNumber));
            //console.log(teamArr);
            if (addNewEmp) {
              return promptUser();
            }
          });
      } else if (role === "Engineer") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "github",
              message: "Enter Engineers Github username:",
              validate: (githubInput) => {
                if (githubInput) {
                  return true;
                } else {
                  console.log("Please enter Engineers Github username!");
                  return false;
                }
              },
            },
            {
              type: "confirm",
              name: "addNewEmp",
              message: "Add another employee?",
              default: false,
            },
          ])
          .then(({ github, addNewEmp }) => {
            engineer.push(new Engineer(name, id, email, github));
            //console.log(teamArr);
            if (addNewEmp) {
              return promptUser();
            }
          });
      } else if (role === "Intern") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "school",
              message: "Enter Interns school:",
              validate: (schoolInput) => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log("Please enter Interns school!");
                  return false;
                }
              },
            },
            {
              type: "confirm",
              name: "addNewEmp",
              message: "Add another employee?",
              default: false,
            },
          ])
          .then(({ school, addNewEmp }) => {
            intern.push(new Intern(name, id, email, school));
            //console.log(teamArr);
            if (addNewEmp) {
              return promptUser();
            }
          });
      }
    });
}

promptUser()
  .then((teamInfo) => {
    return generatePage(teamArr);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
// writing file
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      } else console.log("Page Created!");
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

// copying file
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Stylesheet created!",
      });
    });
  });
};
