var playback = false,
videoTitle,
videoAuthor,
videoTimestamps,
playbackBoolean,
smallImageKey,
smallImageText,

lastPlaybackState = null,
browsingStamp = Math.floor(Date.now()/1000)

/**
 * Handles Media Key controls
 * @param {data} data Data passed by socketConnector.js
 */
async function handleMediaKeys(data) {
  if(playback) {
    switch (data.mediaKeys) {
      case "pause":
        playbackBoolean ? $('.VideoContainer video')[0].pause() : $('.VideoContainer video')[0].play()
        break
      case "nextTrack":
        if($('.button-nfplayerNextEpisode') != null) $('.button-nfplayerNextEpisode').click()
        break
    }
  }
}

/**
 * Updates the Presence data and sends it back
 * to the background.js for further interaction
 */
async function updateData() {
  
  playback = 
  document.location.pathname.includes("/watch")
  && $('.video-title h4').text() != ""
  && $('.VideoContainer video')[0] != undefined
  && !isNaN($('.VideoContainer video')[0].duration)
  ? true : false
  
  //* Browsing timestamp
  if(lastPlaybackState != playback) {
    lastPlaybackState = playback
    browsingStamp = Math.floor(Date.now()/1000)
  }

  var data = {
    clientID: '499981204045430784',
    presenceData: {
      largeImageKey: 'nflix_lg',
      largeImageText: browser.runtime.getManifest().name + ' V' + browser.runtime.getManifest().version,
      smallImageKey: smallImageKey,
      smallImageText: smallImageText,
    },
    trayTitle: $('<div/>').html(videoTitle).text(),
    playback: playbackBoolean,
    service: 'Netflix'
  }

  //* If page has all required propertys
  if(playback) {
    videoTitle = $('.video-title h4').text()
    videoTimestamps = getTimestamps(Math.floor($('.VideoContainer video')[0].currentTime), Math.floor($('.VideoContainer video')[0].duration))
    playbackBoolean = !$('.VideoContainer video')[0].paused
    smallImageKey = playbackBoolean ? 'play' : 'pause'
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")
    

    if($('.video-title span').length > 0) {
      data.presenceData.details = $('<div/>').html(videoTitle).text()
      data.presenceData.state = $('.video-title span:first').text() +  " " + $('.video-title span:last').text()
    } else {
      data.presenceData.details = await getString("presence.watching")
      data.presenceData.state = $('<div/>').html(videoTitle).text()
    }

    if(playbackBoolean) {
      data.presenceData.startTimestamp = videoTimestamps[0]
      data.presenceData.endTimestamp = videoTimestamps[1]
    } else {
      delete data.presenceData.startTimestamp
      delete data.presenceData.endTimestamp
    }

  } else {
    data.presenceData.details = await getString("presence.browsing")
    delete data.presenceData.state
    delete data.presenceData.smallImageKey
    data.presenceData.startTimestamp = browsingStamp
    //* Prevent presence from being cleared after 1 minute
    data.playback = true
  }
  browser.runtime.sendMessage({presence: data})
}