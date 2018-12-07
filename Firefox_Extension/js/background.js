browser.runtime.onInstalled.addListener(function(details) {
  switch(details.reason) {
    case "install": {
      browser.tabs.create({url: "installed.html"})
      updateOptions()
      break;
    }
    case "update": {
      //browser.tabs.create({url: "updated.html"})
      updateOptions()
      break;
    }
  }
})

async function updateOptions() {
  /*browser.storage.sync.set({options: {
    enabled: true, 
    youtube: true, 
    youtubeMusic: true, 
    twitch: true, 
    soundcloud: true, 
    netflix: true, 
    kissanime: true, 
    jkanime: true,
    fimfiction: true,
    titleMenubar: true, 
    mediaControls: true, 
    checkForUpdates: true, 
    systemStartup: true,
    darkTheme: true
  }})*/

  browser.storage.sync.get(['options'], async function(result) {
    var options
    if(result.options == undefined) {
      options = {
        enabled: true,
        titleMenubar: true,
        mediaControls: true,
        checkforUpdates: true,
        systemStartup: true,
        darkTheme: true,

        youtube: true, 
        youtubeMusic: true, 
        twitch: true, 
        soundcloud: true, 
        netflix: true, 
        kissanime: true, 
        jkanime: true,
        fimfiction: true
      }

      browser.storage.sync.set({options})
    } else {
      options = result.options
      delete options.enabled
      if(options.enabled == undefined) options.enabled = true
      if(options.titleMenubar == undefined) options.titleMenubar = true
      if(options.mediaControls == undefined) options.mediaControls = true
      if(options.checkforUpdates == undefined) options.checkforUpdates = true
      if(options.systemStartup == undefined) options.systemStartup = true
      if(options.darkTheme == undefined) options.darkTheme = true

      if(options.youtube == undefined) options.youtube = true
      if(options.youtubeMusic == undefined) options.youtubeMusic = true
      if(options.twitch == undefined) options.twitch = true
      if(options.soundcloud == undefined) options.soundcloud = true
      if(options.netflix == undefined) options.netflix = true
      if(options.kissanime == undefined) options.kissanime = true
      if(options.jkanime == undefined) options.jkanime = true
      if(options.fimfiction == undefined) options.fimfiction = true
    }
  })
}

//* Tab Priority™ variables
var lastTabId = null,
lastTabPriorityLock = 0,
priorityTabId = null,
priorityTab = null,
allowedTabs = ["www.youtube.com"],
tabPriorityInterval = null

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
  if(priorityTabId) browser.tabs.sendMessage(priorityTabId, {mediaKeys: data.playback})
})

//* Forward the presence data received from Presence script to application
browser.runtime.onMessage.addListener(function(data, sender) {
  if(data.presence != undefined) {
    socket.emit("updateData", data.presence)
  }
})

/**
 * Tab Priority™
 * Handles tab changes.
 */
async function tabPriority() {
  browser.storage.sync.get(['options'], function(result) {
    allowedTabs = ["www.youtube.com"]

    var options = result.options
    if(!options.enabled) {
      allowedTabs = []
      priorityTab = null
      priorityTabId = null
      lastTabId = null
    }

    updateTabPriorityService("youtube", "www.youtube.com", options)

    browser.tabs.query({active: true})
    .then(function(tabs) {
      allowedTabs.forEach(function(url) {
        if(tabs[0].url.indexOf(url) > -1) {
          if(tabs[0].id == lastTabId) {
            if(lastTabPriorityLock == 5) {
              if(priorityTabId != tabs[0].id) {
                if(priorityTabId != null) 
                  browser.tabs.sendMessage(priorityTabId.id, {tabPriority: false})
                  priorityTabId = tabs[0].id
                  priorityTab = tabs[0]
              }
            } 
  
            lastTabPriorityLock++
          } else {
            lastTabId = tabs[0].id
            lastTabPriorityLock = 0
          }
        } else lastTabPriorityLock = 0
      })
  
      if(priorityTabId)
        browser.tabs.sendMessage(priorityTabId, {tabPriority: true})
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