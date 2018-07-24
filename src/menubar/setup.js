const path = require('path')
var MenuBar = require('menubar')
var constants = require("../util/constants")
var os = require('os');

var menuBarHeight;

switch(os.platform()) {
  case "darwin":
    menuBarHeight = 250
    break;
  default:
    menuBarHeight = 225;
} 

//* Create MenuBar
constants.menuBar = MenuBar({
  icon: __dirname + "/icon.png",
  index: "file://" + path.join(__dirname + "/popup.html"),
  showOnAllWorkspaces: true,
  enableLargerThanScreen: false,
  resizable: false,
  height: menuBarHeight,
  width: 250,
  backgroundColor: 'black',
})
