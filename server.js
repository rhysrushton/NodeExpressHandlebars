//Dependencies
var express = require("express"); 
var PORT = process.env.PORT || 3000;
var app = express();
var colors = require('colors'); 

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Set up handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//Getting routes and using them
var routes = require("./controllers/burgers_controller.js");
app.use(routes);
//Start the server.
app.listen(PORT, function() {
  console.log(colors.red.underline("Server listening on: http://localhost:" + PORT));
});

