//* Handle Winstall
require('./util/handleWinstall')

//#region Define constants
//* Declare needed constants
const {app} = require('electron')

//* Require config
var pjson = require('./package.json');
//* Require electron-config
const os = require('os')
//* Require Update checker
const updater = require('./util/updateChecker')
//* Require Needed packages
const chalk = require("chalk")
//* Setup electron-store
const Config = require('electron-store');
const userSettings = new Config({
  name: "userSettings"
});
//#endregion

//* Set app user model id
app.setAppUserModelId("eu.Timeraa.premid")

//* Define Global Variables
global.PLATFORM = os.platform()
global.UPDATEAVAIABLE = ""
global.VERSION = pjson.productVersion

if(pjson.devBuild) 
  global.VERSIONSTRING = VERSION + "-DEV"; 
else 
  global.VERSIONSTRING = VERSION;

global.BROWSERCONNECTIONSTATE = "NOT_CONNECTED"
global.EXTENSIONSOCKET = null
global.TRAY = null
global.CONSOLEPREFIX = chalk.bold(chalk.hex('#596cae')("PreMiD")) + chalk.hex('#ffffff')(": ")


//* Clear console
process.stdout.write("\u001b[2J\u001b[0;0H");

//* Single instance lock
app.requestSingleInstanceLock()

//* Set default values for electon-config userSettings
if(userSettings.get('titleMenubar') == undefined) userSettings.set('titleMenubar', true)
if(userSettings.get('autoStart') == undefined) userSettings.set('autoStart', true)
if(userSettings.get('autoUpdateCheck') == undefined) userSettings.set('autoUpdateCheck', true)
if(userSettings.get('mediaControls') == undefined) userSettings.set('mediaControls', true)


//* Set dock Badge to version
if(PLATFORM == "darwin") {
  app.dock.setBadge("V" + VERSION)
}

console.log(CONSOLEPREFIX + chalk.yellow("Loading..."))

//* App ready
const appReady = async () => {
  //* Setup MenuBar
  require('./tray/createTray').run()
  //* Require shortcuts
  require('./util/shortcutHandler').register()
  //* Include PresenceHandler
  require('./presenceHandler.js')
  //* Auto launch
  require('./util/autoLaunch')
  
  //* Automatically check for update
  if(userSettings.get('autoUpdateCheck') == true)
    updater.checkForUpdate(true)

  //* hide Dock icon when everything running
  if(PLATFORM == "darwin") app.dock.hide()
}

//* Register Handler
app.on('ready', appReady);

//* Prevent default behaviour
app.on('window-all-closed', () => {});
