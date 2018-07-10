const { Notification } = require('electron');

const request = require("request")
const chalk = require("chalk")
let constants = require('./constants')
let config = require('../config')

//* Check for update
console.log(constants.consolePrefix + chalk.cyan("Checking for update..."))
request({
  url: "https://api.github.com/repos/Timeraa/YT-Presence/releases/latest",
  json: true,
  headers: {'user-agent': 'node.js'}
}, function (error, response, body) {
  //* Remove v from version
  var gitVersion = body.tag_name.replace('v', '')
  //* Compare version
  if(gitVersion > config.version) {
    constants.newVersion = gitVersion

    console.log(constants.consolePrefix + chalk.cyan("New version avaiable: ") + chalk.red(`V${config.version}`) + chalk.blue(' > ') + chalk.yellow(`V${gitVersion}`))
    
    const newVersionNotification = new Notification({
      title: 'Updater | YT Presence',
      body: `New version avaiable! (V${gitVersion})\nClick here to download the newest version.`
    })
    
    newVersionNotification.show()
    newVersionNotification.on('click', () => {
      require("electron").shell.openExternal("https://github.com/Timeraa/YT-Presence/releases/latest")
    })
  } else {
    console.log(constants.consolePrefix + chalk.cyan("Up to date! ") + chalk.yellow(`V${config.version}`))
  }
})