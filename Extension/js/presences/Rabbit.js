var tabActive = 0,
dataUpdaterRunning = false,
dataUpdater

//* Update data and send to application
$(document).ready(() => {
  //* Tab Priority
  setInterval(() => {
    if(tabActive == 5) {
      dataUpdaterRunning = false
      clearInterval(dataUpdater)
    }
    if(tabActive >= 9 && dataUpdaterRunning == false) {
      dataUpdaterRunning = true
      dataUpdater = setInterval(updateData, 1000)
    }
    if(tabActive > 0) tabActive--
  }, 500)
})

chrome.runtime.onMessage.addListener(((message, sender) => {
  if(tabActive <= 9) tabActive += 2
  if(tabActive == 0) tabActive = 5
}))

var urlChange = null,
data = null
/**
 * Update Data and send it to the App
 * @param {String} playbackChange Playback if changed
 */
async function updateData() {
  data = null;
  if(urlChange != document.location.pathname) {
    urlChange = document.location.pathname
    readingStamp = Math.floor(Date.now()/1000)
  }

if(document.location.pathname == "/") {
    data = {
      clientID: '516742299355578380',
      presenceData: {
        details: await getString("presence.browsing"),
        largeImageKey: 'rt_lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        startTimestamp: readingStamp,
      },
      trayTitle: "",
      service: 'Rabbit',
      playback: true
    }
  } else if($('.roomName.on').get(0) != undefined) {
    data = {
      clientID: '516742299355578380',
      presenceData: {
        details: $('.roomName.on')[0].innerHTML,
        state: $('.sessionsCount')[0].innerHTML.match("[0-9]*")[0] + " " + await getString("presence.watching"),
        largeImageKey: 'rt_lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        startTimestamp: readingStamp,
      },
      trayTitle: $('.roomName.on')[0].innerHTML,
      service: 'Rabbit',
      playback: true
    }
  }

  if(socket.connected && data != null) socket.emit("updateData", data)
}