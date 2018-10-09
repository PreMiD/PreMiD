const DiscordRPC = require("discord-rpc")

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
const { ytm_client_id } = require("../config.json");
const Config = require('electron-config');
const userSettings = new Config({
  name: 'userSettings'
})
let constants = require('../util/constants.js'),
lastEndTime = 0,
pauseRPCChange = 0

tryLogin()
var retryRPCLogin = setInterval(tryLogin, 10 * 1000)

function tryLogin() {
  constants.ytmrpc = new DiscordRPC.Client({ transport: "ipc" });
  constants.ytmrpc.login({ clientId: ytm_client_id })
  .catch(err => console.log(`${CONSOLEPREFIX}YTMRPC: ${err.message}`))  
  constants.ytmrpc.on("ready", () => {
    clearInterval(retryRPCLogin)
    YTMRPCREADY = true
  })
}


module.exports = (data, force) => {
  if (force) {
    if (data.ytm.playback == "paused") {
      constants.tray.setTitle("");
      if(YTMRPCREADY) constants.ytmrpc.setActivity({
        details: entities.decode(CURRENTSONGTITLE),
        state: entities.decode(CURRENTSONGAUTHORSSTRING),
        largeImageKey: "ytm_lg",
        largeImageText: "YT Presence " + VERSIONSTRING,
        smallImageKey: "pause",
        smallImageText: "Playback paused.",
        instance: true
      })
    } else if (data.ytm.playback == "playing") {
      if(userSettings.get('titleMenubar'))
      constants.tray.setTitle(entities.decode(CURRENTSONGTITLE));
      if(YTMRPCREADY) constants.ytmrpc.setActivity({
        details: entities.decode(CURRENTSONGTITLE),
        state: entities.decode(CURRENTSONGAUTHORSSTRING),
        largeImageKey: "ytm_lg",
        largeImageText: "YT Presence " + VERSIONSTRING,
        smallImageKey: "play",
        smallImageText: "Playing back.",
        startTimestamp: CURRENTSONGSTARTTIME,
        endTimestamp: CURRENTSONGENDTIME,
        instance: true
      })
    }
  } else {
    CURRENTSONGTITLE = data.ytm.songTitle
    CURRENTSONGAUTHORS = data.ytm.songAuthors
    CURRENTSONGSTARTTIME = Math.floor(data.ytm.songCurrentTime / 1000);
    CURRENTSONGENDTIME = data.ytm.songEndTime;
    //* Create author string from author array
    CURRENTSONGAUTHORS.forEach((author, index, authors) => {
      if (index == 0)
      CURRENTSONGAUTHORSSTRING = author;
      else if (index < authors.length - 2)
      CURRENTSONGAUTHORSSTRING = CURRENTSONGAUTHORSSTRING + ", " + author;
      else if (index < authors.length - 1) CURRENTSONGAUTHORSSTRING = CURRENTSONGAUTHORSSTRING + " and " + author;
      else CURRENTSONGAUTHORSSTRING = CURRENTSONGAUTHORSSTRING + " &bull; " + author;
    });

    if (data.ytm.playback == "playing" && CURRENTSONGENDTIME != lastEndTime && YTMRPCREADY) {
      lastEndTime = CURRENTSONGENDTIME
      if(userSettings.get('titleMenubar'))
      constants.tray.setTitle(entities.decode(CURRENTSONGTITLE));
      constants.ytmrpc.setActivity({
        details: entities.decode(CURRENTSONGTITLE),
        state: entities.decode(CURRENTSONGAUTHORSSTRING),
        largeImageKey: "ytm_lg",
        largeImageText: "YT Presence " + VERSIONSTRING,
        smallImageKey: "play",
        smallImageText: "Playing back.",
        startTimestamp: CURRENTSONGSTARTTIME,
        endTimestamp: CURRENTSONGENDTIME,
        instance: true
      })
    }

    //* Clear Presence after 1 minute if playback == pause
    if(pauseRPCChange >= 60 && pauseRPCChange <= 60) constants.ytmrpc.clearActivity()
    if(data.ytm.playback == "paused") pauseRPCChange++; else pauseRPCChange = 0;
  }
}