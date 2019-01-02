//* Load .env
require('dotenv').load();

//* Require stuff
var fs = require('fs')
const Discord = require('discord.js'),
client = new Discord.Client();
//* Load events
require('./util/eventLoader')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  let jrMod_role = message.guild.roles.find(role => role.name == "Jr.Moderator");
  if (jrMod_role && message.member.roles.has(jrMod_role.id)) permlvl = 1;
  let mod_role = message.guild.roles.find(role => role.name == "Moderator");
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = message.guild.roles.find(role => role.name == "Admin");
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  let developer_role = message.guild.roles.find(role => role.name == "Developer");
  if (developer_role && message.member.roles.has(developer_role.id)) permlvl = 4;
  return permlvl;
};

//* Login to Discord API
client.login(process.env.clientID);

//* Export client
module.exports.client = client
