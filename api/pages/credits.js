//* Require stuff
var { query } = require("../database/functions"),
  utf8 = require("utf8");

async function get(req, res) {
  //* Get credits from db
  var result = await query("SELECT * FROM credits"),
    resultArray = [];

  //* build result array for JSON object
  result.rows.map(row => {
    resultArray.push({
      userID: row.userID,
      name: utf8.decode(row.name),
      avatar: row.avatarURL,
      role: row.type,
      rolePosition: row.position,
      roleColor: row.color,
      patronColor: row.patronColor == "#000000" ? "#fff" : row.patronColor
    });
  });

  //* Set headers
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(resultArray));
}

//* Export function
module.exports = get;
