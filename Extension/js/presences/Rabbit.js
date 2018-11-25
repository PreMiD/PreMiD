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
function updateData() {
  data = null;
  if(urlChange != document.location.pathname) {
    urlChange = document.location.pathname
    readingStamp = Math.floor(Date.now()/1000)
  }

if(document.location.pathname == "/") {
    data = {
      clientID: '513683923767656449',
      presenceData: {
        details: "Browsing...",
        largeImageKey: 'ff_lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        startTimestamp: readingStamp,
      },
      trayTitle: "",
      service: 'Rabbit',
      playback: true
    }
  }
  if(socket.connected && data != null) socket.emit("updateData", data)
}