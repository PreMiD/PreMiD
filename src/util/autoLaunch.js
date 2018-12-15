//* Declare needed constants
const {app} = require('electron')
const chalk = require("chalk")
//* Setup electron-store
const AutoLaunch = require('auto-launch')

const Config = require('electron-store');
const userSettings = new Config({
  name: "userSettings"
});

module.exports = async () => {  
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
