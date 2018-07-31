//* Require needed packages
const chalk = require("chalk")
const express = require("express")
var constants = require('./util/constants.js')
let YTM = require('./presences/handleYTM.js');
let YT = require('./presences/handleYT.js');

const Config = require('electron-config');
const userSettings = new Config({
  name: "userSettings"
});

//* Create APP
const app = express()

app.use(express.json());

let data

var keepAliveSwitch = 0
var lastKeepAliveSwitch = 0

setInterval(keepAliveCheck, 1000)

function keepAliveCheck() {
  if(lastKeepAliveSwitch > keepAliveSwitch + 10) {
    constants.menuBar.tray.setTitle("")
    constants.ytmrpc.clearActivity()
  }
  lastKeepAliveSwitch += 1
}

app.post("/", async (request, response) => {  
  constants.lastResponse = new Date().getTime();
  data = request.body
  if(data.connected === true) {
    //* Check if presence is ready
      if(constants.chromeConnected == false) {
        constants.chromeConnected = true;
        constants.menuBar.tray.setTitle("Chrome found!")
        console.log(CONSOLEPREFIX + chalk.green("Chrome client connected."))
        setTimeout(function() {
          if(data.currentSongAuthor == undefined) {
            constants.menuBar.tray.setTitle("")
          }
          constants.introRan = true
        }, 5*1000)
      }
      if(data.service != "keepAlive" && data.service == "ytm") {
        lastKeepAliveSwitch = 0
        keepAliveSwitch = 0
        if(userSettings.get('youTubeMusic') == true) {
          if(constants.introRan && constants.chromeConnected && constants.presenceReady) {
            if(serviceType(data.service) == "ytm") YTM.updatePresence(data)
          }
        } else {
          constants.menuBar.tray.setTitle("")
          constants.ytmrpc.clearActivity()
        }
      } else if(data.service != "keepAlive" && data.service == "yt") {
        lastKeepAliveSwitch = 0
        keepAliveSwitch = 0
        if(userSettings.get('youTube') == true) {
          if(constants.introRan && constants.chromeConnected && constants.presenceReady) {
            if(serviceType(data.service) == "yt") YT.updatePresence(data)
          }
        } else {
          constants.menuBar.tray.setTitle("")
          constants.ytrpc.clearActivity()
        }
      } else {
        if(keepAliveSwitch >= 3) {
          constants.menuBar.tray.setTitle("")
          constants.ytmrpc.clearActivity()
        }
        keepAliveSwitch += 1
      }
  }
  return response.sendStatus(200);
})

function serviceType(service) {
  switch(service) {
    case "ytm":
      return "ytm"
    case "yt":
      return "yt"
    default:
      return false
  }
}

//* Listen on port 3000
app.listen(3000, () => console.log(CONSOLEPREFIX + chalk.green("Listening on Port 3000")));
