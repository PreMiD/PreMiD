const DiscordRPC = require('discord-rpc')

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
const { twitch_client_id } = require("../config.json");
const Config = require('electron-config');
const userSettings = new Config({
  name: 'userSettings'
})

let lastEndTime = 0,
pauseRPCChange = 0,
laststreamTitle = "",
streamTitle,
streamHost,
videoStartTime



tryLogin()
var retryRPCLogin = setInterval(tryLogin, 10 * 1000)

module.exports = (data, force) => {
  if (force) {
    if (data.twitch.playback == "paused")
    updatePresence(streamTitle, streamHost, "pause", "Paused")
    else if (data.twitch.playback == "playing")
    updatePresence(streamTitle, streamHost, "play", "Watching", videoStartTime)
  } else {
    updateData(data)
    
    if ((data.twitch.playback == "playing" && TWITCHRPCREADY) &&  streamTitle != laststreamTitle) {
      laststreamTitle = streamTitle
      updatePresence(streamTitle, streamHost, "play", "Watching", videoStartTime)
    }

    //* Clear Presence after 1 minute if playback == pause
    if(pauseRPCChange >= 60 && pauseRPCChange <= 60) TWITCHRPC.clearActivity()
    if(data.twitch.playback == "paused") pauseRPCChange++; else pauseRPCChange = 0;
  }
}


/**
 * Try to login to RPC until connected
 */
async function tryLogin() {
  TWITCHRPC = new DiscordRPC.Client({ transport: "ipc" });
  TWITCHRPC.login({ clientId: twitch_client_id })
  .catch(err => console.log(`${CONSOLEPREFIX}TWITCHRPC: ${err.message}`))  
  TWITCHRPC.on("ready", () => {
    clearInterval(retryRPCLogin)
    TWITCHRPCREADY = true
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
function updatePresence(details, state, smallImageKey, smallImageText, startTimestamp = null) {
  if(startTimestamp != null && userSettings.get('titleMenubar') && PLATFORM == "darwin") TRAY.setTitle(entities.decode(details)); else if(PLATFORM == "darwin") TRAY.setTitle("");
  TWITCHRPC.setActivity({
    details: entities.decode(details),
    state: entities.decode(state),
    largeImageKey: "twitch_lg",
    largeImageText: "YT Presence " + VERSIONSTRING,
    smallImageKey: smallImageKey,
    smallImageText: smallImageText,
    startTimestamp: startTimestamp,
    instance: true
  })
}

/**
 * Update the data used for the Presence
 * @param {Object} data Data received from Extension
 */
function updateData(data) {
  streamTitle = data.twitch.streamTitle
  streamHost = data.twitch.streamHost
  videoStartTime = Math.floor(data.twitch.watchingSince / 1000);
}