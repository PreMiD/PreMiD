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
ytrpc,
platform,
data;

module.exports = {
  app: "",
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
  ytrpc: new DiscordRPC.Client({ transport: "ipc" }),
  platform: "",
  data: ""
};
