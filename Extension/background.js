chrome.runtime.onInstalled.addListener(function(details) {
  switch(details.reason) {
    case "install": {
      chrome.tabs.create({url: "installed.html"})
      break;
    }
    case "update": {
      chrome.tabs.create({url: "update.html"})
      break;
    }
  }
})