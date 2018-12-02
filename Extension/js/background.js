chrome.runtime.onInstalled.addListener(function(details) {
  switch(details.reason) {
    case "install": {
      chrome.tabs.create({url: "html/tabs/installed.html"})
      break;
    }
    case "update": {
      //chrome.tabs.create({url: "html/tabs/updated.html"})
      break;
    }
  }
})

//* Tab Priority
var lastAllowedTab = null,
allowedURL = []
setInterval(() => {
  chrome.storage.sync.get(['options'], function(result) {
    //* Create config if not already    
    allowedURL = ["www.youtube.com", "music.youtube.com", "www.twitch.tv", "soundcloud.com", "www.netflix.com", "kissanime.ru", "jkanime.net", "fimfiction.net", "hentaihaven.org", "www.rabb.it", "hentaigasm.com", "www.anime4you.one"]
    if(result.options != undefined) {
      var options = result.options
      if(!options.enabled) allowedURL = []
      if(!options.youtube) allowedURL.remove("www.youtube.com")
      if(!options.youtubeMusic) allowedURL.remove("music.youtube.com")
      if(!options.twitch) allowedURL.remove("www.twitch.tv")
      if(!options.soundcloud) allowedURL.remove("soundcloud.com")
      if(!options.netflix) allowedURL.remove("www.netflix.com")
      if(!options.kissanime) allowedURL.remove('kissanime.ru')
      if(!options.jkanime) allowedURL.remove("jkanime.net")
      if(!options.rabbIt) allowedURL.remove("www.rabb.it")
      if(!options.fimfiction) allowedURL.remove("fimfiction.net")
      if(!options.hentaigasm) allowedURL.remove("hentaigasm.com")
      if(!options.hentaihaven) allowedURL.remove("hentaihaven.org")
      if(!options.anime4you) allowedURL.remove("www.anime4you.one")
    }
  })
  chrome.tabs.getAllInWindow(null, (tabs) => {

    for (var i = 0; i < allowedURL.length; i++) {
      var currentTab = tabs.find(tab => tab.highlighted || tab.selected)
      if(currentTab.url.indexOf(allowedURL[i]) > -1) {
        lastAllowedTab = currentTab.id
      }
    }
    if(lastAllowedTab != null) {
      chrome.tabs.sendMessage(lastAllowedTab, {"high": true})
    }
  })
}, 500)

Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};

//* Create socket connection to application
var socket = io.connect('http://localhost:3020/');

setInterval(() => {
  chrome.storage.sync.get(['options'], function(result) {
    socket.emit('settingsChange', result)
  })
}, 1000)


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.tabs.sendMessage(lastAllowedTab, request)
  });