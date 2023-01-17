const mysql = require('mysql2');

const inquirer = require('inquirer');

const cTable = require('console.table');

require('dotenv').config()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL.PASSWORD,
    database: 'employee_db'
});

connection.connect(err => {
    if (err)  throw err;
    console.log('Connected as id' + connection.threadId);
    afterConnection();
});

afterConnection = () => {
  console.log("*****************************************************************************************************************")
  console.log("*___________              .__                               ___________                     __                  *")
  console.log("*\_   _____/ _____ ______ |  |   ____ ___.__. ____   ____   \__    ___/___________    ____ |  | __ ___________  *")
  console.log("* |    __)_ /     \\____ \|  |  /  _ <   |  |/ __ \_/ __ \    |    |  \_  __ \__  \ _/ ___\|  |/ // __ \_  __ \ *")
  console.log("* |        \  Y Y  \  |_> >  |_(  <_> )___  \  ___/\  ___/    |    |   |  | \// __ \\  \___|    <\  ___/|  | \/ *")
  console.log("*/_______  /__|_|  /   __/|____/\____// ____|\___  >\___  >   |____|   |__|  (____  /\___  >__|_ \\___  >__|    *")
  console.log("*        \/      \/|__|               \/         \/     \/                        \/     \/     \/    \/        *")
  console.log("*****************************************************************************************************************")
  promptUser();
};

// inquirer prompt for first action
const promptUser = () => {
    inquirer.prompt ([
      {
        type: 'list',
        name: 'choices', 
        message: 'What would you like to do?',
        choices: ['View all departments', 
                  'View all roles', 
                  'View all employees', 
                  'Add a department', 
                  'Add a role', 
                  'Add an employee', 
                  'Update an employee role',
                  'Update an employee manager',
                  "View employees by department",
                  'Delete a department',
                  'Delete a role',
                  'Delete an employee',
                  'View department budgets',
                  'No Action']
      }
    ])
      .then((answers) => {
        const { choices } = answers; 
  
        if (choices === "View all departments") {
          showDepartments();
        }
  
        if (choices === "View all roles") {
          showRoles();
        }
  
        if (choices === "View all employees") {
          showEmployees();
        }
  
        if (choices === "Add a department") {
          addDepartment();
        }
  
        if (choices === "Add a role") {
          addRole();
        }
  
        if (choices === "Add an employee") {
          addEmployee();
        }
  
        if (choices === "Update an employee role") {
          updateEmployee();
        }
  
        if (choices === "Update an employee manager") {
          updateManager();
        }
  
        if (choices === "View employees by department") {
          employeeDepartment();
        }
  
        if (choices === "Delete a department") {
          deleteDepartment();
        }
  
        if (choices === "Delete a role") {
          deleteRole();
        }
  
        if (choices === "Delete an employee") {
          deleteEmployee();
        }
  
        if (choices === "View department budgets") {
          viewBudget();
        }
  
        if (choices === "No Action") {
          connection.end()
      };
    });
  };

  
