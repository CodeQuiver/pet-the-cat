var express = require("express");
var router = express.Router();

// Importing the model to use its database functions
var cat = require("../models/cats_model");

//HTML routes
//First route- displays home page
router.get("/", function(req, res) {
  
    //define callback function that will be passed through when data is requested to handle the response data
    function callbackDataHandler(data) {
      var hbsObject = {
        cats: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    };

    //call cat.all method on model and pass the callback to handle the data
    cat.all(callbackDataHandler);
  });

// Export routes for server.js to use.
module.exports = router;

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
