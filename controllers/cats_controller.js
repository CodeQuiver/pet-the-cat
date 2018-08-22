var express = require("express");
var router = express.Router();

// Importing the model to use its database functions
var cat = require("../models/cats_model");

//Helper function- returns a random integer from 1 through the max given 
  //ex. getRandomPosNotZeroInt(3);
  // returns 1, 2, or 3;
// function getRandomPosNotZeroInt(max) {
//   var answer = Math.floor(Math.random() * Math.floor(max));
//   answer = answer + 1;
//   return answer;
// }
//END Helper function

//Random image function for image from "Placekitten"- 
  //there are only 16 images, so need a random number 1-16 to designate which one in the url
// var randomImageId = function() {
//   return getRandomPosNotZeroInt(16);
//   };
//END Random image function
//NOTE- for now not using this randomization feature, needs more setup to pass the result correctly but is low priority

//=============== HTML routes ======================================//
//Get All route- displays home page and retrieves all data from cats table
router.get("/", function(req, res) {
    //define callback function that will be passed through when data is requested to handle the response data
    function callbackDataHandler(data) {
      var hbsObject = {
        cats: data
      };
      // console.log(hbsObject);
      res.render("index", hbsObject);
    };

    //call cat.all method on model and pass the callback to handle the data
    cat.all(callbackDataHandler);
  });
//=============== END HTML routes ======================================//


//=============== API Data Routes ======================================//

//POST Route- Creates new cat database entry
router.post("/api/cats/:name", function(req, res) {
  //router.post stores name parameter from url post request
  // console.log("hello i am in post");
  // console.log(req);
  // console.log(res);
  // console.log("i am done");
  
  cat.insert(req.params.name, function(result) {
    // console.log("full response after insert POST request");
    // console.log(result);
    // Send back the ID of the new cat entry
    res.json({ id: result.insertId });
    // console.log("Just sent ID back via res.json, ID is: ");
    // console.log(res.json.id);
  });
});

      // POST result example:
      // OkPacket {
      //   fieldCount: 0,
      //   affectedRows: 1,
      //   insertId: 12,
      //   serverStatus: 2,
      //   warningCount: 0,
      //   message: '',
      //   protocol41: true,
      //   changedRows: 0 }

//PUT ROUTE - updates an entry based on entry id
router.put("/api/cats/:updateField/:newValue/:id", function(req, res) {
  var field = req.params.updateField; // possible fields: "pet_or_not", "cat_name"
  var value = req.params.newValue;
  var catId = req.params.id;
    
    //call update function in cats_model
    cat.update(field, value, catId, function(result){
        // console.log(res);
        res.json({ id: result.insertId });
      });
});
//=============== END API Data Routes ======================================//

// Export routes for server.js to use.
module.exports = router;

//END API Routes



