const DiscordRPC = require('discord-rpc')

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
const { scloud_client_id } = require("../config.json");
const Config = require('electron-config');
const userSettings = new Config({
  name: 'userSettings'
})

let lastEndTime = 0,
pauseRPCChange = 0,
lastSongTitle = "",
songAuthor,
songStartTime,
songEndTime,
songTitle


tryLogin()
var retryRPCLogin = setInterval(tryLogin, 10 * 1000)

module.exports = (data, force) => {
  if (force) {
    if (data.scloud.playback == "paused")
    updatePresence(songTitle, songAuthor, "pause", "Paused")
    else if (data.scloud.playback == "playing")
    updatePresence(songTitle, songAuthor, "play", "Playing back.", songStartTime, songEndTime)
  } else {
    updateData(data)
    
    if ((data.scloud.playback == "playing" && SCLOUDRPCREADY) && (songEndTime != lastEndTime || songTitle != lastSongTitle)) {
      lastSongTitle = songTitle
      lastEndTime = songEndTime
      updatePresence(songTitle, songAuthor, "play", "Playing back", songStartTime, songEndTime)
    }

    //* Clear Presence after 1 minute if playback == pause
    if(pauseRPCChange >= 60 && pauseRPCChange <= 60) SCLOUDRPC.clearActivity()
    if(data.scloud.playback == "paused") pauseRPCChange++; else pauseRPCChange = 0;
  }
}


/**
 * Try to login to RPC until connected
 */
async function tryLogin() {
  SCLOUDRPC = new DiscordRPC.Client({ transport: "ipc" });
  SCLOUDRPC.login({ clientId: scloud_client_id })
  .catch(err => console.log(`${CONSOLEPREFIX}SCLOUDRPC: ${err.message}`))  
  SCLOUDRPC.on("ready", () => {
    clearInterval(retryRPCLogin)
    SCLOUDRPCREADY = true
  })
}

/**
 * Update the Presence on Discord
 * @param {String} details Details to show
 * @param {String} state State to show
 * @param {String} smallImageKey Small image name
 * @param {String} smallImageText Small image text
 * @param {Number} startTimestamp Start timestamp
 * @param {Number} endTimestamp End timerstamp
 */
function updatePresence(details, state, smallImageKey, smallImageText, startTimestamp = null, endTimestamp = null) {
  if(startTimestamp != null && userSettings.get('titleMenubar') && PLATFORM == "darwin") TRAY.setTitle(entities.decode(details)); else if(PLATFORM == "darwin") TRAY.setTitle("");
  SCLOUDRPC.setActivity({
    details: entities.decode(details),
    state: entities.decode(state),
    largeImageKey: "scloud_lg",
    largeImageText: "PreMiD " + VERSIONSTRING,
    smallImageKey: smallImageKey,
    smallImageText: smallImageText,
    startTimestamp: startTimestamp,
    endTimestamp: endTimestamp,
    instance: true
  })
}

/**
 * Update the data used for the Presence
 * @param {Object} data Data received from Extension
 */
function updateData(data) {
  songAuthor = data.scloud.songAuthor
  songStartTime = Math.floor(data.scloud.songCurrentTime / 1000);
  songEndTime = data.scloud.songEndTime;
  songTitle = data.scloud.songTitle
}