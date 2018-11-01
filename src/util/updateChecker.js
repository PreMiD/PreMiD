const { Notification, BrowserWindow } = require('electron');

const path = require('path')

const request = require("request")
const chalk = require("chalk")

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
  
      console.log(CONSOLEPREFIX + chalk.cyan("New version avaiable: ") + chalk.red(`V${VERSION}`) + chalk.blue(' > ') + chalk.yellow(`V${gitVersion}`))

      var updateWindow = new BrowserWindow({
        center: true,
        maximizable: false,
        minimizable: false,
        height: 500,
        minHeight: 500,
        width: 400,
        minWidth: 400,
        alwaysOnTop: true
      })

      updateWindow.setMenu(null)
    
      updateWindow.loadURL("file://" + path.join(__dirname, "../windows/update.html"))
      updateWindow.webContents.on('did-finish-load', () => {
        updateWindow.webContents.send('updateData', body);
      });
    
      updateWindow.on('close', () => {
        updateWindow = null;
      })

    } else {
      global.UPDATEAVAIABLE = false
      console.log(CONSOLEPREFIX + chalk.cyan("Up to date! ") + chalk.yellow(`V${VERSION}`))
      if(sendNoUpdateInfo) {
        const noUpdateAvaiableNotification = new Notification({
          title: 'PreMiD',
          body: `You are up to date! (V${VERSION})`,
          silent: true
        })
        
        noUpdateAvaiableNotification.show()
      }
    }
  })

  return UPDATEAVAIABLE
}

module.exports.checkForUpdate = checkForUpdate