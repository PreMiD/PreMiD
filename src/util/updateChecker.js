var { BrowserWindow, dialog } = require('electron'),
  path = require('path'),
  request = require("request-promise-native"),
  debug = require('./debug')

async function checkForUpdate(sendNotification = false, sendNoUpdateInfo = false) {

  debug.info("Checking for update...")

  request({
    url: "https://api.github.com/repos/Timeraa/YT-Presence/releases/latest",
    json: true,
    headers: {
      'user-agent': 'node.js'
    }
  }, function (error, response, body) {
    if (error) {
      debug.error("Checking for update... - Error\n" + error.message);
      dialog.showMessageBox({
        type: 'error',
        title: 'PreMiD',
        message: `Error while checking for update!`,
        detail: `${error}`
      });
      return;
    }
    //* Remove v from version
    var gitVersion = body.tag_name.replace('v', '')
    //* Compare version
    if (gitVersion > VERSION) {
      global.UPDATEAVAIABLE = gitVersion

      debug.info(`New version avaiable: V${VERSION} > V${gitVersion}`)

      var updateWindow = new BrowserWindow({
        center: true,
        maximizable: false,
        minimizable: false,
        height: 500,
        minHeight: 500,
        width: 400,
        minWidth: 400,
        show: false,
        alwaysOnTop: true
      })

      updateWindow.setMenu(null)

      updateWindow.loadURL("file://" + path.join(__dirname, "../windows/update.html"))
      updateWindow.webContents.on('did-finish-load', () => {
        updateWindow.webContents.send('updateData', body);
      });

      // Do not show BrowserWindow unless it was loaded.
      updateWindow.once('ready-to-show', () => {
        updateWindow.show()
      })

      updateWindow.on('close', () => {
        updateWindow = null;
      })

    } else {
      global.UPDATEAVAIABLE = false
      debug.success(`Checking for update... - Up to date`)
      if (sendNoUpdateInfo) {
        dialog.showMessageBox({
          type: 'info',
          title: 'PreMiD',
          message: `You are up to date! (v${VERSION})`
        });
      }
    }
  })

  return UPDATEAVAIABLE
}

module.exports.checkForUpdate = checkForUpdate
