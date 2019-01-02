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