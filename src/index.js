//* Handle Winstall
require('./util/handleWinstall')

//#region Define constants
//* Declare needed constants
const {app} = require('electron')

const AutoLaunch = require('auto-launch')
//* Require config
const config = require('./config.json');
const constants = require('./util/constants')
//* Require electron-config
const os = require('os')
//* Update constant in file
constants.platform = os.platform()
global.PLATFORM = os.platform()
//* Require Update checker
const updater = require('./util/updateChecker')
//* Require Needed packages
const chalk = require("chalk")
//* Setup electron-config
const Config = require('electron-config');
//#endregion

//* Required for Windows Push notifications
app.setAppUserModelId("eu.Timeraa.premid")

global.UPDATEAVAIABLE = ""
global.VERSION = config.version
if(config.devBuild) {
  global.VERSIONSTRING = VERSION + "-DEV"
} else {
  global.VERSIONSTRING = VERSION
}

global.BROWSERCONNECTIONSTATE = "NOT_CONNECTED"
global.EXTENSIONSOCKET = null

//* YTM global vars
global.CURRENTSONGTITLE = ""
global.CURRENTSONGAUTHORS = []
global.CURRENTSONGAUTHORSSTRING = ""
global.CURRENTSONGSTARTTIME = ""
global.CURRENTSONGSTARTTIMESECONDS = ""
global.CURRENTSONGENDTIME = ""
global.CONSOLEPREFIX = chalk.bold(chalk.bgHex('#db0918')(chalk.hex('#1a1a1a')(" Pre") + chalk.hex('#FFFFFF')("Mi"))) + chalk.hex('#7289DA')("D") + chalk.hex('#ffffff')(": ")
global.YTRPCREADY = false
global.YTMRPCREADY = false
global.NFLIXRPCREADY = false
global.TWITCHRPCREADY = false
global.SCLOUDRPCREADY = false

global.YTRPC = null
global.YTMRPC = null
global.NFLIXRPC = null
global.TWITCHRPC = null
global.SCLOUDRPC = null
global.TRAY = null


//* Clear console
process.stdout.write("\u001b[2J\u001b[0;0H");

//* Single Instance Check
var iShouldQuit = app.makeSingleInstance(() => {return true});

if(iShouldQuit){
  console.log(CONSOLEPREFIX + chalk.red("App already running, closing current instance..."))
  app.quit();
  return;
}

const userSettings = new Config({
  name: "userSettings"
});

//* Set default values for electon-config userSettings
if(userSettings.get('enabled') == undefined) userSettings.set('enabled', true)
if(userSettings.get('youTube') == undefined) userSettings.set('youTube', true)
if(userSettings.get('youTubeMusic') == undefined) userSettings.set('youTubeMusic', true)
if(userSettings.get('netflix') == undefined) userSettings.set('netflix', true)
if(userSettings.get('twitch') == undefined) userSettings.set('twitch', true)
if(userSettings.get('soundcloud') == undefined) userSettings.set('soundcloud', true)
if(userSettings.get('titleMenubar') == undefined) userSettings.set('titleMenubar', true)
if(userSettings.get('autoUpdateCheck') == undefined) userSettings.set('autoUpdateCheck', true)


//* Set dock Badge to version
if(constants.platform == "darwin") {
  app.dock.setBadge("V" + VERSION)
}

console.log(CONSOLEPREFIX + chalk.yellow("Loading..."))

//* App ready
const appReady = () => {
  //* Setup MenuBar
  require('./tray/createTray').run()
  //* Require shortcuts
  require('./util/shortcutHandler')
  //* Include PresenceHandler
  require('./presenceHandler.js')
  
  //* Automatically check for update
  if(userSettings.get('autoUpdateCheck') == true)
  updater.checkForUpdate(true)

  //* hide Dock icon when everything running
  if(constants.platform == "darwin") {
    app.dock.hide()
  }

  if(userSettings.get('autoLaunch') == undefined || userSettings.get('autoLaunch') == true) {
    userSettings.set('autoLaunch', true)
    //* Add App to AutoLaunch
    console.log(CONSOLEPREFIX + chalk.yellow("Adding App to autostart..."))
    let autoLaunch = new AutoLaunch({
      name: 'PreMiD',
      path: app.getPath('exe'),
      isHidden: true
    });

    //* Enable AutoLaunch if disabled
    autoLaunch.isEnabled().then(async (isEnabled) => {
      if (!isEnabled) autoLaunch.enable();
      console.log(CONSOLEPREFIX + chalk.green("Added App to autostart."))
    })
    //* Catch error
    .catch(function(err) {
      console.log(CONSOLEPREFIX + chalk.red("Error while adding App to autostart."))
    })
  }
}

//* Register Handler
app.on('ready', appReady);

//* Prevent default behaviour
app.on('window-all-closed', () => {});