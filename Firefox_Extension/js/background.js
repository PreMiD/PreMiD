browser.runtime.onInstalled.addListener(function(details) {
  switch(details.reason) {
    case "install": {
      browser.tabs.create({url: "installed.html"})
      break;
    }
    case "update": {
      //browser.tabs.create({url: "updated.html"})
      break;
    }
  }
})

//* Tab Priority™ variables
var lastTabId = null,
lastTabPriorityLock = 0,
priorityTab = null,
allowedTabs = ["www.youtube.com"],
tabPriorityInterval = null

var socket = io.connect("http://localhost:3020/")
socket.on("connect", function() {
  tabPriorityInterval = setInterval(tabPriority, 1000)
})

socket.on("disconnect", function() {
  clearInterval(tabPriorityInterval)
})


socket.on("mediaKeyHandler", function(data) {
  //* Media control buttons
  if(priorityTab) browser.tabs.sendMessage(priorityTab, {mediaKeys: data.playback})
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
  browser.tabs.query({active: true})
  .then(function(tabs) {
    allowedTabs.forEach(function(url) {
      if(tabs[0].url.indexOf(url) > -1) {
        if(tabs[0].id == lastTabId) {
          if(lastTabPriorityLock == 5) {
            if(priorityTab != tabs[0].id) {
              if(priorityTab != null) 
                browser.tabs.sendMessage(priorityTab, {tabPriority: false})
              priorityTab = tabs[0].id
            }
          } 

          lastTabPriorityLock++
        } else {
          lastTabId = tabs[0].id
          lastTabPriorityLock = 0
        }
      } else lastTabPriorityLock = 0
    })

    if(priorityTab)
      browser.tabs.sendMessage(priorityTab, {tabPriority: true})
  })
}