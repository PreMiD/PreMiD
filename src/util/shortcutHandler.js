const chalk = require('chalk')
var { globalShortcut } = require('electron')

console.log(CONSOLEPREFIX + chalk.yellow("Registering keyboard shortcuts..."))

globalShortcut.register('medianexttrack', function () {
  if (EXTENSIONSOCKET != null) {
    EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: "nextTrack" })
  }
})

globalShortcut.register('mediaplaypause', function () {
  if (EXTENSIONSOCKET != null) {
    EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: "pause" })
  }
})

globalShortcut.register('mediaprevioustrack', function () {
  if (EXTENSIONSOCKET != null) {
    EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: "previousTrack" })
  }
})

console.log(CONSOLEPREFIX + chalk.green("Successfully registered keyboard shortcuts."))