var {webContents} = require('electron')

//* Require needed packages
const Entities = require('html-entities').AllHtmlEntities
const entities = new Entities()

const chalk = require("chalk")
const { yt_client_id, ytm_client_id, api_key } = require("./config")
const express = require("express")
var constants = require('./constants.js')
let YTM = require('./handleYTM.js');

//* Create APP
const app = express()

app.use(express.json());

let data

app.post("/", async (request, response) => {
  data = request.body
  if(data.connected === true) {
    //* Check if presence is ready
      if(constants.chromeConnected == false) {
        constants.chromeConnected = true;
        constants.menuBar.tray.setTitle(" Connected!")
        console.log(constants.consolePrefix + chalk.green("Chrome client connected."))
        setTimeout(function() {
          constants.menuBar.tray.setTitle("")
        }, 5*1000)
      }
      if(constants.chromeConnected == true && constants.presenceReady == true) {
        if(serviceType(data.service) == "ytm") YTM.updatePresence(data)
      }
  }
  return response.sendStatus(200);
})

function serviceType(service) {
  switch(service) {
    case "ytm":
      return "ytm"
    default:
      return false
  }
}

/*
//* Define variables
let presence,
  videoAuthor = "fetching...",
  videoTitle = "fetching...",
  serviceType,
  body,
  startTime = Date.now(),
  endTime = Date.now(),
  lastTitle,
  lastStartingTime,
  currentVideo,
  setup = false;

//* Use JSON output
app.use(express.json());

app.post("/", async (request, response) => {
  body = request.body;
  if (body.type == "ytm") {
    //* Set service type
    serviceType = body.type;
    if (body.currentSongTitle !== "") {
      if (body.currentSongTitle !== lastTitle) {
        //* Defile variables
        startTime = Date.now();
        endTime = Math.floor(startTime / 1000) - body.currentSongStartTime + body.currentSongEndTime;
        lastTitle = body.currentSongTitle;
        lastStartingTime = body.currentSongStartTime;

        if (body.url.includes("watch?v=")) {
          // Parse video URL
          const videoURL = url.parse(
            body.url.replace("https://music.youtube.com/", "https://www.youtube.com/")
          );
          // Fetch video from parsed URL
          const video = await youtube.getVideoByID(videoURL.query.split("&")[0].slice(2, 255));
          videoAuthor = video.channel.title.replace(" - Topic", "");
          videoTitle = video.title
        }
      }

      lastStartingTime += 1;

      if (body.currentSongStartTime !== lastStartingTime) {
        lastStartingTime = body.currentSongStartTime;

        // Set presence data
        presence = {
          details: entities.decode(videoTitle),
          state: entities.decode(videoAuthor),
          smallImageKey: "pause",
          smallImageText: "Playback paused.",
          largeImageKey: "ytm_lg",
          instance: true
        };
        // Update presence from data
        updatePresence();
      } else {
        if (!isNaN(startTime) && !isNaN(endTime)) {
          // Set presence data
          presence = {
            details: entities.decode(videoTitle),
            state: entities.decode(videoAuthor),
            smallImageKey: "play",
            smallImageText: "Playing back.",
            largeImageKey: "ytm_lg",
            startTimestamp: startTime,
            endTimestamp: endTime,
            instance: true
          };
          // Update presence from data
          updatePresence();
        }
      }
    }
  }
  // Send a status of 200
  return response.sendStatus(200);
});

//* Update Discord Status
function updatePresence() {
  //* Check what discord app to use
  if (serviceType == "ytm") {
    //* Update presence
    discordYTM.updatePresence(presence);
  }
}

*/

//* Listen on port 3000
app.listen(3000, () => console.log(constants.consolePrefix + chalk.green("is ready to use!")));
