//* import database
const db = require('../config/database');

class Student {
  //* menggunakan promise dan async await
  static all() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM students';

      db.query(query, (err, results) => {
        resolve(results);
      });
    });
  }

  static create(nama, nim, email, jurusan) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO students (nama, nim, email, jurusan) VALUES (?, ?, ?, ?)';

      db.query(query, [nama, nim, email, jurusan], (err, results) => {
        resolve(results);
      });
    });
  }
  static update(id, nama, nim, email, jurusan) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE students SET nama=?, nim=?, email=?, jurusan=? WHERE id=?';

      db.query(query, [nama, nim, email, jurusan, id], (err, results) => {
        resolve(results);
      });
    });
  }
  static delete(id) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM students WHERE students.id=?';

      db.query(query, [id], (err, results) => {
        resolve(results);
      });
    });
  }
  static find(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM students WHERE students.id=?';

      db.query(query, [id], (err, results) => {
        resolve(results);
      });
    });
  }
}

module.exports = Student;
