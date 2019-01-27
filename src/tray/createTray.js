var debug = require('../util/debug'),
  path = require('path'),
  {Tray, Menu, app} = require('electron'),
  cfu = () => require('../util/updateChecker').checkForUpdate(true, true),
  optionsWindow = () => require('../tray/options').show()

module.exports = () => {
  debug.info("Creating Tray...");

  //* Create new Tray
  TRAY = new Tray(path.join(__dirname, "../assets/images/icon.png"))

  //* Set Tray ToolTip
  TRAY.setToolTip(`${app.getName()} V${VERSIONSTRING}`)

  //* Create Tray Menu
  var menuBarMenu = Menu.buildFromTemplate([
    {
      label: `${app.getName()} | V${VERSIONSTRING}`,
      enabled: false,
      icon: path.join(__dirname, "../assets/images/icon.png")
    },
    {type: "separator"},
    {
      click: optionsWindow,
      label: "Settings"
    },
    {
      click: cfu,
      label: "Check for Updates"
    },
    {
      type: "separator"
    },
    {role: "quit"}
  ])

  //* Set Tray Menu
  TRAY.setContextMenu(menuBarMenu)
  debug.success("Creating Tray - Done");
}
