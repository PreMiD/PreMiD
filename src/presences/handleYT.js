const DiscordRPC = require('discord-rpc')

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
const { yt_client_id } = require("../config.json");
const Config = require('electron-config');
const userSettings = new Config({
  name: 'userSettings'
})
let constants = require('../util/constants.js')
let lastEndTime = 0,
lastSongTitle = "",
pauseRPCChange = 0

tryLogin()
var retryRPCLogin = setInterval(tryLogin, 10 * 1000)

function tryLogin() {
  constants.ytrpc = new DiscordRPC.Client({ transport: "ipc" });
  constants.ytrpc.login({ clientId: yt_client_id })
  .catch(err => console.log(`${CONSOLEPREFIX}YTRPC: ${err.message}`))  
  constants.ytrpc.on("ready", () => {
    clearInterval(retryRPCLogin)
    YTRPCREADY = true
  })
}

module.exports = (data, force) => {
  if (force) {
    if (data.yt.playback == "paused") {
      constants.tray.setTitle("");
      constants.ytrpc.setActivity({
        details: entities.decode(CURRENTSONGTITLE),
        state: entities.decode(CURRENTSONGAUTHORSSTRING),
        largeImageKey: "yt_lg",
        largeImageText: "YT Presence " + VERSIONSTRING,
        smallImageKey: "pause",
        smallImageText: "Playback paused",
        instance: true
      })
    } else if (data.yt.playback == "playing") {
      if(userSettings.get('titleMenubar'))
      constants.tray.setTitle(CURRENTSONGTITLE);
      constants.ytrpc.setActivity({
        details: entities.decode(CURRENTSONGTITLE),
        state: entities.decode(CURRENTSONGAUTHORSSTRING),
        largeImageKey: "yt_lg",
        largeImageText: "YT Presence " + VERSIONSTRING,
        smallImageKey: "play",
        smallImageText: "Playing back.",
        startTimestamp: CURRENTSONGSTARTTIME,
        endTimestamp: CURRENTSONGENDTIME,
        instance: true
      })
    }
  } else {
    CURRENTSONGTITLE = data.yt.videoTitle
    CURRENTSONGAUTHORSSTRING = data.yt.videoAuthor
    CURRENTSONGSTARTTIME = Math.floor(data.yt.videoCurrentTime / 1000);
    CURRENTSONGENDTIME = data.yt.videoEndTime;

    if ((data.yt.playback == "playing" && YTRPCREADY) && (CURRENTSONGENDTIME != lastEndTime || CURRENTSONGTITLE != lastSongTitle)) {
      lastSongTitle = CURRENTSONGTITLE
      lastEndTime = CURRENTSONGENDTIME
      if(userSettings.get('titleMenubar'))
      constants.tray.setTitle(CURRENTSONGTITLE);
      constants.ytrpc.setActivity({
        details: entities.decode(CURRENTSONGTITLE),
        state: entities.decode(CURRENTSONGAUTHORSSTRING),
        largeImageKey: "yt_lg",
        largeImageText: "YT Presence " + VERSIONSTRING,
        smallImageKey: "play",
        smallImageText: "Playing back.",
        startTimestamp: CURRENTSONGSTARTTIME,
        endTimestamp: CURRENTSONGENDTIME,
        instance: true
      })
    }

    //* Clear Presence after 1 minute if playback == pause
    if(pauseRPCChange >= 60 && pauseRPCChange <= 60) constants.ytrpc.clearActivity()
    if(data.yt.playback == "paused") pauseRPCChange++; else pauseRPCChange = 0;
  }
}