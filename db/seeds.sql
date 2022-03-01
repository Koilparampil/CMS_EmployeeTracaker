INSERT INTO departments (name)
VALUES ("Research and Development"),
       ("Production"),
       ("Marketing"),
       ("Human Resources"),
       ("Accounting"),
       ("Finance"),
       ("Executive"),
       ("Operations");

INSERT INTO roles (title, salary, department_id)
VALUES ("General Manager",465581,8),
       ("Lead Scientist",981534,1),
       ("Marketing Producer",135114,3),
       ("Therapist",301241,4),
       ("Financeer",112113,6),
       ("Operator",843165,8),
       ("Accountant",80400,5),
       ("CEO",180400,7),
       ("Producer",789654,2);


INSERT INTO employees (first_name,last_name,role_id,manager_id)
VALUES ("Shawn","Reed",1,7),
       ("May","Mitchell",2,NULL),
       ("Abbie","Smith",3,1),
       ("Blake","Fischer",4,1),
       ("Four","Price",5,3),
       ("Pinch","Reyes",6,7),
       ("Lauren","Roberts",9,3),
       ("Liz-Marie","Lee",8,null);