const express = require('express')
const app = express()
var mysql = require('mysql')
var utf8 = require('utf8')
require('dotenv').load();

var con = mysql.createConnection({
  host: "localhost",
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: 'premid'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})

function query(...data) {
  return new Promise((resolve, reject) => {
      con.query(...data, (err, rows, fields, result) => {
          if (err) return reject(err);
          resolve({ rows, fields, result });
      });
  }).catch(err => console.log("Error while querying + " + err))
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/credits', async function (req, res) {
  var result = await query("SELECT * FROM credits")
  var resultArray = []
  result.rows.map(row => {
    resultArray.push({userID: row.userID, name: utf8.decode(row.name), avatar: row.avatarURL, role: row.type, rolePosition: row.position, roleColor: row.color, patronColor: row.patronColor == "#000000" ? "#fff" : row.patronColor})
  })
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultArray));
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})