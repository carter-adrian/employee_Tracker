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

