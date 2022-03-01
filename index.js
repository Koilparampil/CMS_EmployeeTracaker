const mysql= require('mysql2');
const art= require('ascii-art')
const inquirer = require('inquirer');
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Plokmn0978=-',
      database: 'employee_db'
    },
    console.log(`Connected to the emplyee_db database.`)
  );

spChoices=[
  'View All Employees',
  'View Employees by Department',
  'View Employees by Manager',
  'Add Employee',
  'Remove Employee',
  'Update Employee Role',
  'Update Employee Manager',
  'View All Roles',
  'Add Role',
  'Remove Role',
  'Veiw all Departments',
  'Add Department',
  'Remove Department',
  'Veiw Total Utilized Budget by Department',
  'Quit'
]
departments=[]
roles=[]

db.query('SELECT * FROM departments', function (err, results) {
  results.forEach(element =>{
    departments.push(element.name)
  });
});
db.query('SELECT * FROM roles', function (err, results) {
  results.forEach(element =>{
    roles.push(element.name)
  });
});


async function startingPoint(){
  inquirer
    .prompt([
      {
        
        type: 'list',
        name: 'startingPoint',
        message: `What would you like to do?`,
        choices: spChoices,
      },
      {
        type:'list',
        name:'employeesbyDep',
        message: 'Which Department would you like to see employees for?',
        choices: departments,
        when:(answers)=> answers.startingPoint==='View Employees by Department'
      },
      {
        type:'list',
        name:'employeesbyRole',
        message: 'Which Manager would you like to see employees for?',
        choices: 'BitcH',
        when:(answers)=> answers.startingPoint==='View Employees by Manager'
      }
    ])
}
