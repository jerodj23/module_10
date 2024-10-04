DROP DATABASE IF EXISTS emp_manager;
CREATE DATABASE emp_manager;
\c emp_manager;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS emp_role;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS manager;

CREATE TABLE department (
        id SERIAL PRIMARY KEY,
        department_name VARCHAR(30) NOT NULL
);

CREATE TABLE emp_role (
        id SERIAL PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL(10, 2) NOT NULL,
        department_id INTEGER NOT NULL
);

CREATE TABLE employee (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INTEGER NOT NULL,
        manager_id INTEGER
);

CREATE TABLE manager (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INTEGER NOT NULL
);
  