const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Database file will be inside backend folder
const dbPath = path.join(__dirname, "technicians.db");

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS technicians (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      rating REAL,
      fee INTEGER
    )
  `);
});
// db.run(
//   `INSERT INTO technicians (name, rating, fee)
//    VALUES (?, ?, ?)`,
//   ["Danish", 4.5, 500]
// );

// db.run(
//   `INSERT INTO technicians (name, rating, fee)
//    VALUES (?, ?, ?)`,
//   ["Sharique", 4.2, 400]
// );


module.exports = db;
