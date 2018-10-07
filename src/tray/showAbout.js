const path = require('path')
const {BrowserWindow} = require('electron')

exports.run = () => {
  var aboutWindow = new BrowserWindow({
    center: true,
    maximizable: false,
    minimizable: false,
    resizable: false,
    width: 400,
    height: 600,
    alwaysOnTop: true
  })

  aboutWindow.setMenu(null)

  aboutWindow.loadURL("file://" + path.join(__dirname, "../about.html"))

  aboutWindow.on('close', () => {
    aboutWindow = null;
  })
}