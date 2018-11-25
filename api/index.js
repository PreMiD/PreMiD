const express = require('express')
const app = express()
var mysql = require('mysql')
var utf8 = require('utf8')

var con = mysql.createConnection({
  host: "localhost",
  user: "Timeraa",
  password: "Kw!BXS9Y8$",
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

app.get('/credits', async function (req, res) {
  var result = await query("SELECT * FROM credits")
  var resultArray = []
  result.rows.map(row => {
    resultArray.push({name: utf8.decode(row.name), tag: row.tag, avatarURL: row.avatarURL, type: row.type})
  })
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultArray));
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})