// config.forge.js

const path = require('path')

module.exports = {
    packagerConfig: {
      appBundleId: "eu.Timeraa.YTPresence",
      icon: path.resolve(__dirname, 'appIcon.icns')
    },
    make_targets: {
      win32: ["squirrel"], // An array of win32 make targets
      darwin: ["dmg"], // An array of darwin make targets
      linux: ["deb", "rpm", "flatpak", "snap"] // An array of linux make targets
    }
  }