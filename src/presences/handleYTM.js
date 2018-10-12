const DiscordRPC = require("discord-rpc")

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();

const { ytm_client_id } = require("../config.json");

const Config = require('electron-config');
const userSettings = new Config({name: 'userSettings'})

//* Define needed variables
let lastEndTime = 0,
pauseRPCChange = 0,
songTitle,
songAuthorString,
songEndTime,
songStartTime

//* Try to connect RPC
tryLogin()
var retryRPCLogin = setInterval(tryLogin, 10 * 1000)

module.exports = (data, force) => {
  //* If YTM RPC Ready
  if(YTMRPCREADY) {
    //* Is update forced?
    if (force) {
      //* Check what playback state and set its Presence
      if (data.ytm.playback == "paused")
        updatePresence(songTitle, songAuthorString, "pause", "Playback paused.");
      else if (data.ytm.playback == "playing")
        updatePresence(songTitle, songAuthorString, "play", "Playing back.", songStartTime, songEndTime);
    } else {
      //* Update Presence data
      updateData(data)
  
      //* Only update Presence if time changed
      if (data.ytm.playback == "playing" && songEndTime != lastEndTime) {
        lastEndTime = songEndTime
        updatePresence(songTitle, songAuthorString, "play", "Playing back.", songStartTime, songEndTime)
      }
  
      //* Clear Presence after 1 minute if playback == pause
      if(pauseRPCChange >= 60 && pauseRPCChange <= 60) {
        YTMRPC.clearActivity()
        TRAY.setTitle("")
      }
  
      //* Increase pauseChange if paused
      if(data.ytm.playback == "paused") pauseRPCChange++; else pauseRPCChange = 0;
    }
  }
}

/**
 * Try to login to RPC until connected
 */
async function tryLogin() {
  YTMRPC = new DiscordRPC.Client({ transport: "ipc" });
  YTMRPC.login({ clientId: ytm_client_id })
  .catch(err => console.log(`${CONSOLEPREFIX}YTMRPC: ${err.message}`))  
  YTMRPC.on("ready", () => {
    clearInterval(retryRPCLogin)
    YTMRPCREADY = true
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
  if(startTimestamp != null && userSettings.get('titleMenubar')) TRAY.setTitle(entities.decode(songTitle)); else TRAY.setTitle("");
  YTMRPC.setActivity({
    details: entities.decode(details),
    state: entities.decode(state),
    largeImageKey: "ytm_lg",
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
  songTitle = data.ytm.songTitle
  var songAuthors = data.ytm.songAuthors
  songStartTime = Math.floor(data.ytm.songCurrentTime / 1000);
  songEndTime = data.ytm.songEndTime;

  //* Create author string from author array
  songAuthors.forEach((author, index, authors) => {
    if (index == 0)
    songAuthorString = author;
    else if (index < authors.length - 2)
    songAuthorString = songAuthorString + ", " + author;
    else if (index < authors.length - 1) songAuthorString = songAuthorString + " and " + author;
    else songAuthorString = songAuthorString + " &bull; " + author;
  });
}