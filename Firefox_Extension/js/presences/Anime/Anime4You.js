var playback = false,
videoTitle,
videoAuthor,
videoTimestamps,
playbackBoolean,
smallImageKey,
smallImageText

/**
 * Updates the Presence data and sends it back
 * to the background.js for further interaction
 */
async function updateData() {
  alert("ARSCHLOCH!")

  playback = 
    $('.titleshow h1').text().trim() != ""
    && iframe_video.dur != null ? true : false



  //* If page has all required propertys
  if(playback) {
    videoTitle = $('.titleshow h1').html()
    videoAuthor = await getString("presence.episode") + " " + $('.episoden a.active').text(),
    
    videoTimestamps = getTimestamps(Math.floor(iframe_video.curr), Math.floor(iframe_video.dur))
    playbackBoolean = !iframe_video.paused
    smallImageKey = playbackBoolean ? 'play' : 'pause'
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")

    var data = {
      clientID: '517148876273090577',
      presenceData: {
        details: $('<div/>').html(videoTitle).text(),
        state: $('<div/>').html(videoAuthor).text(),
        largeImageKey: 'a4y_lg',
        largeImageText: browser.runtime.getManifest().name + ' V' + browser.runtime.getManifest().version,
        smallImageKey: smallImageKey,
        smallImageText: smallImageText,
      },
      trayTitle: $('<div/>').html(videoTitle).text(),
      playback: playbackBoolean,
      service: 'Anime4You'
    }

    if(playbackBoolean) {
      data.presenceData.startTimestamp = videoTimestamps[0]
      data.presenceData.endTimestamp = videoTimestamps[1]
    } else {
      delete data.presenceData.startTimestamp
      delete data.presenceData.endTimestamp
    }

    browser.runtime.sendMessage({presence: data})
  }
}