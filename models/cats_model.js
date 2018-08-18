//IMPORTS - Importing the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

const tableName = "cats";
const catNameColumn = "cat_name";

var cat = {
    all: function(callback) {
      orm.selectAll(tableName,function(res) {
        callback(res);
      });//selects the entire cat table, then runs the callback function that should follow it
    },   
    insert: function(nameOfNewCat, callback) {
      orm.insertOne(tableName, catNameColumn, nameOfNewCat, function(res) {
        callback(res);
      });
    },
    update: function(colName, newValue, idOfEntryToUpdate, callback) {
      orm.updateOne(tableName, colName, newValue, idOfEntryToUpdate, function(res) {
        callback(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = cat;




//This is the MODEL for the orm- below is my initial code attempt

// // Console log all the cat info
// function getAllCats() {
//     orm.selectAll("cats");
// }

//add a new cat
// orm.insertOne("Italic");

//update an entry
// orm.updateOne("cat_name", "Fluffy Kitty", 1);
  