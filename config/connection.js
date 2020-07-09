//This is the code for connecting to the sql database. 
var mysql = require ("mysql")
const env = require("dotenv").config();

let password = process.env.PASSWORD

var connection = mysql.createConnection({
host: "localhost",
  port: 3306,
  user: "root",
  password: password,
  database: "burger_db"
})

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;