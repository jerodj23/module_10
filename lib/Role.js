const cTable = require("console.table");

class Role {
  constructor(id, title, role_id, dpt_id, salary, manager) {
    (this.id = id),
      (this.title = title),
      (this.role_id = role_id),
      (this.dpt_id = dpt_id),
      (this.salary = salary)
      (this.manager = manager);
  }
  getAll() {
    const sql = `SELECT * FROM emp_role`;
    return db
      .promise()
      .query(sql)
      .then(([rows]) => {
        return rows;
      });
  }
  addRole() {
    const sql = `INSERT INTO emp_role (title, salary, dpt_id)
    VALUES ("${this.title}", "${this.role_id}", "${this.salary}", "${this.dpt_id}", "${this.salary}", "${manager}"`;
    return db.promise().query(sql);
  }
}

module.exports = Role;
