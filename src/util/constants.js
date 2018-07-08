const chalk = require("chalk")
const DiscordRPC = require("discord-rpc")

let app,
consolePrefix,
win,
menuBar,
menuBarMenu,
chromeConnected,
presenceReady,
presence,
setup,
newVersion,
introRan,
lastResponse,
ytmrpc,
platform;

module.exports = {
  app: "",
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
  },
  newVersion: false,
  introRan: false,
  lastResponse: false,
  ytmrpc: new DiscordRPC.Client({ transport: "ipc" }),
  platform: ""
};
