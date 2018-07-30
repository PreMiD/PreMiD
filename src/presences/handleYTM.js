const constants = require("../util/constants.js");
const { ytm_client_id } = require("../config.json");
const Config = require("electron-config");
const chalk = require("chalk");
const userData = new Config({
  name: 'userData'
})

const userSettings = new Config({
  name: 'userSettings'
})

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();

let startTime = new Date(),
  endTime = new Date(),
  lastStartingTime;


let lastSongTitle = null,
  lastSongAuthors = [],
  currentSongAuthorString,
  lastSongStartTime,
  playbackWasPaused,
  playbackPausedDebug = 0,
  nextSongPauseDebug = 0;

async function updatePresence(data) {
  //console.log(data)

  var currentSongTitle = data.currentSongTitle,
  currentSongAuthors = data.currentSongAuthors,
  currentSongStartTime = data.currentSongStartTime,
  currentSongStartTimeSeconds = data.currentSongStartTimeSeconds,
  currentSongEndTime = data.currentSongEndTime

  //* Create author string from author array
  currentSongAuthors.forEach((author, index, authors) => {
    if(index == 0) {
      currentSongAuthorString = author
    } else if(index < authors.length - 2) {
      currentSongAuthorString = currentSongAuthorString + ", " + author
    } else if(index < authors.length - 1) {
      currentSongAuthorString = currentSongAuthorString + " and " + author
    } else {
      currentSongAuthorString = currentSongAuthorString + " - " + author
    }
  });

  //* Update songTitle if changed
  if(lastSongTitle != currentSongTitle) {
    //* Only update if authors changed aswell (Debug for Presence)
    if(lastSongAuthors.join() != currentSongAuthors.join()) {
      lastSongTitle = currentSongTitle
      lastSongAuthors = currentSongAuthors
      lastSongStartTime = currentSongStartTimeSeconds

      nextSongPauseDebug = 1

      if(playbackWasPaused) playbackWasPaused = false
      
      console.log(constants.consolePrefix + chalk.yellow('Song changed, now playing: ') + chalk.green(currentSongTitle) + chalk.yellow('.'))

      //* Set menuBar title if enabled
      if(userSettings.get('titleMenubar')) constants.menuBar.tray.setTitle(currentSongTitle)

      //* Update ytm presence
      updateYTMPresence({
        details: entities.decode(currentSongTitle),
        state: entities.decode(currentSongAuthorString),
        smallImageKey: "play",
        smallImageText: "Playing back.",
        largeImageKey: "ytm_lg",
        startTimestamp: currentSongStartTime,
        endTimestamp: currentSongEndTime,
        instance: true
      })
    }
  } else {
    if(nextSongPauseDebug == 0) {
      if(lastSongStartTime == currentSongStartTimeSeconds) {
        if(!playbackWasPaused) {
          if(playbackPausedDebug == 1) {
            playbackPausedDebug = 0;
            playbackWasPaused = true
            lastSongStartTime = currentSongStartTimeSeconds
      
            console.log(constants.consolePrefix + chalk.yellow('Song paused.'))
      
            //* Update ytm presence
            updateYTMPresence({
              details: entities.decode(currentSongTitle),
              state: entities.decode(currentSongAuthorString),
              smallImageKey: "pause",
              smallImageText: "Playing paused.",
              largeImageKey: "ytm_lg",
              instance: true
            })
          } else {
            playbackPausedDebug++
          }
        }
      } else if(playbackWasPaused) {
  
        console.log(constants.consolePrefix + chalk.yellow('Song resumed.'))
  
        //* Update ytm presence
        updateYTMPresence({
          details: entities.decode(currentSongTitle),
          state: entities.decode(currentSongAuthorString),
          smallImageKey: "play",
          smallImageText: "Playing back.",
          largeImageKey: "ytm_lg",
          startTimestamp: currentSongStartTime,
          endTimestamp: currentSongEndTime,
          instance: true
        })
  
        playbackWasPaused = false
      } else {
        var difference = Math.abs(lastSongStartTime - currentSongStartTimeSeconds +1);
        if(difference != 0) {
          console.log(constants.consolePrefix + chalk.yellow(`Song time changed. Difference: ${difference} seconds.`))
          //* Update ytm presence
          updateYTMPresence({
            details: entities.decode(currentSongTitle),
            state: entities.decode(currentSongAuthorString),
            smallImageKey: "play",
            smallImageText: "Playing back.",
            largeImageKey: "ytm_lg",
            startTimestamp: currentSongStartTime,
            endTimestamp: currentSongEndTime,
            instance: true
          })
        }
      }
    } else {
      nextSongPauseDebug--
    }
    lastSongStartTime = currentSongStartTimeSeconds
  }
}

function updateYTMPresence(data) {
  constants.ytmrpc.setActivity(data);
}

constants.ytmrpc.on("ready", () => {
  constants.presenceReady = true;
});

exports.updatePresence = updatePresence;

constants.ytmrpc.login(ytm_client_id).catch(console.error);


//* Catch Discord RPC errors