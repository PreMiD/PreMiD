const {Menu, MenuItem, BrowserWindow} = require('electron')
const path = require('path')
var MenuBar = require('menubar')
var main = require("../index")
var constants = require("../util/constants")

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

constants.menuBar.on('ready', function() {
  constants.menuBar.tray.setTitle("Connecting...")
})