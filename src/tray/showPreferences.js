const path = require('path')
const {BrowserWindow} = require('electron')
const os = require('os');
let menuBarHeight

exports.run = () => {
  switch(os.platform()) {
    case "darwin":
      menuBarHeight = 440;
      break;
    default:
      menuBarHeight = 410;
      break;
  } 

  var settingsWindow = new BrowserWindow({
    center: true,
    maximizable: false,
    resizable: false,
    height: menuBarHeight,
    width: 400
  })

  settingsWindow.setMenu(null)

  settingsWindow.loadURL("file://" + path.join(__dirname, "../windows/preferences.html"))

  settingsWindow.on('blur', () => {
    settingsWindow.close()
  })

  settingsWindow.on('close', () => {
    settingsWindow = null;
  })
}