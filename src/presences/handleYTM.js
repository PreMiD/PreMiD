const DiscordRPC = require("discord-rpc")

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
const { ytm_client_id } = require("../config.json");
const Config = require('electron-config');
const userSettings = new Config({
  name: 'userSettings'
})
let constants = require('../util/constants.js')
let lastEndTime = 0
let pauseRPCChange = 0

var retryRPCLogin = setInterval(() => {
  constants.ytmrpc = new DiscordRPC.Client({ transport: "ipc" });
  constants.ytmrpc.login({ clientId: ytm_client_id })
  .catch(err => console.log(`${CONSOLEPREFIX}YTMRPC: ${err.message}`))  
  constants.ytmrpc.on("ready", () => {
    clearInterval(retryRPCLogin)
    YTMRPCREADY = true
  })
}, 10 * 1000)


module.exports = (data, force) => {
  //console.log(constants.ytmrpc)
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