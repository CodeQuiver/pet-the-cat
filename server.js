//EXPRESS SETUP
var express = require("express");
var app = express();

//BODY-PARSER STANDARD SETUP WITH EXPRESS
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//REQUIRE other file exports
var connection = require("./config/connection");


//ESTABLISH CONNECTION TO DATABASE
connection.connect(function(err) {
  if(err)
  {
    console.log("error connecting to mySQL database");
    return;
  }
  console.log("Connected to database at " + connection.threadId);
});


// START LISTENER - begin listening to client requests
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });