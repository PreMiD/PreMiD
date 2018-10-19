//* Require needed packages
const chalk = require("chalk")
const express = require("express")
var constants = require('./util/constants.js')
var extension = express();
var http = require('http')
var socketServer = http.createServer(extension);
var io = require('socket.io')(socketServer);

//* Load Config
const Config = require('electron-config');
const userSettings = new Config({
  name: "userSettings"
});

//* Define needed variables
var keepAliveSwitch = 0,
  lastKeepAliveSwitch = 0,
  ytrpcused = false,
  ytmrpcused = false,
  nflixrpcused = false,
  twitchrpcused = false,
  scloudrpcused = false

//* Keep alive check to automatically remove presence if browser not running/not using YT
setInterval(keepAliveCheck, 1000)

function keepAliveCheck() {
  if (lastKeepAliveSwitch > keepAliveSwitch + 10) {
    if(PLATFORM == "darwin") TRAY.setTitle("")
    if (YTMRPCREADY) YTMRPC.clearActivity()
    if (YTRPCREADY) YTRPC.clearActivity()
    if (NFLIXRPCREADY) NFLIXRPC.clearActivity()
    if (TWITCHRPCREADY) TWITCHRPC.clearActivity()
    if (SCLOUDRPCREADY) SCLOUDRPC.clearActivity()
  }
  lastKeepAliveSwitch += 1
}

//* Listen on port 3020
socketServer.listen(3020, () => {
  console.log(CONSOLEPREFIX + chalk.green("Listening on Port 3020"))
});

//* Socket connection event
io.on('connection', function (socket) {
  global.EXTENSIONSOCKET = socket
  BROWSERCONNECTIONSTATE = "CONNECTED"

  socket.on('playBackChange', (data) => {
    updatePresence(data, true)
  })

  socket.on('updateData', (data) => {
    updatePresence(data)
  })
})

//* Updates the presence with the incomming data
function updatePresence(data, force = false) {
  lastKeepAliveSwitch = 0
  if (!userSettings.get('titleMenubar') && PLATFORM == "darwin") TRAY.setTitle("")

  if (data.yt != undefined) {
    ytrpcused = true
    if (userSettings.get('youTube')) require('./presences/YouTube.js')(data, force); else if (YTRPCREADY) YTRPC.clearActivity()
  } else if (data.ytm != undefined) {
    ytmrpcused = true
    if (userSettings.get('youTubeMusic')) require('./presences/YouTube_Music.js')(data, force); else if (YTMRPCREADY) YTMRPC.clearActivity()
  } else if(data.nflix != undefined) {
    nflixrpcused = true
    if (userSettings.get('netflix')) require('./presences/Netflix.js')(data, force); else if (NFLIXRPCREADY) NFLIXRPC.clearActivity()
  } else if(data.twitch != undefined) {
    twitchrpcused = true
    if (userSettings.get('twitch')) require('./presences/Twitch.js')(data, force); else if (TWITCHRPCREADY) TWITCHRPC.clearActivity()
  } else if(data.scloud != undefined) {
    scloudrpcused = true
    if (userSettings.get('soundcloud')) require('./presences/SoundCloud.js')(data, force); else if(SCLOUDRPCREADY) SCLOUDRPC.clearActivity()
  }

  if (data.yt == undefined && YTRPCREADY) {
    if (ytrpcused == true) {
      ytrpcused = false
      YTRPC.clearActivity()
      if(PLATFORM == "darwin") TRAY.setTitle("")
    }
  }

  if (data.ytm == undefined && YTMRPCREADY) {
    if (ytmrpcused == true) {
      ytmrpcused = false
      YTMRPC.clearActivity()
      if(PLATFORM == "darwin") TRAY.setTitle("")
    }
  }

  if (data.nflix == undefined && NFLIXRPCREADY) {
    if (nflixrpcused == true) {
      nflixrpcused = false
      NFLIXRPC.clearActivity()
      if(PLATFORM == "darwin") TRAY.setTitle("")
    }
  }

  if (data.twitch == undefined && TWITCHRPCREADY) {
    if (twitchrpcused == true) {
      twitchrpcused = false
      TWITCHRPC.clearActivity()
      if(PLATFORM == "darwin") TRAY.setTitle("")
    }
  }

  if (data.scloud == undefined && SCLOUDRPCREADY) {
    if (scloudrpcused == true) {
      scloudrpcused = false
      SCLOUDRPC.clearActivity()
      if(PLATFORM == "darwin") TRAY.setTitle("")
    }
  }
}