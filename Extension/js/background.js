var allowedTabsStatic = ["www.youtube.com", "music.youtube.com", "soundcloud.com", "www.netflix.com", "www.aniflix.tv", "www.anime4you.one", "www.twitch.tv", "www.rabb.it", "www.crunchyroll.com"]

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
  chrome.storage.sync.get(['options'], function(result) {
    allowedTabs = allowedTabsStatic.slice()

    options = result.options
    if(!options.enabled) {
      allowedTabs = []
      priorityTab = null
      priorityTabId = null
      lastTabId = null
    }

    updateTabPriorityService("youtube", "www.youtube.com", options)
    updateTabPriorityService("youtubeMusic", "music.youtube.com", options)
    updateTabPriorityService("soundcloud", "soundcloud.com", options)
    updateTabPriorityService("netflix", "www.netflix.com", options)
    updateTabPriorityService("twitch", "www.twitch.tv", options)
    updateTabPriorityService("aniflix", "www.aniflix.tv", options)
    updateTabPriorityService("anime4you", "www.anime4you.one", options)
    updateTabPriorityService("rabbIt", "www.rabb.it", options)
    updateTabPriorityService("crunchyroll", "www.crunchyroll.com", options)

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
    options = {}
    delete options.enabled
    options[checkStorage("enabled", options)]
    options[checkStorage("titleMenubar", options)]
    options[checkStorage("mediaControls", options)]
    options[checkStorage("checkForUpdates", options)]
    options[checkStorage("systemStartup", options)]
    options[checkStorage("darkTheme", options)]
    options[checkStorage("tabPriority", options)]
    
    options[checkStorage("youtubeMusic", options)]
    options[checkStorage("soundcloud", options)]

    options[checkStorage("youtube", options)]
    options[checkStorage("twitch", options)]
    options[checkStorage("netflix", options)]
    options[checkStorage("rabbIt", options)]

    options[checkStorage("aniflix", options)]
    options[checkStorage("crunchyroll", options)]
    options[checkStorage("anime4you", options)]

    chrome.storage.sync.set({options})
  })
}

function checkStorage(option, options) {
  if(options[option] == undefined) return options[option] = true
}