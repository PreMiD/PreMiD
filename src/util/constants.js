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
ytrpc;

module.exports = {
  app: "",
  consolePrefix: chalk.bold(chalk.bgHex('#db0918')(chalk.hex('#000000')(" Y") + chalk.hex('#ffffff')("T "))) + chalk.cyan(" Presence") + chalk.hex('#ffffff')(": "),
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
  ytrpc: new DiscordRPC.Client({ transport: "ipc" })
};
