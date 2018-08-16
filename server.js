//EXPRESS SETUP
var express = require("express");
var app = express();

//BODY-PARSER STANDARD SETUP WITH EXPRESS
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var mysql = require("mysql");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "cats_db"
});

connection.connect(function(err) {
    if(err)
    {
      return;
    }
    console.log("I am connected at " + connection.threadId);
  });

//SET UP ROUTES- if setting up here




// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });