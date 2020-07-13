//This is the code for connecting to the sql database. 
var mysql = require ("mysql")
//require the dotenv package to store environmental variables. 
const env = require("dotenv").config();
//Define password variable so we can use it for db connection. 
let password = process.env.PASSWORD
var connection; 

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{

  connection = mysql.createConnection({
    host: "localhost",
      port: 3306,
      user: "root",
      password: password,
      database: "burger_db"

})}; 

//SQL function with password variable. 
//Need to use JawsDB when uploading to heroku
/*
var connection = mysql.createConnection({
host: "localhost",
  port: 3306,
  user: "root",
  password: password,
  database: "burger_db"
}) */ 

//Make the connenction
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export the connection for ORM use
module.exports = connection;