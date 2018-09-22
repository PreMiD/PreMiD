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
  ytmrpcused = false

//* Keep alive check to automatically remove presence if browser not running/not using YT
setInterval(keepAliveCheck, 1000)

function keepAliveCheck() {
  if (lastKeepAliveSwitch > keepAliveSwitch + 10) {
    constants.menuBar.tray.setTitle("")
    if (YTMRPCREADY) constants.ytmrpc.clearActivity()
    if (YTRPCREADY) constants.ytrpc.clearActivity()
  }
  lastKeepAliveSwitch += 1
}

//* Listen on port 3000
socketServer.listen(3000, () => {
  console.log(CONSOLEPREFIX + chalk.green("Listening on Port 3000"))
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
  if (!userSettings.get('titleMenubar')) constants.menuBar.tray.setTitle("")

  if (data.ytm != undefined) {
    ytmrpcused = true
    if (userSettings.get('youTubeMusic')) require('./presences/handleYTM.js')(data, force); else if (YTMRPCREADY) constants.ytmrpc.clearActivity()
  } else if (data.yt != undefined) {
    ytrpcused = true
    if (userSettings.get('youTube')) require('./presences/handleYT.js')(data, force); else if (YTRPCREADY) constants.ytrpc.clearActivity()
  }

  if (data.ytm == undefined && YTMRPCREADY) {
    if (ytmrpcused == true) {
      ytmrpcused = false
      constants.ytmrpc.clearActivity()
    }
  }
  if (data.yt == undefined && YTRPCREADY) {
    if (ytrpcused == true) {
      ytrpcused = false
      constants.ytrpc.clearActivity()
    }
  }
}