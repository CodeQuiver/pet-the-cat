var express = require("express");
var router = express.Router();

// Importing the model to use its database functions
var cat = require("../models/cats_model");

var getAllRoute = //HTML routes
router.get("/", function(req, res) {
    cat.all(function(data) {
      var hbsObject = {
        cats: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  module.exports = getAllRoute;

//END HTML routes


// //API Routes/data routes
// router.get("/", function(req, res) {
//     //call "all" function in cats_model
//     //example placeholder- needs more structure to be actually called
//     cat.all(function(data) {
//         console.log(data);
//       });
// });

// router.post("/api/cats", function(req, res) {
//     //call input/add function in cats_model
//     //example placeholder
//     cat.insert("Cleopatra", function(res){
//         console.log(res);
//       });
// });

// router.put("/api/cats/:id", function(req, res) {
//     //call update function in cats_model
//     //example placeholder
//     cat.update("pet_or_not", 1, 2, function(res){
//         console.log(res);
//       });
// });

//END API Routes
