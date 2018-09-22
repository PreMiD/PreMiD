const MenuBar = require('menubar')
const path = require('path')
const constants = require("../util/constants")
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
    label: `YT Presence | V${VERSIONSTRING}`,
    enabled: false,
    icon: path.join(__dirname, "../assets/images/icon.png")
  }))
  constants.menuBarMenu.append(new MenuItem({
    type: "separator"
  }))
  constants.menuBarMenu.append(new MenuItem({
    click: showAbout,
    label: "About"
  }))
  constants.menuBarMenu.append(new MenuItem({
    click: checkForUpdate,
    label: "Check for update"
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
  process.env.MENUBAR = constants.menuBar
}

function checkForUpdate() {
  updater.checkForUpdate(true, true)
}

function showAbout() {
  var aboutWindow = new BrowserWindow({
    center: true,
    maximizable: false,
    minimizable: false,
    resizable: false,
    width: 400,
    height: 600,
    alwaysOnTop: true
  })

  aboutWindow.loadURL("file://" + path.join(__dirname, "../about.html"))

  aboutWindow.on('close', () => {
    aboutWindow = null;
  })
}

function showSettingsPanel() {

  switch(os.platform()) {
    case "darwin":
      menuBarHeight = 340;
      break;
    default:
      menuBarHeight = 300;
      break;
  } 

  var settingsWindow = new BrowserWindow({
    center: true,
    maximizable: false,
    resizable: false,
    height: menuBarHeight,
    width: 400
  })

  settingsWindow.loadURL("file://" + path.join(__dirname, "../preferences.html"))

  settingsWindow.on('blur', () => {
    settingsWindow.close()
  })

  settingsWindow.on('close', () => {
    settingsWindow = null;
  })
}