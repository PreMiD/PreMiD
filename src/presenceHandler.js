const DiscordRPC = require('discord-rpc')

//* Require needed packages
const chalk = require("chalk"),
express = require("express")

//* Create server to listen for extension
var extension = express(),
http = require('http'),
socketServer = http.createServer(extension),
io = require('socket.io')(socketServer);

//* Load Config
const Config = require('electron-store');
const userSettings = new Config({
  name: "userSettings"
});

//* Define needed variables
var lastKeepAliveSwitch = 0

//* Keep alive check to automatically remove presence if browser not running/not using YT
setInterval(keepAliveCheck, 1000)

async function keepAliveCheck() {
  if (lastKeepAliveSwitch > 0) {
    setupServices.forEach(service => {
      service.rpc.destroy()
    })
    setupServices = []
    serviceLogins = []
    if(PLATFORM == "darwin") TRAY.setTitle("");
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

  socket.on('playBackChange', updatePresence)
  socket.on('updateData', updatePresence)
  socket.on('settingsChange', require('./util/settingsHandler'))
})

var setupServices = [],
serviceLogins = [],
presencePauseSwitch = 0

//* Updates the presence with the incomming data
async function updatePresence(data) {
  lastKeepAliveSwitch = 0;

  var setupService = setupServices.find(svice => svice.serviceName == data.service);

  if(!data.playback) presencePauseSwitch++; else presencePauseSwitch = 0;
  if(presencePauseSwitch >= 60) {
    if(setupService != null) {
      setupService.rpc.clearActivity()
      if(PLATFORM == "darwin") TRAY.setTitle("");
    }
  } else {
    if(setupService) {
      if(userSettings.get('titleMenubar')) if(PLATFORM == "darwin" && data.playback) TRAY.setTitle(data.trayTitle); else TRAY.setTitle(""); 
      setupService.rpc.setActivity(data.presenceData)
    } else {
      tryLogin(data.service, data.clientID)
      serviceLogins.push({serviceName: data.service, intervalID: setInterval(() => tryLogin(data.service, data.clientID), 10 * 1000)})
    }
  }
}


/**
 * Try to login to RPC until connected
 */
async function tryLogin(service, clientID) {
  setupServices.push({rpc: new DiscordRPC.Client({ transport: "ipc" }), serviceName: service, ready: false})
  var serviceRPC = setupServices.find(svice => svice.serviceName == service)
  serviceRPC.rpc.login({ clientId: clientID })
  .catch(err => console.log(`${CONSOLEPREFIX}PreMiD - RPC: ${err.message}`))  
  serviceRPC.rpc.on("ready", () => {
    clearInterval(serviceLogins.find(svice => svice.serviceName == service).intervalID)
    serviceRPC.ready = true
  })
}
