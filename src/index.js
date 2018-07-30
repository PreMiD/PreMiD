//* Handle Winstall
require('./util/handleWinstall') 

//* Declare needed constants
const {app} = require('electron')

const AutoLaunch = require('auto-launch')
//* Require config
const config = require('./config.json');
const constants = require('./util/constants')
//* Require electron-config
var os = require('os')
//* Update constant in file
constants.platform = os.platform()
//* Require Update checker
const updater = require('./util/updateChecker')
//* Require Needed packages
const chalk = require("chalk")

app.setAppUserModelId("eu.Timeraa.yt-presence")

global.UPDATEAVAIABLE = ""

//* Clear console
process.stdout.write("\u001b[2J\u001b[0;0H");

//* Single Instance Check
var iShouldQuit = app.makeSingleInstance(function(commandLine, workingDirectory) {
  return true;
});
if(iShouldQuit){
  console.log(constants.consolePrefix + chalk.red("App already running, closing current instance..."))
  app.quit();return;
}

//* Setup electron-config
const Config = require('electron-config');

const userSettings = new Config({
  name: "userSettings"
});

//* Set default values for electon-config userSettings
if(userSettings.get('enabled') == undefined) userSettings.set('enabled', true)
if(userSettings.get('youTube') == undefined) userSettings.set('youTube', true)
if(userSettings.get('youTubeMusic') == undefined) userSettings.set('youTubeMusic', true)
if(userSettings.get('titleMenubar') == undefined) userSettings.set('titleMenubar', true)
if(userSettings.get('autoUpdateCheck') == undefined) userSettings.set('autoUpdateCheck', true)


//* Set dock Badge to version
if(constants.platform == "darwin") {
  app.dock.setBadge("V" + config.version)
}

console.log(constants.consolePrefix + chalk.yellow("Loading..."))

//* Setup MenuBar
require('./menubar/setup')

//* App ready
const appReady = () => {
  
  if(userSettings.get('autoLaunch') == undefined) {
    userSettings.set('autoLaunch', true)
    //* Add App to AutoLaunch
    console.log(constants.consolePrefix + chalk.yellow("Adding App to autostart..."))
    let autoLaunch = new AutoLaunch({
      name: 'YT Presence',
      path: app.getPath('exe'),
      isHidden: true
    });

    //* Enable AutoLaunch if disabled
    autoLaunch.isEnabled().then((isEnabled) => {
      if (!isEnabled) autoLaunch.enable();
      console.log(constants.consolePrefix + chalk.green("Added App to autostart."))
    })
    //* Catch error
    .catch(function(err) {
      console.log(constants.consolePrefix + chalk.red("Error while adding App to autostart."))
    })
  }
  
  if(userSettings.get('autoUpdateCheck') == true) {
    //* Check for update
    updater.checkForUpdate(true)
  }

  //* Include PresenceHandler
  require('./presenceHandler.js')
}

//* Register Handler
app.on('ready', appReady);

//* Prevent default behaviour
app.on('window-all-closed', () => {});