var playback = false,
videoTitle,
videoAuthor,
videoTimestamps,
playbackBoolean,
smallImageKey,
smallImageText

async function handleMediaKeys(data) {
  if(playback) {
    switch (data.mediaKeys) {
      case "pause":
        playbackBoolean ? $('.video-stream')[0].pause() : $('.video-stream')[0].play()
        break
      case "nextTrack":
        $('.ytp-next-button')[0].click()
        break
      case "previousTrack":
        $('.ytp-prev-button')[0].click()
        break
    }
  }
}

async function updateData() {
  playback = 
    document.location.pathname.includes("/watch")
    && $('.ytd-video-primary-info-renderer .title').text() != ""
    && $('.video-stream')[0] != undefined
    && !isNaN($('.video-stream')[0].duration)
    ? true : false

  
  if(playback) {
    videoTitle = $('.ytd-video-primary-info-renderer .title').text()
    videoAuthor = $("#upload-info .style-scope .ytd-video-owner-renderer").contents().first().html()
    videoTimestamps = getTimestamps(Math.floor($('.video-stream')[0].currentTime), Math.floor($('.video-stream')[0].duration))
    playbackBoolean = !$('.video-stream')[0].paused
    smallImageKey = playbackBoolean ? 'play' : 'pause'
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")

    var data = {
      clientID: '463097721130188830',
      presenceData: {
        details: $('<div/>').html(videoTitle).text(),
        state: $('<div/>').html(videoAuthor).text(),
        largeImageKey: 'yt_lg',
        largeImageText: browser.runtime.getManifest().name + ' V' + browser.runtime.getManifest().version,
        smallImageKey: smallImageKey,
        smallImageText: smallImageText,
      },
      trayTitle: $('<div/>').html(videoTitle).text(),
      playback: playbackBoolean,
      service: 'YouTube'
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


/**
 * Get Timestamps
 * @param {Number} videoTime Song Time
 * @param {Number} videoDuration Song Duration
 */
function getTimestamps(videoTime, videoDuration) {
  var startTime = Date.now();
  var endTime =
    Math.floor(startTime / 1000) -
    videoTime +
    videoDuration;
    return [Math.floor(startTime/1000), endTime]
}