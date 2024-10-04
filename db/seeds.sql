-- department seeds
INSERT INTO department (department_name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('sales');

-- role seeds
INSERT INTO emp_role (title, salary, department_id)
VALUES
('Banker', '85000', 2),
('Sales Lead', '80000', 3),
('Software Engineer', '160000', 1),
('Junior Engineer', '70000', 4),
('Account Manager', '70000', 1),
('Accountant', '80000', 1),
('Legal Team Lead', '180000', 5),
('Lawyer', '120000', 3),
('Tax collector', '60000', 2),
('Sales Manager', '90000', 5);
    
-- employee seeds 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jeronimo', 'Toro', 2, 1),
('Samuel', 'Doe', 1, 1),
('John', 'Doubt', 4, NULL),
('Stuart', 'Big', 2, NULL),
('Michael', 'Stained', 3, 3),
('Sawyer', 'Sword', 6, 3),
('Circus', 'Cruz', 8, 4),
('Holy', 'Possum', 7, 3),
('Hairy', 'Yard', 5, 2),
('Sarah', 'Summit', 4, NULL),
('Luz', 'Rojo', 7, NULL),
('Liz', 'Rose', 4, 2);

-- manager seeds
INSERT INTO manager (first_name, last_name, role_id)
VALUES
('Luz', 'Rojo', 7),
('Sarah', 'Summit', 4),
('John', 'Doubt', 4),
('Stuart', 'Big', 2);
 