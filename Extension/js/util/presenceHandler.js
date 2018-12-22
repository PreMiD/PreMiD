var dataGrabberID,
currPresence

window.addEventListener("PreMiD_RequestExtensionData", async function(data) {
  if(data.detail.strings != undefined) {
    var translations = []
    for(var i = 0; i < Object.keys(data.detail.strings).length; i++) {
      translations.push(getString(Object.values(data.detail.strings)[i]))
    }
    Promise.all(translations)
    .then(completed => {
      for(var i = 0; i < Object.keys(data.detail.strings).length; i++) {
        data.detail.strings[Object.keys(data.detail.strings)[i]] = completed[i]
      }
    })
  }

  data.detail.version = eval(data.detail.version)

  var event = new CustomEvent('PreMiD_ReceiveExtensionData', {detail: data.detail})
  window.dispatchEvent(event);
})

async function test(d) {
  return "dd"
}

$(document).ready(async function() {
  await chrome.storage.local.set(
    {
      presences: [
        {
          service: "YouTube",
          url: "www.youtube.com",
          presence: ``
        }
      ]
    }
  )

  var presences = (await chrome.storage.local.get(['presences'])).presences
  presences.forEach(presence => {
    if(document.location.hostname == presence.url) {
      if(!dataGrabberID) {
        dataGrabberID = true
        $(`<script src="https://cdn.jsdelivr.net/gh/Timeraa/PreMiD@V1.4/Extension/js/util/jquery-3.3.1.min.js"></script>`).appendTo('body')
        $(`<script></script>`).appendTo('body')
        /*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          console.log(tabs)
        })
        $.getScript("https://cdn.jsdelivr.net/gh/Timeraa/PreMiD@V1.4/presences/YouTube.js", function() {
         console.log(typeof handleMediaKeys === "function")
        })*/
        //browser.tabs.executeScript(0, "https://cdn.jsdelivr.net/gh/Timeraa/PreMiD@V1.4/presences/YouTube.js")
      }
    }
  });
})


async function dataGrabber() {
  var presence = currPresence,
  playback,
  currentTime,
  duration

  if(!presence.video.iframe || presence.video.iframe == undefined) {
    playback = new Function("return !" + presence.video.tag + ".paused")()
    currentTime = new Function("return " + presence.video.tag + ".currentTime")()
    duration = new Function("return " + presence.video.tag + ".duration")()
  }

  console.log(playback, currentTime, duration)
}
