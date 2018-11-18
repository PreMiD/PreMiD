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

  if(document.location.pathname.match("\/story\/[0-9]{6}\/[0-9]*\/") != null) {
    var length = document.location.pathname.match("\/story\/[0-9]{6}\/[0-9]*\/")[0].split("/").length
    var chapter = document.location.pathname.match("\/story\/[0-9]{6}\/[0-9]*\/")[0].split("/")[length-2]

    data = {
      clientID: '513683923767656449',
      presenceData: {
        details: $('.info-container h1 a').get(0).text,
        state: "Chapter " + chapter + ": " + $('#chapter_title').text(),
        largeImageKey: 'ff_lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        startTimestamp: readingStamp,
      },
      trayTitle: "Chapter " + chapter + ": " + $('#chapter_title').text(),
      service: 'FimFiction',
      playback: true
    }
  } else if(document.location.pathname.match("\/story\/[0-9]*/[A-Z]*") != null) {
    data = {
      clientID: '513683923767656449',
      presenceData: {
        details: $('.story_name').text(),
        state: "by " + $('.info-container h1 a').get(0).text,
        largeImageKey: 'ff_lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        startTimestamp: readingStamp,
      },
      trayTitle: $('.story_name').text(),
      service: 'FimFiction',
      playback: true
    }
  } else if(document.location.pathname.match("\/user\/[0-9]*") != null) {
    data = {
      clientID: '513683923767656449',
      presenceData: {
        details: "Looking at",
        state: $('.info-container h1 a').get(0).text + "'s profile",
        largeImageKey: 'ff_lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        startTimestamp: readingStamp,
      },
      trayTitle: "Chapter " + chapter + ": " + $('#chapter_title').text(),
      service: 'FimFiction',
      playback: true
    }
  } else if(document.location.pathname.match("\/group\/[0-9]*\/.*[^\/]$") != null && document.location.pathname.match("\/group\/([0-9]+)\/([^\/]+)\/thread\/([0-9]+)\/([^\?#]*)") == null) {
    data = {
      clientID: '513683923767656449',
      presenceData: {
        details: $('.group_name').text() + " Group",
        state: $('.buttons li a')[0].text.substr(0, $('.buttons li a')[0].text.length-7) + " Stories",
        largeImageKey: 'ff_lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        startTimestamp: readingStamp,
      },
      trayTitle: $('.story_name').text(),
      service: 'FimFiction',
      playback: true
    }
  } else if(document.location.pathname.match("\/group\/[0-9]*/.*/thread/") != null) {
    data = {
      clientID: '513683923767656449',
      presenceData: {
        details: $('.group_name').text() + " Group (" + $('.buttons li a')[0].text.substr(0, $('.buttons li a')[0].text.length-7) + " Stories)",
        state: $('.breadcrumbs li a').get(1).text + " (" + $('.num-comments').first().text() + " Comments)",
        largeImageKey: 'ff_lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        startTimestamp: readingStamp,
      },
      trayTitle: $('.story_name').text(),
      service: 'FimFiction',
      playback: true
    }
  } else if(document.location.pathname == "/") {
    data = {
      clientID: '513683923767656449',
      presenceData: {
        details: "Browsing...",
        largeImageKey: 'ff_lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        startTimestamp: readingStamp,
      },
      trayTitle: "",
      service: 'FimFiction',
      playback: true
    }
  }
  if(socket.connected && data != null) socket.emit("updateData", data)
}