const Discord = require('discord.js');
const client = new Discord.Client();
var mysql = require('mysql')
var utf8 = require('utf8')
require('dotenv').load()

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

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("invisible")
  setInterval(updateCredits, 5*1000)
});

async function updateCredits() {
  var dbData = await query(`SELECT * FROM credits`)

  var devRole = client.guilds.first().roles.find(r => r.name == "Developer").id
  var conRole = client.guilds.first().roles.find(r => r.name == "Contributor").id
  var patRole = client.guilds.first().roles.find(r => r.name == "Patron").id
  var donRole = client.guilds.first().roles.find(r => r.name == "Donator").id
  var traRole = client.guilds.first().roles.find(r => r.name == "Translator").id
  var pat20Role = client.guilds.first().roles.find(r => r.name == "20$").id
  var pat10Role = client.guilds.first().roles.find(r => r.name == "10$").id
  var pat5Role = client.guilds.first().roles.find(r => r.name == "5$").id
  var pat1Role = client.guilds.first().roles.find(r => r.name == "1$").id

  var results = client.guilds.first().members.map(async m => {
    return [m, (m.roles.get(devRole) || m.roles.get(conRole) || m.roles.get(patRole) || m.roles.get(donRole) || m.roles.get(traRole))]
  })
  var patronLevel
  Promise.all(results).then(completed => {
    dbRows = dbData.rows
    completed.map(result => {
      patronLevel = "#000000"
      if(result[0].roles.has(pat20Role)) patronLevel = result[0].roles.get(pat20Role).hexColor
      if(result[0].roles.has(pat10Role)) patronLevel = result[0].roles.get(pat10Role).hexColor
      if(result[0].roles.has(pat5Role)) patronLevel = result[0].roles.get(pat5Role).hexColor
      if(result[0].roles.has(pat1Role)) patronLevel = result[0].roles.get(pat1Role).hexColor
      if(result[1]) {
        if(dbRows.find(row => row.userID == result[0].id)) {
          query(`UPDATE credits SET name = '${utf8.encode(result[0].displayName)}', avatarURL = '${result[0].user.avatarURL}', type = '${result[1].name}', color = '${result[1].hexColor}', patronColor = '${patronLevel}', position = '${result[1].position}' WHERE userID = '${result[0].id}'`)
        } else {
          query(`INSERT INTO credits (userID, name, avatarURL, type, color, patronColor, position) VALUES ('${result[0].id}', '${utf8.encode(result[0].displayName)}', '${result[0].user.avatarURL}', '${result[1].name}', '${result[1].hexColor}', '${patronLevel}', '${result[1].calculatedPosition}')`)
        }
      } else {
        if(dbRows.find(row => row.userID == result[0].id)) {
          query(`DELETE FROM credits WHERE userID = '${result[0].id}'`)
        }
      }
    })
  })
}

function query(...data) {
  return new Promise((resolve, reject) => {
      con.query(...data, (err, rows, fields, result) => {
          if (err) return reject(err);
          resolve({ rows, fields, result });
      });
  }).catch(err => console.log("Error while querying + " + err))
}

client.login('NTAzNTU3MDg3MDQxNjgzNDU4.DtuCFg.ysltcHzVGKx51h4qENdKocB88rc');