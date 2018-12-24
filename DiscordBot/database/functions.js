//* Require connection
var db = require('./db')

/**
 * Query the database
 * @param  {...any} data Query data
 */
function query(...data) {
  return new Promise((resolve, reject) => {
      db.query(...data, (err, rows, fields, result) => {
          if (err) return reject(err);
          resolve({ rows, fields, result });
      });
  }).catch(err => console.log("Error while querying + " + err))
}

//* Export function
module.exports.query = query