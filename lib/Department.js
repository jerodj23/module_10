const db = require("../src/connection");
const cTable = require("console.table");

class Dpt {
  constructor(id, department_name) {
    (this.id = id), (this.department_name = department_name);
  }
  getAll() {
    const sql = `SELECT * FROM department`;
    return db
      .promise()
      .query(sql)
      .then(([rows]) => {
        return rows;
      });
  }

  addDpt() {
    const sql = `INSERT INTO department (department_name)
    VALUES ("${this.department_name}")`;
    return db.promise().query(sql);
  }
}

module.exports = Dpt;
