const path = require('path')
var MenuBar = require('menubar')
var constants = require("../util/constants")

//* Create MenuBar
constants.menuBar = MenuBar({
  icon: __dirname + "/icon.png",
  index: 'file://' + path.join(__dirname + "/popup.html"),
  preloadWindow: true,
  enableLargerThanScreen: false,
  movable: true,
  resizable: false,
  height: 225,
  width: 250,
  backgroundColor: 'white',
})

//* Show connecting message when ready
constants.menuBar.on('ready', function() {
  constants.menuBar.tray.setTitle("Connecting...")
})