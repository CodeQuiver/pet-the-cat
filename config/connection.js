var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  //Heroku Deployment Code - JawsDB addon for database handling
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //non-Heroku mySQL database connection- for a local database from included schema file
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "cats_db"
  });
}

//Below code was in heroku Jaws setup walkthrough but doesn't work when tested locally, so assuming it's simply a slightly different file setup being assumed
//only commenting out in case of problems later so I can test effect of re-adding if needed
// connection.connect();

module.exports = connection