DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id: INT
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL
);

CREATE TABLE role (
    id INT PRIMARY KEY NOT NULL,
    title: VARCHAR(30),
    salary: DECIMAL,
    department_id: INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE department (
    id INT PRIMARY KEY NOT NULL,
    name: VARCHAR(30) NOT NULL,
);