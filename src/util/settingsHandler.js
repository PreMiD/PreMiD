const Config = require('electron-store');
const userSettings = new Config({
  name: "userSettings"
});

const {app} = require('electron')
const AutoLaunch = require('auto-launch')

let autoLaunch = new AutoLaunch({
  name: 'PreMiD',
  path: app.getPath('exe'),
  isHidden: true
});

var mediaControls = require('./shortcutHandler');

module.exports = async (data) => {
  if(userSettings.get('titleMenubar') != data.options.titleMenubar) {
    userSettings.set('titleMenubar', data.options.titleMenubar)
    if(PLATFORM == "darwin" && !data.options.titleMenubar) TRAY.setTitle("")
  }

  if(userSettings.get('autoUpdateCheck') != data.options.checkForUpdates)
  userSettings.set('autoUpdateCheck', data.options.checkForUpdates)

  if(userSettings.get('autoLaunch') != data.options.systemStartup) {
    userSettings.set('autoLaunch', data.options.systemStartup)
  
    if(data.options.systemStartup) {
      autoLaunch.isEnabled().then(async (isEnabled) => {
        if (!isEnabled) autoLaunch.enable();
      })
    } else {
      autoLaunch.isEnabled().then(async (isEnabled) => {
        if (isEnabled) autoLaunch.disable();
      })
    }
  }

  if(userSettings.get('mediaControls') != data.options.mediaControls) {
    userSettings.set('mediaControls', data.options.mediaControls)
    if(data.options.mediaControls) mediaControls.register(); else mediaControls.unregister();
  }

  if(userSettings.get('titleMenubar') != data.options.titleMenubar) {
    userSettings.set('titleMenubar', data.options.titleMenubar)
    if(!data.options.titleMenubar) TRAY.setTitle("")
  }

  //console.log(data.options)
}
