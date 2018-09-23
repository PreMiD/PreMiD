const { Notification, BrowserWindow } = require('electron');

const request = require("request")
const chalk = require("chalk")
let constants = require('./constants')
let config = require('../config')

function checkForUpdate(sendNotification = false, sendNoUpdateInfo = false) {

  console.log(CONSOLEPREFIX + chalk.cyan("Checking for update..."))

  request({
    url: "https://api.github.com/repos/Timeraa/YT-Presence/releases/latest",
    json: true,
    headers: {'user-agent': 'node.js'}
  }, function (error, response, body) {
    if(error) {
      console.log(CONSOLEPREFIX + chalk.red("Error while checking for update. " + error))
      return
    }
    //* Remove v from version
    var gitVersion = body.tag_name.replace('v', '')
    //* Compare version
    if(gitVersion > VERSION) {
      global.UPDATEAVAIABLE = gitVersion
      constants.newVersion = gitVersion
  
      console.log(CONSOLEPREFIX + chalk.cyan("New version avaiable: ") + chalk.red(`V${VERSION}`) + chalk.blue(' > ') + chalk.yellow(`V${gitVersion}`))
    } else {
      global.UPDATEAVAIABLE = false
      console.log(CONSOLEPREFIX + chalk.cyan("Up to date! ") + chalk.yellow(`V${VERSION}`))
      if(sendNoUpdateInfo) {
        const noUpdateAvaiableNotification = new Notification({
          title: 'Updater | YT Presence',
          body: `You are up to date! (V${VERSION})`,
          silent: true
        })
        
        noUpdateAvaiableNotification.show()
      }
    }
  })

  //* If sendNotification
  if(sendNotification && UPDATEAVAIABLE != false) {
    const updateNotification = new Notification({
      title: 'Updater | YT Presence',
      body: `Update avaiable! (V${UPDATEAVAIABLE})\nClick here to download the newest version.`,
      silent: true
    })
    
    updateNotification.show()
    updateNotification.on('click', () => {
      require("electron").shell.openExternal("https://github.com/Timeraa/YT-Presence/releases/latest")
    })

    return UPDATEAVAIABLE
  } else {
    return UPDATEAVAIABLE
  }
}

module.exports.checkForUpdate = checkForUpdate