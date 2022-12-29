//* import database
const { DataTypes } = require('sequelize');

const db = require('../config/database');

//* import siquelize
// const siquelize = require('sequelize');
const Student = db.define(
  'students',
  {
    nama: {
      type: DataTypes.STRING,
    },
    nim: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        max: 11,
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    jurusan: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,

    created_at: 'updateTimestamp',
    updated_at: 'updateTimestamp',
  }
);

module.exports = Student;

// class Student {
//   //* menggunakan promise dan async await
//   static all() {
//     return new Promise((resolve, reject) => {
//       const query = 'SELECT * FROM students';

//       db.query(query, (err, results) => {
//         resolve(results);
//       });
//     });
//   }

//   static find(id) {
//     return new Promise((resolve, reject) => {
//       const query = 'SELECT * FROM students WHERE id=?';

//       db.query(query, id, (err, results) => {
//         const [student] = results;
//         resolve(student);
//       });
//     });
//   }
//   //* nambah data
//   static async create(data) {
//     const id = await new Promise((resolve, reject) => {
//       const sql = 'INSERT INTO students SET ?';

//       db.query(sql, data, (err, results) => {
//         resolve(results.insertId);
//       });
//     });
//     // melakukan query berdasarkan id
//     return new Promise((resolve, reject) => {
//       const sql = 'SELECT * FROM students WHERE id = ?';

//       db.query(sql, id, (err, results) => {
//         resolve(results);
//       });
//     });
//   }

//   //* update data
//   static async update(id, data) {
//     await new Promise((resolve, reject) => {
//       const sql = 'UPDATE students SET ? WHERE id = ?';

//       db.query(sql, [data, id], (err, results) => {
//         resolve(results);
//       });
//     });
//     // mencari data yang baru di update
//     const student = await this.find(id);
//     return student;
//   }

//   static delete(id) {
//     return new Promise((resolve, reject) => {
//       const query = 'DELETE FROM students WHERE id=?';

//       db.query(query, id, (err, results) => {
//         resolve(results);
//       });
//     });
//   }
// }
