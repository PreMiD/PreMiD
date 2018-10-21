const DiscordRPC = require('discord-rpc')

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
const { nflix_client_id } = require("../config.json");
const Config = require('electron-config');
const userSettings = new Config({
  name: 'userSettings'
})

let lastEndTime = 0,
pauseRPCChange = 0,
lastVideoTitle = "",
videoTitle,
videoAuthor,
videoStartTime,
videoEndTime,
seriesTitle


tryLogin()
var retryRPCLogin = setInterval(tryLogin, 10 * 1000)

module.exports = (data, force) => {
  if (force) {
    if (data.nflix.playback == "paused")
    updatePresence(seriesTitle, videoAuthor, "pause", "Paused")
    else if (data.nflix.playback == "playing")
    updatePresence(seriesTitle, videoAuthor, "play", "Watching", videoStartTime, videoEndTime)
  } else {
    updateData(data)
    
    if ((data.nflix.playback == "playing" && NFLIXRPCREADY) && (videoEndTime != lastEndTime || videoTitle != lastVideoTitle)) {
      lastVideoTitle = videoTitle
      lastEndTime = videoEndTime
      updatePresence(seriesTitle, videoAuthor, "play", "Watching", videoStartTime, videoEndTime)
    }

    //* Clear Presence after 1 minute if playback == pause
    if(pauseRPCChange >= 60 && pauseRPCChange <= 60) NFLIXRPC.clearActivity()
    if(data.nflix.playback == "paused") pauseRPCChange++; else pauseRPCChange = 0;
  }
}


/**
 * Try to login to RPC until connected
 */
async function tryLogin() {
  NFLIXRPC = new DiscordRPC.Client({ transport: "ipc" });
  NFLIXRPC.login({ clientId: nflix_client_id })
  .catch(err => console.log(`${CONSOLEPREFIX}NFLIXRPC: ${err.message}`))  
  NFLIXRPC.on("ready", () => {
    clearInterval(retryRPCLogin)
    NFLIXRPCREADY = true
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
  NFLIXRPC.setActivity({
    details: entities.decode(details),
    state: entities.decode(state),
    largeImageKey: "nflix_lg",
    largeImageText: "YT Presence " + VERSIONSTRING,
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
  videoTitle = data.nflix.episodeTitle
  videoAuthor = data.nflix.season + " - " + data.nflix.episodeTitle
  videoStartTime = Math.floor(data.nflix.episodeCurrentTime / 1000);
  videoEndTime = data.nflix.episodeEndTime;
  seriesTitle = data.nflix.seriesTitle
}