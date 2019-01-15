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

  playback = 
    document.location.pathname.includes("/assistir/")
    && iframe_video != null
    && iframe_video.dur != null
    ? true : false

   console.log(playback)

  //* If page has all required propertys
  if(playback) {
	 if($('.nomeAnme').html().match(new RegExp(" Dublado "), "") != null) {
      videoTitle = $('.nomeAnime').html().replace(new RegExp(" Dublado"), "")
      videoAuthor = $('.epEpisodio').html()
    } 
	
    videoTimestamps = getTimestamps(Math.floor(iframe_video.curr), Math.floor(iframe_video.dur))
    playbackBoolean = !iframe_video.paused
    smallImageKey = playbackBoolean ? 'play' : 'pause'
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")

    var data = {
      clientID: '534721722524499978',
      presenceData: {
        details: $('<div/>').html(videoTitle).text(),
        state: $('<div/>').html(videoAuthor).text(),
        largeImageKey: 'branitube-lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        smallImageKey: smallImageKey,
        smallImageText: smallImageText,
      },
      trayTitle: $('<div/>').html(videoTitle).text(),
      playback: playbackBoolean,
      service: 'Branitube'
    }

    if(playbackBoolean) {
      data.presenceData.startTimestamp = videoTimestamps[0]
      data.presenceData.endTimestamp = videoTimestamps[1]
    } else {
      delete data.presenceData.startTimestamp
      delete data.presenceData.endTimestamp
    }
	console.log(data)
    chrome.runtime.sendMessage({presence: data})
  }
}