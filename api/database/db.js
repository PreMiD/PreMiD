//* Improt stuff
var mysql = require('mysql'), db

//* Connect to database
function connectDatabase() {
  //* If no connection exists -> create one
  if(!db) {
    //! localhost -> premid.app if development instance
    db = mysql.createConnection({
      host: process.env.NODE_ENV == "dev" ? "premid.app" : "localhost",
      user: process.env.dbUser,
      password: process.env.dbPassword,
      database: 'premid'
    });

    //* When connected give debug
    db.connect(function(err) {
      if (err) throw err;
      console.log("Connected to PreMiD database!");
    })
  }
  return db;
}

//* Export function
module.exports = connectDatabase()