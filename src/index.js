const { app, Notification } = require('electron');

var os = require('os')

let constants = require('./util/constants')

constants.platform = os.platform

const Config = require('electron-config');
const userSettings = new Config({
  name: "userSettings"
});

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
const request = require("request")
const chalk = require("chalk")

let config = require('./config')

//* Setup MenuBar
require('./menubar/setup')

//* App ready
const appReady = () => {
  console.log(constants.consolePrefix + chalk.yellow("Loading..."))

  console.log(constants.consolePrefix + chalk.yellow("Adding App to autostart..."))
  let autoLaunch = new AutoLaunch({
    name: 'YT Presence',
    path: app.getPath('exe'),
    isHidden: true
  });

  autoLaunch.isEnabled().then((isEnabled) => {
    if (!isEnabled) autoLaunch.enable();
    console.log(constants.consolePrefix + chalk.green("Added App to autostart."))
  })
  .catch(function(err) {
    console.log(constants.consolePrefix + chalk.red("Error while adding App to autostart."))
  })

  require('./presenceHandler.js')

  request({
    url: "https://api.github.com/repos/Timeraa/YT-Presence/releases/latest",
    json: true,
    headers: {'user-agent': 'node.js'}
  }, function (error, response, body) {
    var gitVersion = body.tag_name.replace('v', '')
    if(gitVersion > config.version) {
      constants.newVersion = gitVersion
      
      const newVersionNotification = new Notification({
        title: 'YouTube Presence',
        body: `New version avaiable! (V${gitVersion})\nClick here to download the newest version.`,
      })
  
      newVersionNotification.show()
      newVersionNotification.on('click', () => {
        require("electron").shell.openExternal("https://github.com/Timeraa/YT-Presence/releases/latest")
      })
    }
  })
}

//* Register Handler
app.on('ready', appReady);

app.on('window-all-closed', () => {
  //app.quit();
});