const constants = require("../util/constants.js");
const { ytm_client_id } = require("../config.json");
const Config = require("electron-config");
const chalk = require("chalk");

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
  lastSongStartTime,
  playbackWasPaused,
  playbackPausedDebug = 0,
  nextSongPauseDebug = 0,
  rpcRemoveCountdown = 0,
  ytPresenceVersionString = `YT Presence V${VERSIONSTRING}`;

async function updatePresence(data) {
  var CURRENTSONGTITLE = data.currentSongTitle,
  CURRENTSONGAUTHORS = data.currentSongAuthors,
  CURRENTSONGSTARTTIME = data.currentSongStartTime,
  CURRENTSONGSTARTTIMESECONDS = data.currentSongStartTimeSeconds,
  CURRENTSONGENDTIME = data.currentSongEndTime

  //* Create author string from author array
  CURRENTSONGAUTHORS.forEach((author, index, authors) => {
    if(index == 0) {
      CURRENTSONGAUTHORSSTRING = author
    } else if(index < authors.length - 2) {
      CURRENTSONGAUTHORSSTRING = CURRENTSONGAUTHORSSTRING + ", " + author
    } else if(index < authors.length - 1) {
      CURRENTSONGAUTHORSSTRING = CURRENTSONGAUTHORSSTRING + " and " + author
    } else {
      CURRENTSONGAUTHORSSTRING = CURRENTSONGAUTHORSSTRING + " - " + author
    }
  });

  //* Update songTitle if changed
  if(lastSongTitle != CURRENTSONGTITLE) {
    //* Only update if authors changed aswell (Debug for Presence)
    if(lastSongAuthors.join() != CURRENTSONGAUTHORS.join()) {
      if(CURRENTSONGTITLE != "" && CURRENTSONGAUTHORS.join() != "") {

        CURRENTSONGSTARTTIME = Math.floor(CURRENTSONGSTARTTIME / 1000)
        if(CURRENTSONGSTARTTIME != CURRENTSONGENDTIME) {
          lastSongTitle = CURRENTSONGTITLE
          lastSongAuthors = CURRENTSONGAUTHORS
          lastSongStartTime = CURRENTSONGSTARTTIMESECONDS
    
          rpcRemoveCountdown = 0
  
          nextSongPauseDebug = 2
    
          if(playbackWasPaused) playbackWasPaused = false
          
          console.log(CONSOLEPREFIX + chalk.yellow('Song changed, now playing: ') + chalk.green(entities.decode(CURRENTSONGTITLE)) + chalk.yellow('.'))
    
          //* Set menuBar title if enabled
          if(userSettings.get('titleMenubar')) constants.menuBar.tray.setTitle(entities.decode(CURRENTSONGTITLE))
    
          //* Update ytm presence
          updateYTMPresence({
            details: entities.decode(CURRENTSONGTITLE),
            state: entities.decode(CURRENTSONGAUTHORSSTRING),
            largeImageKey: "ytm_lg",
            largeImageText: ytPresenceVersionString,
            smallImageKey: "play",
            smallImageText: "Playing back.",
            startTimestamp: CURRENTSONGSTARTTIME,
            endTimestamp: CURRENTSONGENDTIME,
            instance: true
          }) 
        }
      }
    }
  } else {
    if(nextSongPauseDebug == 0) {
      if(lastSongStartTime == CURRENTSONGSTARTTIMESECONDS) {
        if(!playbackWasPaused) {
          if(playbackPausedDebug == 1) {
            playbackPausedDebug = 0;
            playbackWasPaused = true
            lastSongStartTime = CURRENTSONGSTARTTIMESECONDS
      
            console.log(CONSOLEPREFIX + chalk.yellow('Song paused.'))
      
            //* Update ytm presence
            updateYTMPresence({
              details: entities.decode(CURRENTSONGTITLE),
              state: entities.decode(CURRENTSONGAUTHORSSTRING),
              largeImageKey: "ytm_lg",
              largeImageText: ytPresenceVersionString,
              smallImageKey: "pause",
              smallImageText: "Playing paused.",
              instance: true
            })
          } else {
            playbackPausedDebug++
          }
        }
        if(rpcRemoveCountdown == 60) {
          constants.ytmrpc.clearActivity()
          //* Set menuBar title if enabled
          if(userSettings.get('titleMenubar')) constants.menuBar.tray.setTitle("")
        } else {
          rpcRemoveCountdown++
        }
      } else if(playbackWasPaused) {
  
        console.log(CONSOLEPREFIX + chalk.yellow('Song resumed.'))
        //* Set menuBar title if enabled
        if(userSettings.get('titleMenubar')) constants.menuBar.tray.setTitle(entities.decode(CURRENTSONGTITLE))

        rpcRemoveCountdown = 0
  
        //* Update ytm presence
        updateYTMPresence({
          details: entities.decode(CURRENTSONGTITLE),
          state: entities.decode(CURRENTSONGAUTHORSSTRING),
          largeImageKey: "ytm_lg",
          largeImageText: ytPresenceVersionString,
          smallImageKey: "play",
          smallImageText: "Playing back.",
          startTimestamp: Math.floor(CURRENTSONGSTARTTIME / 1000),
          endTimestamp: CURRENTSONGENDTIME,
          instance: true
        })
  
        playbackWasPaused = false
      } else {
        var difference = Math.abs(lastSongStartTime - CURRENTSONGSTARTTIMESECONDS +1);
        if(difference != 0) {
          console.log(CONSOLEPREFIX + chalk.yellow(`Song time changed. Difference: ${difference} seconds.`))
          //* Update ytm presence
          updateYTMPresence({
            details: entities.decode(CURRENTSONGTITLE),
            state: entities.decode(CURRENTSONGAUTHORSSTRING),
            smallImageKey: "play",
            smallImageText: "Playing back.",
            largeImageKey: "ytm_lg",
            startTimestamp: Math.floor(CURRENTSONGSTARTTIME / 1000),
            endTimestamp: CURRENTSONGENDTIME,
            instance: true
          })
        }
      }
    } else {
      nextSongPauseDebug--
    }
    lastSongStartTime = CURRENTSONGSTARTTIMESECONDS
  }
}

function updateYTMPresence(data) {
  constants.ytmrpc.setActivity(data);
}

constants.ytmrpc.on("ready", () => {
  constants.presenceReady = true;
});

exports.updatePresence = updatePresence;

constants.ytmrpc.login({clientId: ytm_client_id}).catch(console.error);

//* Catch Discord RPC errors