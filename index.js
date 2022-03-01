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
managers=[]

db.query('SELECT * FROM departments', function (err, results) {
  results.forEach(element =>{
    departments.push(element.name)
  });
});
db.query(`SELECT CONCAT(m.first_name, ' ', m.last_name) AS manager 
FROM employees AS e LEFT JOIN employees AS m ON e.manager_id = m.id
WHERE m.id IS NOT NULL`, function (err, results) {
  results.forEach(element =>{
    if (!managers.includes(element.manager)){
    managers.push(element.manager)
    }
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
        name:'employeesbyMan',
        message: 'Which Manager would you like to see employees for?',
        choices: managers,
        when:(answers)=> answers.startingPoint==='View Employees by Manager'
      }
    ])
    .then(answers => {
      switch(answers.startingPoint){
        case 'View All Employees':
          viewEmployees().then(startingPoint());
          break;
        case 'View Employees by Department':
          viewByDep(answers.employeesbyDep);
          startingPoint()
          break;
        case 'View Employees by Manager':
          viewbyMan(answers.employeesbyMan)
          startingPoint()
          break;
        case 'Add Employee':
          startingPoint()
          break;
        case 'Remove Employee':
          startingPoint()
          break;
        case 'Update Employee Role':
          startingPoint()
          break;
        case 'Update Employee Manager': 
        startingPoint()
          break;
        case 'View All Roles':
          startingPoint()
          break;
        case 'Add Role':
          startingPoint()
          break;
        case 'Remove Role':
          startingPoint()
          break;
        case 'Veiw all Departments':
          startingPoint()
          break;
        case 'Add Department':
          startingPoint()
          break;
        case 'Remove Department':
          startingPoint()
          break;
        case 'Veiw Total Utilized Budget by Department':
          startingPoint()
          break;
        case 'Quit':
          db.end()
          return;
      }
    })
}

startingPoint()

let viewEmployees = () =>{
db.query('SELECT * FROM employees', function (err, results) {
    console.table(results);
});
}

let viewByDep = (department)=>{
  db.query(`SELECT employees.id, employees.first_name, employees.last_name, departments.name AS department 
  FROM employees 
  INNER JOIN roles ON employees.role_id = roles.id 
  INNER JOIN departments ON roles.department_id = departments.id 
  WHERE departments.name = '${department}'
  ORDER BY employees.id`, function (err, results) {
    console.table(results);
});
}

let viewbyMan = (manager) =>{
  db.query(`SELECT e.id, e.first_name, e.last_name, CONCAT(m.first_name, ' ', m.last_name) AS manager 
  FROM employees AS e LEFT JOIN employees AS m ON e.manager_id = m.id
  WHERE CONCAT(m.first_name, ' ', m.last_name) = '${manager}'`, function (err,results){
    console.table(results)
  })
}