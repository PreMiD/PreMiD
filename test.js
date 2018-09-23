var DiscordRPC = require('discord-rpc')

var loginAttempt = setInterval(connectAttempt, 5*1000)

function connectAttempt() {
  DISCORDRPC = new DiscordRPC.Client({ transport: "ipc" });

  DISCORDRPC.login({clientId: "463097721130188830"})
  .catch(err => console.log("Not connected"))

  DISCORDRPC.on('ready', () => {
    console.log("GOOD!")
    clearInterval(loginAttempt)
  
    var setActivity = setInterval(() => {
      console.log("Activity")
      DISCORDRPC.setActivity({
        details: `booped 2 times`,
        state: 'in slither party',
        largeImageKey: 'snek_large',
        largeImageText: 'tea is delicious',
        smallImageKey: 'snek_small',
        smallImageText: 'i am my own pillows',
        instance: false,
      })
      .catch(err => {
        console.log("No longer connected to RPC")
        clearInterval(setActivity)
        setInterval(connectAttempt, 5*1000)
      })
    }, 15*1000)
  })
}