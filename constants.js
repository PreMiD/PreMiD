const chalk = require("chalk")

let consolePrefix, win, menuBar, menuBarMenu, chromeConnected, presenceReady, presence, setup;

module.exports = {
  consolePrefix: chalk.bold(chalk.gray("<[ ") + chalk.bgRed(chalk.black(" Y") + chalk.white("T ")) + chalk.cyan(" Presence") + chalk.gray(" ]> ")),
  win: "",
  menuBar: "",
  menuBarMenu: "",
  chromeConnected: false,
  presenceReady: false,
  setup: false,
  presence: {
    details: "Waiting for music",
    state: "to start playing...",
    largeImageKey: "ytm_lg",
    instance: true
  }
};
