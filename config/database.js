//* import mysql
// const mysql = require('mysql');
//* import dotenv dan jalankan
// require('dotenv').config();

//* destructing object process.env
// const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

//* Membuat koneksi database menggunakan methode createConnection
//* Method menerima parameter object
// const db = mysql.createConnection({
//   host: DB_HOST,
//   user: DB_USERNAME,
//   password: DB_PASSWORD,
//   database: DB_DATABASE,
// });

// import siquelize
const { Sequelize } = require('sequelize');

// const { sequelize } = require('sequelize/lib/model');
const db = new Sequelize('laravel_rest_api', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

//* menghubungkan kedatabase menggunakan method connect
//* menerima parameter callback
// try {
//   await db.authenticate();
//   console.log('Connection has been established successfully.');
// } catch {
//   console.error('Unable to connect to the database:', error);
// }

module.exports = db;
