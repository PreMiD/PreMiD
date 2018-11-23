const Config = require('electron-store');
const userSettings = new Config({
  name: "userSettings"
});

const chalk = require('chalk')
var { globalShortcut, app } = require('electron')

module.exports.register = async () => {
  if(!userSettings.get('mediaControls')) return
  console.log(CONSOLEPREFIX + chalk.yellow("Registering keyboard shortcuts..."))
  
  globalShortcut.register('medianexttrack', () => {
    if (EXTENSIONSOCKET != null) EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: "nextTrack" })
  })
  
  var pauseSkipToggle = 0;
  globalShortcut.register('mediaplaypause', () => {
    pauseSkipToggle++
    setTimeout(() => {
      if (EXTENSIONSOCKET != null && pauseSkipToggle == 1) EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: "pause" })
      if (EXTENSIONSOCKET != null && pauseSkipToggle == 2) EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: "nextTrack" })
      if (EXTENSIONSOCKET != null && pauseSkipToggle == 3) EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: "previousTrack" })
      pauseSkipToggle = 0
    }, 500)
  })
  
  globalShortcut.register('mediaprevioustrack', () => {
    if (EXTENSIONSOCKET != null) EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: "previousTrack" })
  })
  
  console.log(CONSOLEPREFIX + chalk.green("Successfully registered keyboard shortcuts."))
}

module.exports.unregister = async () => {
  console.log(CONSOLEPREFIX + chalk.red("Unregistering keyboard shortcuts..."))
  if(require('os').platform() == "darwin") {
    app.relaunch()
    app.exit(0)
  } else
  globalShortcut.unregisterAll()
  console.log(CONSOLEPREFIX + chalk.green("Unregistered keyboard shortcuts"))
}

app.on('will-quit', () => {
  console.log(CONSOLEPREFIX + chalk.red("Unregistering keyboard shortcuts..."))
  globalShortcut.unregisterAll()
  console.log(CONSOLEPREFIX + chalk.green("Unregistered keyboard shortcuts"))
})
