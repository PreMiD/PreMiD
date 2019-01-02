var allowedTabsStatic = []

chrome.runtime.onInstalled.addListener(function(details) {
  switch(details.reason) {
    case "install": {
      chrome.tabs.create({url: "installed.html"})
      updateOptions()
      break;
    }
    case "update": {
      //chrome.tabs.create({url: "updated.html"})
      updateOptions()
      break;
    }
  }
})

chrome.webRequest.onSendHeaders.addListener(
  function(details) {
    if(details.method == "POST") {
      var authorization = details.requestHeaders.find(header => header.name == "Authorization")
      if(authorization != null) {
        console.log(authorization.value)
      }
    }
  },
  {urls: ["*://*.discordapp.com/*"]},
  ["requestHeaders"]
);

//* Tab Priority™ variables
var lastTabId = null,
lastTabPriorityLock = 0,
priorityTabId = null,
priorityTab = null,
allowedTabs = allowedTabsStatic.slice(),
tabPriorityInterval = null,
options

var oldOptions

var socket = io.connect("http://localhost:3020/")
socket.on("connect", function() {
  tabPriorityInterval = setInterval(tabPriority, 1000)
})

socket.on("disconnect", function() {
  clearInterval(tabPriorityInterval)
})


socket.on("mediaKeyHandler", function(data) {
  //* Media control buttons
  if(priorityTabId != null) chrome.tabs.sendMessage(priorityTabId, {mediaKeys: data.playback})
})

//* Forward the presence data received from Presence script to application
chrome.runtime.onMessage.addListener(function(data, sender) {
  if(data.presence != undefined) {
    socket.emit("updateData", data.presence)
  }
  if(data.iframe_video != undefined && priorityTabId != null) {
    chrome.tabs.sendMessage(priorityTabId, data)
  }
})

/**
 * Tab Priority™
 * Handles tab changes.
 */
async function tabPriority() {
  chrome.storage.local.get(['presences'], function(result) {
    allowedTabsStatic = []
    result.presences.forEach(presence => {
      if(presence.enabled)
      allowedTabsStatic.push(presence.url)
    });
    allowedTabs = allowedTabsStatic.slice()

    
    chrome.storage.sync.get(['options'], function(result) {
      options = result.options
      if(!options.enabled) {
        allowedTabs = []
        priorityTab = null
        priorityTabId = null
        lastTabId = null
      }

      chrome.tabs.query({active: true}, function(tabs) {
        if(tabs[0].id == lastTabId) {
        for (var i = 0; i < allowedTabs.length; i++) {
          if(tabs[0].url.indexOf(allowedTabs[i]) > -1) {
              if(lastTabPriorityLock == 5) {
                if(priorityTabId != tabs[0].id) {
                  if(priorityTabId != null)
                    chrome.tabs.sendMessage(priorityTabId, {tabPriority: false})
                  priorityTabId = tabs[0].id
                  priorityTab = tabs[0]
                }
              } 
    
              lastTabPriorityLock++
            }
          }
        } else {
          lastTabId = tabs[0].id
          lastTabPriorityLock = 0
        }
    
        if(priorityTabId != null)
          chrome.tabs.sendMessage(priorityTabId, {tabPriority: true})
      })

      //* Update settings in application if changed
      if(oldOptions == null || !isEquivalent(result.options, oldOptions)) {
        oldOptions = result.options
        socket.emit('settingsChange', result)
      }
    })
  })
}

/**
 * Remove service if disabled
 * @param {String} service Service name in options.json
 * @param {Strng} serviceURL Service URL to handle
 * @param {Object} options Options objects
 */
function updateTabPriorityService(service, serviceURL, options) {
  if(!options[service]) {
    var index = allowedTabs.indexOf(serviceURL)
    if(index != -1) allowedTabs.splice(index, 1)
    if(priorityTab != null && priorityTab.url.includes(serviceURL)) {
      priorityTabId = null
      priorityTab = null
      lastTabId = null
    } 
  }
}

/**
 * Test if object is equal to object
 * @param {Object} a 
 * @param {Object} b 
 */
function isEquivalent(a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
      return false;
  }

  for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (a[propName] !== b[propName]) {
          return false;
      }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}

async function updateOptions() {
  chrome.storage.sync.get(['options'], async function(result) {
    var options
    options = result.options
    if(options == null) options = {}
    options[checkStorage("enabled", options)]
    options[checkStorage("titleMenubar", options)]
    options[checkStorage("mediaControls", options)]
    options[checkStorage("checkForUpdates", options)]
    options[checkStorage("systemStartup", options)]
    options[checkStorage("darkTheme", options)]
    options[checkStorage("tabPriority", options)]

    chrome.storage.sync.set({options})
  })
}

function checkStorage(option, options) {
  if(options[option] == undefined) return options[option] = true
}

var currentTabURL = null
//* Load presence and inject it
chrome.tabs.onUpdated.addListener(function(tabs) {
  chrome.storage.local.get(['presences'], function(data) {
    var presences = data.presences
    presences.forEach(presence => {
      chrome.tabs.query({"active": true}, function(tabs) {
        if(tabs[0].url.includes(presence.url) && presence.enabled && currentTabURL != tabs[0].url) {
          currentTabURL = tabs[0].url
          chrome.tabs.executeScript(tabs[0].id, {
            file: "/js/util/jquery-3.3.1.min.js",
          }, function(result) {
              chrome.tabs.executeScript(tabs[0].id, {
                code: `
var playback = false,
songTitle,
songAuthors,
videoTimestamps,
playbackBoolean,
smallImageKey,
smallImageText,
extensionData = null

window.addEventListener("PreMiD_UpdateData", updateData);
window.addEventListener("PreMiD_MediaKeys", handleMediaKeys);

//* Request needed data
setTimeout(function() {
var event = new CustomEvent('PreMiD_RequestExtensionData', {detail: {strings: {playing: 'presence.playback.playing', paused: 'presence.playback.paused'}, version: "chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version"}})
  window.dispatchEvent(event);
}, 0)

//* Bind event to receive Data
window.addEventListener("PreMiD_ReceiveExtensionData", function(data) {
  extensionData = data.detail
})

/**
 * Handles Media Key controls
 * @param {data} data Data passed by socketConnector.js
 */
async function handleMediaKeys(data) {
  data = data.detail
  if(playback) {
    switch (data.mediaKeys) {
      case "pause":
        playbackBoolean ? $('.video-stream')[0].pause() : $('.video-stream')[0].play()
        break
      case "nextTrack":
        $('.next-button').click()
        break
      case "previousTrack":
        $('.previous-button').click()
        break
    }
  }
}

/**
 * Updates the Presence data and sends it back
 * to the background.js for further interaction
 */

async function updateData() {
  playback = 
  $('.ytmusic-player-bar.title').text() != ""
  && $('.video-stream')[0] != undefined
  && !isNaN($('.video-stream')[0].duration)
  ? true : false

  //* If page has all required propertys
  if(playback) {
    songTitle = $('.ytmusic-player-bar.title').text()
    songAuthors = getAuthors()
    videoTimestamps = getTimestamps(Math.floor($('.video-stream')[0].currentTime), Math.floor($('.video-stream')[0].duration))
    playbackBoolean = !$('.video-stream')[0].paused
    smallImageKey = playbackBoolean ? 'play' : 'pause'
    smallImageText = playbackBoolean ? extensionData.strings.playing : extensionData.strings.paused

    var data = {
      clientID: '528700837417975808',
      presenceData: {
        details: $('<div/>').html(songTitle).text(),
        state: $('<div/>').html(songAuthors).text(),
        largeImageKey: 'ytm_lg',
        largeImageText: extensionData.version,
        smallImageKey: smallImageKey,
        smallImageText: smallImageText,
      },
      coverArt: $('#thumbnail img').attr('src'),
      trayTitle: $('<div/>').html(songTitle).text(),
      playback: playbackBoolean,
      service: 'YouTube Music'
    }

    if(playbackBoolean) {
      data.presenceData.startTimestamp = videoTimestamps[0]
      data.presenceData.endTimestamp = videoTimestamps[1]
    } else {
      delete data.presenceData.startTimestamp
      delete data.presenceData.endTimestamp
    }

    var event = new CustomEvent('PreMiD_UpdatePresence', {detail: data})
    window.dispatchEvent(event);
  }
}


/**
 * Get authors of Song
 */
function getAuthors() {
  var songAuthors = [],
  songAuthorsString = ""

  //* Extract authors as array
  $(".byline.ytmusic-player-bar").contents().each(function (index, item) {
    if (item.classList != undefined) {
      if (item.classList.contains("yt-simple-endpoint") == true) {
        songAuthors.push(item.innerHTML)
      }
    }
  })

  //* If no authors found in previous method use this
  if (songAuthors.length == 0 || songAuthors.length == 1) {
    //* Clear old list
    songAuthors = []
    songAuthors.push($(".byline.ytmusic-player-bar").contents().first().text())
  }

  //* Build Song autor string
  songAuthors.forEach((author, index, authors) => {
    if (index == 0)
    songAuthorsString = author;
    else if (index < authors.length - 2)
    songAuthorsString = songAuthorsString + ", " + author;
    else if (index < authors.length - 1) songAuthorsString = songAuthorsString + " and " + author;
    else songAuthorsString = songAuthorsString + " &bull; " + author;
  });

  return songAuthorsString
}`
              }, function(res) {
                console.log(res)
              })
          })
        }
      })
    });
  })
})