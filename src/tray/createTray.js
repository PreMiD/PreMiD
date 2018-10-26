const path = require('path')
const constants = require("../util/constants")
const {Tray, Menu, MenuItem} = require('electron')

exports.run = () => {
  TRAY = new Tray(path.join(__dirname, "../assets/images/icon.png"))
  TRAY.setToolTip(`PreMiD V${VERSIONSTRING}`)
  constants.menuBarMenu = new Menu()
  constants.menuBarMenu.append(new MenuItem({
    label: `PreMiD | V${VERSIONSTRING}`,
    enabled: false,
    icon: path.join(__dirname, "../assets/images/icon.png")
  }))
  constants.menuBarMenu.append(new MenuItem({type: "separator"}))
  constants.menuBarMenu.append(new MenuItem({
    click: cfu,
    label: "Check for updates"
  }))
  constants.menuBarMenu.append(new MenuItem({role: "quit"}))
  TRAY.setContextMenu(constants.menuBarMenu)
}

cfu = () => require('../util/updateChecker').checkForUpdate(true, true)