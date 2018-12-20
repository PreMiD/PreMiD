var dataGrabberID,
currPresence
$(document).ready(async function() {
  await chrome.storage.local.set(
    {
      presences: [
        {
          service: "YouTube",
          url: "www.youtube.com",
          presence: `var playback=!1,videoTitle,videoAuthor,videoTimestamps,playbackBoolean,smallImageKey,smallImageText
          async function handleMediaKeys(data){if(playback){switch(data.mediaKeys){case "pause":playbackBoolean?$('.video-stream')[0].pause():$('.video-stream')[0].play()
          break
          case "nextTrack":$('.ytp-next-button')[0].click()
          break
          case "previousTrack":$('.ytp-prev-button')[0].click()
          break}}}
          async function updateData(){playback=document.location.pathname.includes("/watch")&&$('.ytd-video-primary-info-renderer .title').text()!=""&&$('.video-stream')[0]!=undefined&&!isNaN($('.video-stream')[0].duration)?!0:!1
          if(playback){videoTitle=$('.ytd-video-primary-info-renderer .title').text()
          videoAuthor=$("#upload-info .style-scope .ytd-video-owner-renderer").contents().first().html()
          videoTimestamps=getTimestamps(Math.floor($('.video-stream')[0].currentTime),Math.floor($('.video-stream')[0].duration))
          playbackBoolean=!$('.video-stream')[0].paused
          smallImageKey=playbackBoolean?'play':'pause'
          smallImageText=playbackBoolean?await getString("presence.playback.playing"):await getString("presence.playback.paused")
          var data={clientID:'463097721130188830',presenceData:{details:$('<div/>').html(videoTitle).text(),state:$('<div/>').html(videoAuthor).text(),largeImageKey:'yt_lg',largeImageText:chrome.runtime.getManifest().name+' V'+chrome.runtime.getManifest().version,smallImageKey:smallImageKey,smallImageText:smallImageText,},trayTitle:$('<div/>').html(videoTitle).text(),playback:playbackBoolean,service:'YouTube'}
          if(playbackBoolean){data.presenceData.startTimestamp=videoTimestamps[0]
          data.presenceData.endTimestamp=videoTimestamps[1]}else{delete data.presenceData.startTimestamp
          delete data.presenceData.endTimestamp}
          chrome.runtime.sendMessage({presence:data})}}`
        }
      ]
    }
  )

  var presences = (await chrome.storage.local.get(['presences'])).presences
  presences.forEach(presence => {
    if(document.location.hostname == presence.url) {
      if(!dataGrabberID) {
        dataGrabberID = true
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          console.log(tabs)
        })
        //browser.tabs.executeScript(0, "https://cdn.jsdelivr.net/gh/Timeraa/PreMiD@V1.4/presences/YouTube.js")
        setInterval(() =>   console.log(typeof handleMediaKeys === "function"), 1*1000)
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
