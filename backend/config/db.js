const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit:10,
    
});

module.exports = pool;








// const mysql = require("mysql2");

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "hospital_management"
// });

// db.connect(err => {
//     if (err) { 
//          console.log("Database connection failed:", err);
//     }
//     else console.log("MYSQL Connected");
// });

// module.exports = db;