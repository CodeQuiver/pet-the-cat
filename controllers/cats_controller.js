var express = require("express");
var router = express.Router();

// Importing the model to use its database functions
var cat = require("../models/cats_model");

//HTML routes
//Get All route- displays home page and retrieves all data from cats table
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
//END HTML routes



//API Data Routes

//POST Route- Creates new cat database entry
router.post("/api/cats/:name", function(req, res) {
  //router.post stores name parameter from url post request
  console.log("hello i am in post");
  // console.log(req);
  // console.log(res);
  console.log("i am done");
  
  cat.insert(req.params.name, function(result) {
    console.log("full response after insert POST request");
    console.log(result);
    // Send back the ID of the new cat entry
    res.json({ id: result.insertId });
    console.log("Just sent ID back via res.json, ID is: ");
    console.log(res.json.id);
  });
});

// result example:
// OkPacket {
//   fieldCount: 0,
//   affectedRows: 1,
//   insertId: 12,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '',
//   protocol41: true,
//   changedRows: 0 }

router.put("/api/cats/:updateField/:newValue/:id", function(req, res) {
  var field = req.params.updateField; // possible fields: "pet_or_not", "cat_name"
  var value = req.params.newValue;
  var catId = req.params.id;
    
    //call update function in cats_model
    cat.update(field, value, catId, function(res){
        console.log(res);
      });
});


//END API Data Routes

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


// Export routes for server.js to use.
module.exports = router;
