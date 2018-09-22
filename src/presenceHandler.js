//* Require needed packages
const chalk = require("chalk")
const express = require("express")
var constants = require('./util/constants.js')

const Config = require('electron-config');
const userSettings = new Config({
  name: "userSettings"
});

//* Create APP
const app = express()

app.use(express.json());

var keepAliveSwitch = 0
var lastKeepAliveSwitch = 0
let ytrpcused = false
let ytmrpcused = false

setInterval(keepAliveCheck, 1000)

function keepAliveCheck() {
  if (lastKeepAliveSwitch > keepAliveSwitch + 10) {
    constants.menuBar.tray.setTitle("")
    if(YTMRPCREADY) constants.ytmrpc.clearActivity()
    if(YTRPCREADY) constants.ytrpc.clearActivity()
  }
  lastKeepAliveSwitch += 1
}

//* Listen on port 3000
app.listen(3002, () => console.log(CONSOLEPREFIX + chalk.green("Listening on Port 3002")));

var extension = express();
var http = require('http')
// Socket connection
/* Creates new HTTP server for socket */
var socketServer = require('http').createServer(extension);
var io = require('socket.io')(socketServer);
/* Listen for socket connection on port 3002 */
socketServer.listen(3000, function () {
  console.log(CONSOLEPREFIX + chalk.green("Listening on Port 3000"))
});
/* This event will emit when client connects to the socket server */
io.on('connection', function (socket) {
  global.EXTENSIONSOCKET = socket
  BROWSERCONNECTIONSTATE = "CONNECTED"

  socket.on('playBackChange', (data) => {
    updatePresence(data, true)
  })

  socket.on('updateData', (data) => {
    updatePresence(data)
  })
});

/* Create HTTP server for node application */
var server = http.createServer(extension);
/* Node application will be running on 3000 port */
server.listen(3001);

function updatePresence(data, force = false) {
  lastKeepAliveSwitch = 0
  if(!userSettings.get('titleMenubar')) constants.menuBar.tray.setTitle("")

  if (data.ytm != undefined) {
    ytmrpcused = true
    if(userSettings.get('youTubeMusic')) require('./presences/handleYTM.js')(data, force); else if(YTMRPCREADY) constants.ytmrpc.clearActivity()
  } else if(data.yt != undefined) {
    ytrpcused = true
    if(userSettings.get('youTube')) require('./presences/handleYT.js')(data, force); else if(YTRPCREADY) constants.ytrpc.clearActivity()
  }

  if(data.ytm == undefined && YTMRPCREADY) {
    if(ytmrpcused == true) {
      ytmrpcused = false
    constants.ytmrpc.clearActivity()
    }
  }
  if(data.yt == undefined && YTRPCREADY) {
    if(ytrpcused == true) {
      ytrpcused = false
    constants.ytrpc.clearActivity()
    }
  }
}