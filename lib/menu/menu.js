const inquirer = require("inquirer");
const { viewDepartmentsMenu, addDptMenu } = require("./dpt");
const { viewAllRolesMenu, addRoleMenu } = require("./role");
const {
  viewAllEmployeesMenu,
  addEmployeeMenu,
  updateEmployeeRoleMenu,
} = require("./employee");

exports.mainMenu = mainMenu;

function mainMenu() {
  console.clear();
  console.log(`
    =================
    Employee Manager 
    =================
    `);
  
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuSelect",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
        ],
        default: "View All Employees",
      },
    ])
    .then(({ menuSelect }) => {
      switch (menuSelect) {
        case "View All Employees":
          console.clear();
          viewAllEmployeesMenu();
          break;
        case "Add Employee":
          console.clear();
          addEmployeeMenu();
          break;
        case "Update Employee Role":
          console.clear();
          updateEmployeeRoleMenu();
          break;
          case "View All Roles":
            console.clear();
            viewAllRolesMenu();
            break;
          case "Add Role":
            console.clear();
            addRoleMenu();
            break;
        case "View All Departments":
          console.clear();
          viewDepartmentsMenu();
          break;
        case "Add Department":
          console.clear();
          addDptMenu();
          break;
      }
    });
}

function exit() {
  console.clear();
  console.log("Shutting down... hit ctrl + c and use 'npm start' to reboot");
}
