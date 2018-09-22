var { globalShortcut } = require('electron')
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

globalShortcut.register('mediastop', function () {
  console.log('mediastop pressed');
})