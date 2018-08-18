//this page sets up our SQL orm handling of requests
    // NEEDS to include:        
    // * `selectAll()`
    // * `insertOne()`
    // * `updateOne()`

//IMPORTS
var connection = require("./connection");

//TODO- change the "cats" table name to a constant at the top rather than directly hard-coding

//DATABASE REQUEST ROUTES
var orm = {
  //what's the diff b/w 
    //selectAll: function(){}
    //and
    //function selectAll(){}
    //??? why write it in this odd way? Is it the only way to be able to export them? Do they have to be forced into an object to be exported? Why???? I'm pretty sure I can define a method the other way when creating an object, so why put it like this? WTF? Also see the example file for the controller this is meant to be passed to for further confusion and odd order of writing things.
    selectAll: function(tableName, callback) {
      var queryString = "SELECT * FROM " + tableName;
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    },
    insertOne: function(tableName, colName, newValue, callback) {
      var queryString = "INSERT INTO " + tableName + " (" + colName + ") VALUES (\"" + newValue + "\")";
      console.log("orm.js:orm.insertOne: " + queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callback(result);
      });
    },
    updateOne: function(tableName, colName, newValue, idOfEntryToUpdate, callback) {
      //update one entry - need name of col being updated, new value, id of entry for WHERE clause
      //TODO- make sure the function that prints all the results stores the entry ids where they can be accessed for this function, probably in data-id="" in html
      var queryString = "UPDATE " + tableName + " SET " + colName + " = (\"" + newValue + "\") WHERE id = (" + idOfEntryToUpdate + ")";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callback(result);
      });
    }
  };



//EXPORTS
module.exports = orm;