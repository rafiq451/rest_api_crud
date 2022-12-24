//* import mysql
const mysql = require('mysql');
//* import dotenv dan jalankan
require('dotenv').config();

//* destructing object process.env
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

//* Membuat koneksi database menggunakan methode createConnection
//* Method menerima parameter object
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

//* menghubungkan kedatabase menggunakan method connect
//* menerima parameter callback
db.connect((err) => {
  if (err) {
    console.log('Error connnecting' + err.stack);
  } else {
    console.log('Connected to database');
    return;
  }
});

module.exports = db;
