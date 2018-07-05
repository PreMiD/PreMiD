var path = require('path')
const {app, BrowserWindow} = require('electron')
require('./menuBar/setup.js')
var constants = require('./constants.js')
require('update-electron-app')(
  {
    repo: 'Timeraa/YT-Presence',
    updateInterval: '10 minutes',
  }
)

function setup () {
  require('./presenceHandler.js')
  constants.win = new BrowserWindow({ 
    width: 250, 
    height: 250, 
    show: false 
  });
  const invisPath = 'file://' + path.join(process.cwd() + '/menuBar/popup.html')

  constants.win.loadURL(invisPath);
}

app.on('ready', setup)