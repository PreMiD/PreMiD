
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
    document.location.pathname.includes("/movie/")
    ||document.location.pathname.includes("/anime/")
    && iframe_video != null
    && iframe_video.dur != null
    ? true : false

  if (playback){
    videoTitle = $('.sd-inner').find('header').find('h1').text().split('-')[0]
    videoAuthor = $('.sd-inner').find('header').find('h1').text().split('-')[1]

    videoTimestamps = getTimestamps(Math.floor(iframe_video.curr), Math.floor(iframe_video.dur))

    playbackBoolean = !iframe_video.paused
    smallImageKey = playbackBoolean ? 'play' : 'pause'
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")

    /*MODIFY THIS WITH THE REAL CLIENT_ID AND INFO*/
    var data = {
      clientID: '521104874738417664',
      presenceData: {
        details: videoTitle,
        state: videoAuthor,
        largeImageKey: 'aniflix_lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        smallImageKey: smallImageKey,
        smallImageText: smallImageText,
      },
      trayTitle: videoTitle,
      playback: playbackBoolean,
      service: 'Aniflix'
    }

    if(playbackBoolean) {
      data.presenceData.startTimestamp = videoTimestamps[0]
      data.presenceData.endTimestamp = videoTimestamps[1]
    } else {
      delete data.presenceData.startTimestamp
      delete data.presenceData.endTimestamp
    }

    chrome.runtime.sendMessage({presence: data})
  }
}