var {webContents} = require('electron')

//* Require needed packages
const Entities = require('html-entities').AllHtmlEntities
const entities = new Entities()

const chalk = require("chalk")
const { yt_client_id, ytm_client_id } = require("./config")
const express = require("express")
var constants = require('./util/constants.js')
let YTM = require('./presences/handleYTM.js');

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

//* Listen on port 3000
app.listen(3000, () => console.log(constants.consolePrefix + chalk.green("is ready to use!")));
