exports.run = (client, message, args) => {
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(`Command '${args[0]}' not found.`)
    .then(msg => setTimeout(() => msg.delete(), 5*1000))
  } else {
    message.channel.send(`Reloading '${command}'...`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`Reloaded '${command}'`)
            .then(msg => setTimeout(() => msg.delete(), 5*1000))
          })
          .catch(e => {
            m.edit(`Could not reload '${command}'\n\`\`\`${e.stack}\`\`\``)
            .then(msg => setTimeout(() => msg.delete(), 15*1000))
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Reloads a command',
  usage: 'reload <commandname>'
};