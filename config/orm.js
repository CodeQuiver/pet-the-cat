//this page sets up our SQL orm handling of requests
    // NEEDS to include:        
    // * `selectAll()`
    // * `insertOne()`
    // * `updateOne()`

//IMPORTS
var connection = require("./connection");

//DATABASE REQUEST ROUTES
var orm = {
    selectAll: function(tableToSelectFrom) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, tableToSelectFrom, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(nameOfNewCat) {
      // INSERT INTO cats (cat_name) VALUES ('Fluffykins');
      var queryString = "INSERT INTO cats (cat_name) VALUES (?)";
      connection.query(queryString, nameOfNewCat, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(colName, newValue, idOfEntryToUpdate) {
      //update one entry - need name of col being updated, new value, id of entry for WHERE clause
      var queryString = "UPDATE cats SET ?? = ?? WHERE id = ??";
      connection.query(queryString, [colName, newValue, idOfEntryToUpdate], function(err, result) {
        if (err) throw err;
        console.log(result);
      });

    }
  };



//EXPORTS
module.exports = orm;