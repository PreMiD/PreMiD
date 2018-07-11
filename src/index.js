//* Clear console
process.stdout.write("\u001b[2J\u001b[0;0H");

const { app } = require('electron');

//* Require config
const config = require('./config.json');

//* Require electron-config
var os = require('os')

let constants = require('./util/constants')

constants.platform = os.platform

const Config = require('electron-config');
const userSettings = new Config({
  name: "userSettings"
});

//* Set default value for electon-config userSettings
if(userSettings.get('enabled') == undefined) {
  userSettings.set('enabled', true)
  userSettings.set('youTube', true)
  userSettings.set('youTubeMusic', true)
}


//* Set dock Badge to Loading...
if(constants.platform == "darwin") {
  app.dock.setBadge("Loading...")
}

//* Require Needed packages
const AutoLaunch = require('auto-launch');
const chalk = require("chalk")

console.log(constants.consolePrefix + chalk.yellow("Loading..."))

//* Check for update
require('./util/checkForUpdate')

//* Setup MenuBar
require('./menubar/setup')

//* App ready
const appReady = () => {
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

  //* Include PresenceHandler
  require('./presenceHandler.js')
}

//* Register Handler
app.on('ready', appReady);

//* Prevent default behaviour
app.on('window-all-closed', () => {});