//* Require stuff
var { query } = require("../database/functions"),
  {client} = require('../index'),
  utf8 = require("utf8"),
  updaterRunning = false,
  devRole,
  admRole,
  modRole,
  jrModRole,
  conRole,
  desRole,
  patRole,
  donRole,
  proRole,
  traRole,
  pat20Role,
  pat10Role,
  pat5Role,
  pat1Role

async function updateCredits() {
  if(!updaterRunning) {
    //* Retrieve all role IDs
    devRole = await getRoleID("Developer"),
    admRole = await getRoleID("Admin"),
    modRole = await getRoleID("Moderator"),
    jrModRole = await getRoleID("Jr.Moderator"),
    conRole = await getRoleID("Contributor"),
    desRole = await getRoleID("Designer"),
    patRole = await getRoleID("Patron"),
    donRole = await getRoleID("Donator"),
    proRole = await getRoleID("Proofreader"),
    traRole = await getRoleID("Translator"),
    pat20Role = await getRoleID("20$"),
    pat10Role = await getRoleID("10$"),
    pat5Role = await getRoleID("5$"),
    pat1Role = await getRoleID("1$")
    
    setInterval(updateCredits, 5*1000)
    updaterRunning = true
  }

  var dbData = await query(`SELECT * FROM credits`),
    results = client.guilds.first().members.map(async m => {
      return [
        m,
        (m.roles.get(devRole) 
        || m.roles.get(admRole)
        || m.roles.get(modRole)
        || m.roles.get(jrModRole)
        || m.roles.get(conRole)
        || m.roles.get(desRole)
        || m.roles.get(patRole)
        || m.roles.get(donRole)
        || m.roles.get(proRole) 
        || m.roles.get(traRole))
      ]
    })

  var patronColor
  //* Wait until all promises resolved
  Promise.all(results).then(completed => {
    var dbRows = dbData.rows
    //* Iterate through all roles
    completed.map(result => {
      //* default patronColor
      patronColor = "#000000"

      if(result[0].roles.has(pat20Role))
        patronColor = result[0].roles.get(pat20Role).hexColor
      if(result[0].roles.has(pat10Role))
        patronColor = result[0].roles.get(pat10Role).hexColor
      if(result[0].roles.has(pat5Role))
        patronColor = result[0].roles.get(pat5Role).hexColor
      if(result[0].roles.has(pat1Role))
        patronColor = result[0].roles.get(pat1Role).hexColor

      //* If user has one of the roles above
      if(result[1]) {
        //* If user exists in DB -> update ELSE create
        if(dbRows.find(row => row.userID == result[0].id)) {
          query(
            'UPDATE credits SET name = ?, avatarURL = ?, type = ?, color = ?, patronColor = ?, position = ? WHERE userID = ?',
            [
              utf8.encode(result[0].displayName), 
              result[0].user.avatarURL, 
              result[1].name, 
              result[1].hexColor, 
              patronColor, 
              result[1].position, 
              result[0].id
            ])
          } else {
          query(
            'INSERT INTO credits (userID, name, avatarURL, type, color, patronColor, position) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [
              result[0].id,
              utf8.encode(result[0].displayName),
              result[0].user.avatarURL,
              result[1].name,
              result[1].hexColor,
              patronColor,
              result[1].calculatedPosition
            ])
        }
      } else {
        if(dbRows.find(row => row.userID == result[0].id)) {
          query(`DELETE FROM credits WHERE userID = ?`, [result[0].id])
        }
      }
    })
  })
}

/**
 * Get the role ID
 * @param {String} roleName Role name to get id from
 */
async function getRoleID(roleName) {
  return client.guilds.first().roles.find(r => r.name == roleName).id
}

module.exports = updateCredits