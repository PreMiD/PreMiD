const MenuBar = require('menubar')
const path = require('path')
const constants = require("../util/constants")
const config = require("../config")
const os = require('os');
const updater = require('../util/updateChecker')

const {Menu, MenuItem, BrowserWindow} = require('electron')

var menuBarHeight;

//* Create MenuBar
constants.menuBar = MenuBar({
  icon: path.join(__dirname, "../assets/images/icon.png"),
  showOnAllWorkspaces: true,
  enableLargerThanScreen: false,
  resizable: false,
  height: menuBarHeight,
  width: 250,
  backgroundColor: 'black',
})

constants.menuBar.on('ready', () => {
  //* Create Menu for menuBar
  setupMenu(constants.menuBar)
})

//* Create Menu for menuBar
function setupMenu(menuBar) {
  constants.menuBarMenu = new Menu()
  constants.menuBarMenu.append(new MenuItem({
    label: `YT Presence - V${config.version}`,
    enabled: false,
    icon: path.join(__dirname, "../assets/images/icon.png")
  }))
  constants.menuBarMenu.append(new MenuItem({
    click: checkForUpdate,
    label: "Check for update"
  }))
  constants.menuBarMenu.append(new MenuItem({
    type: "separator"
  }))
  constants.menuBarMenu.append(new MenuItem({
    click: showSettingsPanel,
    label: "Preferences"
  }))
  constants.menuBarMenu.append(new MenuItem({
    type: "separator"
  }))
  constants.menuBarMenu.append(new MenuItem({
    role: "quit",
  }))

  constants.menuBar.tray.setContextMenu(constants.menuBarMenu)
}

function checkForUpdate() {
  updater.checkForUpdate(true, true)
}

function showSettingsPanel() {

  switch(os.platform()) {
    case "darwin":
      menuBarHeight = 375;
      break;
    default:
      menuBarHeight = 335;
      break;
  } 

  var settingsWindow = new BrowserWindow({
    center: true,
    maximizable: false,
    resizable: false,
    show: false,
    height: menuBarHeight,
    width: 400
  })

  settingsWindow.loadURL("file://" + path.join(__dirname, "../preferences.html"))

  settingsWindow.on('ready-to-show', () => {
    settingsWindow.show()
  })

  settingsWindow.on('blur', () => {
    settingsWindow.close()
  })

  settingsWindow.on('close', () => {
    settingsWindow = null;
  })
}