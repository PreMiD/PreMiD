chrome.runtime.onInstalled.addListener(function(details) {
  switch(details.reason) {
    case "install": {
      chrome.tabs.create({url: "installed.html"})
      break;
    }
    case "update": {
      chrome.tabs.create({url: "updated.html"})
      break;
    }
  }
})


//* Tab Priority
var lastAllowedTab = null
setInterval(() => {
  chrome.tabs.getAllInWindow(null, (tabs) => {
    var allowedURL = ["www.youtube.com", "music.youtube.com", "twitch.tv", "soundcloud.com", "netflix.com"]

    for (var i = 0; i < allowedURL.length; i++) {
      var currentTab = tabs.find(tab => tab.highlighted)
      if(currentTab.url.indexOf(allowedURL[i]) > -1) {
        lastAllowedTab = currentTab.id
      }
    }
    if(lastAllowedTab != null) {
      chrome.tabs.sendMessage(lastAllowedTab, {"high": true})
    }
  })
}, 500)