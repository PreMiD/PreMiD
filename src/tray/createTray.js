const path = require('path')
const {Tray, Menu, MenuItem} = require('electron')

exports.run = () => {
  TRAY = new Tray(path.join(__dirname, "../assets/images/icon.png"))
  TRAY.setToolTip(`PreMiD V${VERSIONSTRING}`)
  var menuBarMenu = new Menu()
  menuBarMenu.append(new MenuItem({
    label: `PreMiD | V${VERSIONSTRING}`,
    enabled: false,
    icon: path.join(__dirname, "../assets/images/icon.png")
  }))
  menuBarMenu.append(new MenuItem({type: "separator"}))
  menuBarMenu.append(new MenuItem({
    click: cfu,
    label: "Check for updates"
  }))
  menuBarMenu.append(new MenuItem({role: "quit"}))
  TRAY.setContextMenu(menuBarMenu)
}

cfu = () => require('../util/updateChecker').checkForUpdate(true, true)