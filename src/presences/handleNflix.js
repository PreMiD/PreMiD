const DiscordRPC = require('discord-rpc')

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
const { nflix_client_id } = require("../config.json");
const Config = require('electron-config');
const userSettings = new Config({
  name: 'userSettings'
})
let constants = require('../util/constants.js'),
lastEndTime = 0,
lastSongTitle = "",
pauseRPCChange = 0

tryLogin()
var retryRPCLogin = setInterval(tryLogin, 10 * 1000)

function tryLogin() {
  constants.nflix = new DiscordRPC.Client({ transport: "ipc" });
  constants.nflix.login({ clientId: nflix_client_id })
  .catch(err => console.log(`${CONSOLEPREFIX}NFLIXRPC: ${err.message}`))  
  constants.nflix.on("ready", () => {
    clearInterval(retryRPCLogin)
    YTRPCREADY = true
  })
}

module.exports = (data, force) => {
  if (force) {
    if (data.nflix.playback == "paused") {
      constants.tray.setTitle("");
      constants.nflix.setActivity({
        details: entities.decode(CURRENTSONGTITLE),
        state: entities.decode(CURRENTSONGAUTHORSSTRING),
        largeImageKey: "nflix_lg",
        largeImageText: "YT Presence " + VERSIONSTRING,
        smallImageKey: "pause",
        smallImageText: "Paused",
        instance: true
      })
    } else if (data.nflix.playback == "playing") {
      if(userSettings.get('titleMenubar'))
      constants.tray.setTitle(CURRENTSONGTITLE);
      constants.nflix.setActivity({
        details: entities.decode(CURRENTSONGTITLE),
        state: entities.decode(CURRENTSONGAUTHORSSTRING),
        largeImageKey: "nflix_lg",
        largeImageText: "YT Presence " + VERSIONSTRING,
        smallImageKey: "play",
        smallImageText: "Watching",
        startTimestamp: CURRENTSONGSTARTTIME,
        endTimestamp: CURRENTSONGENDTIME,
        instance: true
      })
    }
  } else {
    CURRENTSONGTITLE = data.nflix.seriesTitle
    CURRENTSONGAUTHORSSTRING = data.nflix.episodeSeason + " - " + data.nflix.episodeTitle
    CURRENTSONGSTARTTIME = Math.floor(data.nflix.episodeCurrentTime / 1000);
    CURRENTSONGENDTIME = data.nflix.episodeEndTime;

    if ((data.nflix.playback == "playing" && YTRPCREADY) && (CURRENTSONGENDTIME != lastEndTime || CURRENTSONGTITLE != lastSongTitle)) {
      lastSongTitle = CURRENTSONGTITLE
      lastEndTime = CURRENTSONGENDTIME
      if(userSettings.get('titleMenubar'))
      constants.tray.setTitle(CURRENTSONGTITLE);
      constants.nflix.setActivity({
        details: entities.decode(CURRENTSONGTITLE),
        state: entities.decode(CURRENTSONGAUTHORSSTRING),
        largeImageKey: "nflix_lg",
        largeImageText: "YT Presence " + VERSIONSTRING,
        smallImageKey: "play",
        smallImageText: "Watching.",
        startTimestamp: CURRENTSONGSTARTTIME,
        endTimestamp: CURRENTSONGENDTIME,
        instance: true
      })
    }

    //* Clear Presence after 1 minute if playback == pause
    if(pauseRPCChange >= 60 && pauseRPCChange <= 60) constants.nflix.clearActivity()
    if(data.nflix.playback == "paused") pauseRPCChange++; else pauseRPCChange = 0;
  }
}