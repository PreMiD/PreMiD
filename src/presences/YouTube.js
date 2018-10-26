const DiscordRPC = require('discord-rpc')

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
const { yt_client_id } = require("../config.json");
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
videoEndTime


tryLogin()
var retryRPCLogin = setInterval(tryLogin, 10 * 1000)

module.exports = (data, force) => {
  if (force) {
    if (data.yt.playback == "paused")
    updatePresence(videoTitle, videoAuthor, "pause", "Playback paused.")
    else if (data.yt.playback == "playing")
    updatePresence(videoTitle, videoAuthor, "play", "Playing back.", videoStartTime, videoEndTime)
  } else {
    updateData(data)

    if ((data.yt.playback == "playing" && YTRPCREADY) && (videoEndTime != lastEndTime || videoTitle != lastVideoTitle)) {
      lastVideoTitle = videoTitle
      lastEndTime = videoEndTime
      updatePresence(videoTitle, videoAuthor, "play", "Playing back.", videoStartTime, videoEndTime)
    }

    //* Clear Presence after 1 minute if playback == pause
    if(pauseRPCChange >= 60 && pauseRPCChange <= 60) YTRPC.clearActivity()
    if(data.yt.playback == "paused") pauseRPCChange++; else pauseRPCChange = 0;
  }
}


/**
 * Try to login to RPC until connected
 */
async function tryLogin() {
  YTRPC = new DiscordRPC.Client({ transport: "ipc" });
  YTRPC.login({ clientId: yt_client_id })
  .catch(err => console.log(`${CONSOLEPREFIX}YTRPC: ${err.message}`))  
  YTRPC.on("ready", () => {
    clearInterval(retryRPCLogin)
    YTRPCREADY = true
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
  YTRPC.setActivity({
    details: entities.decode(details),
    state: entities.decode(state),
    largeImageKey: "yt_lg",
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
  videoTitle = data.yt.videoTitle
  videoAuthor = data.yt.videoAuthor
  videoStartTime = Math.floor(data.yt.videoCurrentTime / 1000);
  videoEndTime = data.yt.videoEndTime;
}