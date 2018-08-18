var express = require("express");
var router = express.Router();

var cat = require("../models/cats_model");


//HTML routes

//END HTML routes


//API Routes/data routes
router.get("/", function(req, res) {
    //call "all" function in cats_model
    //example placeholder- needs more structure to be actually called
    cat.all(function(res) {
        console.log(res);
      });
});

router.post("/api/cats", function(req, res) {
    //call input/add function in cats_model
    //example placeholder
    cat.insert("Cleopatra", function(res){
        console.log(res);
      });
});

router.put("/api/cats/:id", function(req, res) {
    //call update function in cats_model
    //example placeholder
    cat.update("pet_or_not", 1, 2, function(res){
        console.log(res);
      });
});

//END API Routes
