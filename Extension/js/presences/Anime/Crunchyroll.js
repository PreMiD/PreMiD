var playback = false,
videoTitle,
videoAuthor,
videoTimestamps,
playbackBoolean,
smallImageKey,
smallImageText,
episodeNumber

/**
 * Updates the Presence data and sends it back
 * to the background.js for further interaction
 */
async function updateData() {
  //console.log($('#showmedia_about_media h4').get(1).innerHTML.trim())
  playback = 
  $('#showmedia_about_media a:first') != null
    && iframe_video.dur != null ? true : false

  //* If page has all required propertys
  if(playback) {
    videoTitle = $('#showmedia_about_media a:first').text()
    episodeNumber = ($('.collection-carousel-media-link-current').text().trim().match(/^[^\d]+(\d+)/) || [null, '??'])[1]
    videoAuthor = (await getString("presence.episode")).replace("{{episode}}", episodeNumber) + " - " + $('#showmedia_about_name').text()
    
    videoTimestamps = getTimestamps(Math.floor(iframe_video.curr), Math.floor(iframe_video.dur))
    playbackBoolean = !iframe_video.paused
    smallImageKey = playbackBoolean ? 'play' : 'pause'
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")

    var data = {
      clientID: '518544926158487557',
      presenceData: {
        details: $('<div/>').html(videoTitle).text(),
        state: $('<div/>').html(videoAuthor).text(),
        largeImageKey: 'cr_lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        smallImageKey: smallImageKey,
        smallImageText: smallImageText,
      },
      trayTitle: $('<div/>').html(videoTitle).text(),
      playback: playbackBoolean,
      service: 'Crunchyroll'
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
