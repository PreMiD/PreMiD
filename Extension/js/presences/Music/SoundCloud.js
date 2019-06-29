var playback = false,
songTitle,
songAuthors,
playbackBoolean,
smallImageKey,
smallImageText

/**
 * Handles Media Key controls
 * @param {data} data Data passed by socketConnector.js
 */
async function handleMediaKeys(data) {
  if($('.playbackSoundBadge__titleContextContainer') != undefined) {
    switch (data.mediaKeys) {
      case "pause":
        $('.playControl').click()
        break
      case "nextTrack":
        $('.skipControl__next').click()
        break
      case "previousTrack":
        $('.skipControl__previous').click()
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
    $('.playbackSoundBadge') != undefined

    
    //* If page has all required propertys
  if(playback) {
    var startTime = Math.floor(Date.now()/1000),
    endTime
    
    if ($('.playbackTimeline__duration').children().get(1).innerHTML[0] === '-') {
      endTime = startTime + getSeconds($('.playbackTimeline__duration').children().get(1).innerHTML)
    } else {
      endTime = startTime - getSeconds($('.playbackTimeline__timePassed').children().get(1).innerHTML) + getSeconds($('.playbackTimeline__duration').children().get(1).innerHTML)
    }
    
    songTitle = $('.playbackSoundBadge__titleLink').children().get(1).innerHTML
    songAuthors = $('.playbackSoundBadge__titleContextContainer').children().get(0).innerHTML
    playbackBoolean = $('.playControl').hasClass('playing')
    smallImageKey = playbackBoolean ? 'play' : 'pause'
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")

    var data = {
      clientID: '501021185887436810',
      presenceData: {
        details: $('<div/>').html(songTitle).text(),
        state: $('<div/>').html(songAuthors).text(),
        largeImageKey: 'scloud_lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        smallImageKey: smallImageKey,
        smallImageText: smallImageText,
      },
      trayTitle: $('<div/>').html(songTitle).text(),
      playback: playbackBoolean,
      service: 'SoundCloud'
    }

    if(playbackBoolean) {
      data.presenceData.startTimestamp = startTime
      data.presenceData.endTimestamp = endTime
    } else {
      delete data.presenceData.startTimestamp
      delete data.presenceData.endTimestamp
    }

    chrome.runtime.sendMessage({presence: data})
  }
}

function getSeconds(string) {
  if (string[0] === '-') {
    string = string.substring(1);
  }

  const a = string.split(":")

  const seconds = string.split(":").length - 1 > 1  ? +a[0] * 3600 + +a[1] * 60 + +a[2] : +a[0] * 60 + +a[1]
  return seconds
}
