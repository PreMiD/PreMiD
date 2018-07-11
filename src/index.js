if (require('electron-squirrel-startup')) return;

const {app} = require('electron');

// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}

function handleSquirrelEvent() {
  if (process.argv.length === 1) {
    return false;
  }

  const ChildProcess = require('child_process');
  const path = require('path');

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = function(command, args) {
    let spawnedProcess, error;

    try {
      spawnedProcess = ChildProcess.spawn(command, args, {detached: true});
    } catch (error) {}

    return spawnedProcess;
  };

  const spawnUpdate = function(args) {
    return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      // Optionally do things such as:
      // - Add your .exe to the PATH
      // - Write to the registry for things like file associations and
      //   explorer context menus

      // Install desktop and start menu shortcuts
      spawnUpdate(['--createShortcut', exeName]);

      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-uninstall':
      // Undo anything you did in the --squirrel-install and
      // --squirrel-updated handlers

      // Remove desktop and start menu shortcuts
      spawnUpdate(['--removeShortcut', exeName]);

      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-obsolete':
      // This is called on the outgoing version of your app before
      // we update to the new version - it's the opposite of
      // --squirrel-updated

      app.quit();
      return true;
  }
};

//* Clear console
process.stdout.write("\u001b[2J\u001b[0;0H");

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