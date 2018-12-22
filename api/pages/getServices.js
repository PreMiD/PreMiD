//* Require stuff
var {query} = require('../database/functions')

async function get(req, res) {
  //* Get presences
  var result = await query("SELECT * FROM presences")
  
  //* Set headers
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(result.rows));
}

//* Export function
module.exports = get