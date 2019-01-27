var DiscordRPC = require('discord-rpc'),
  {uploadAsset, imageDataFromUrl} = require('./util/AppManagement'),
  {app, dialog} = require('electron'),
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

var options = new Config({
  name: "options"
});

var debug = require('./util/debug')

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
socketServer.listen(options.get("port"), () => {
  debug.success(`Listening on Port ${options.get("port")}`)
})

socketServer.on('error', e => {
  if(e.code == "EADDRINUSE")
    dialog.showMessageBox({
      type: "error",
      title: "Whoopsie! Port already in use...",
      message: `Whoopsie! Port ${options.get("port")} is already in use... Is PreMiD running already?`
    })
})

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

var oldTitle = "",
oldService = "",
oldImage = ""
//* Updates the presence with the incomming data
async function updatePresence(data) {
  if(true) {
    if(data.presenceData.details != oldTitle || data.service != oldService) {
      oldTitle = data.presenceData.details
      oldService = data.service
      imageDataFromUrl(data.coverArt)
      .then(imageData => {
        uploadAsset(1, data.presenceData.details.replace(/[^A-Z0-9]/ig, "_").toLowerCase().slice(0, 31), imageData)
        .then(() => {oldImage = data.coverArt})
      })
      .catch(err => data.presenceData.largeImageKey = data.service)
    }
    data.presenceData.largeImageKey = data.presenceData.details.replace(/[^A-Z0-9]/ig, "_").toLowerCase().slice(0, 31);
  }

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
      if(data.coverArt == oldImage)
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
  .catch(err => debug.error(`RPC: ${err.message}`))  
  serviceRPC.rpc.on("ready", () => {
    clearInterval(serviceLogins.find(svice => svice.serviceName == service).intervalID)
    serviceRPC.ready = true
  })
}

app.on('will-quit', () => {
  debug.info("Closing all active RPC connections...")
  Promise.all(setupServices.map(service => {
    service.rpc.clearActivity()
    service.rpc.destroy()
    return service
  }))
  .then((collection) => {
    debug.success("Closing all active RPC connections... - Done | " + collection.map(service => service.serviceName).join(", "))
  })
})
