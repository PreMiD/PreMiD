var {BrowserWindow} = require('electron'),
  path = require('path')

var win = null

module.exports.show = () => {
  if(win == null) {
    win = new BrowserWindow({
      width: 500,
      height: 750,
      center: true,
      resizable: false,
      maximizable: false,
      show: false
    })

    win.loadURL("file://" + path.join(__dirname, "../windows/options.html"))
  } else {
    win.show()
  }

  win.once('ready-to-show', () => {
    win.show()
  })

  win.on('close', () => {
    win = null
  })
}