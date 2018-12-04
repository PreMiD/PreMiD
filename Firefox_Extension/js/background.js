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
  if(priorityTab) browser.tabs.sendMessage(priorityTab, {socketConnection: true})
  tabPriorityInterval = setInterval(tabPriority, 1000)
})

socket.on("disconnect", function() {
  if(priorityTab) browser.tabs.sendMessage(priorityTab, {socketConnection: false})
  clearInterval(tabPriorityInterval)
})


socket.on("mediaKeyHandler", function(data) {
  //* Media control buttons
  if(priorityTab) browser.tabs.sendMessage(priorityTab, {mediaKeys: data.playback})
})

browser.runtime.onMessage.addListener(function(data, sender) {
  if(data.presence != undefined) {
    socket.emit("updateData", data.presence)
  }
})

/**
 * Tab Priority™
 * Handles tab changes.
 * 
 */
async function tabPriority() {
  browser.tabs.query({active: true})
  .then(function(tabs) {
    allowedTabs.forEach(function(url) {
      if(tabs[0].url.indexOf(url) > -1) {
        if(tabs[0].id == lastTabId) {
          if(lastTabPriorityLock >= 5)
            priorityTab = tabs[0].id
          else 
            lastTabPriorityLock++
        } else {
          if(priorityTab) browser.tabs.sendMessage(priorityTab, {tabPriority: false})
          lastTabId = tabs[0].id
          lastTabPriorityLock = 0
        }
      } else lastTabPriorityLock = 0
    })

    if(priorityTab)
      browser.tabs.sendMessage(priorityTab, {tabPriority: true})
  })
}