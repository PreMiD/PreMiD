//* Load .env
require('dotenv').load();

//* Require stuff
const Discord = require('discord.js'),
  client = new Discord.Client();

//* When Bot connected
client.on('ready', () => {
  //* Send debug
  console.log(`Bot connected to Discord API`);
  //* Set bot status & activity
  client.user.setStatus(process.env.NODE_ENV == "dev" ? "dnd" : "online")
  client.user.setActivity(process.env.NODE_ENV == "dev" ? "devs code..." : "YouTube", {
    type: "WATCHING"
  })
  //* Start credits updater
  require('./util/credits')()
});


//* Login to Discord API
client.login(process.env.clientID);

//* Export client
module.exports.client = client
