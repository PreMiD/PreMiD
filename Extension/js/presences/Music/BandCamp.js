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
  if(playback) {
    switch (data.mediaKeys) {
      case "pause":
        $('.playbutton').click()
        break
      case "nextTrack":
        $('.nextbutton').click()
        break
      case "previousTrack":
        $('.prevbutton').click()
        break
    }
  }
}

/**
 * Updates the Presence data and sends it back
 * to the background.js for further interaction
 */
async function updateData() {
  playback = $('h2.trackTitle')[0] != undefined


    //* If page has all required propertys
  if(playback) {
    var startTime = Math.floor(Date.now()/1000),
    endTime = startTime -
    getSeconds($('.time_elapsed').get(0).innerHTML) + getSeconds($('.time_total').get(0).innerHTML);

    songTitle = $('.title-section').children().children().get(0).innerHTML
    songAuthors = $('[itemprop=byArtist]').children().get(0).innerHTML
    playbackBoolean = $('.playbutton').hasClass('playing')
    smallImageKey = playbackBoolean ? 'play' : 'pause'
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")

    var data = {
      clientID: '521236293456494592',
      presenceData: {
        details: $('<div/>').html(songTitle).text(),
        state: $('<div/>').html(songAuthors).text(),
        largeImageKey: 'bandcamp',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
        smallImageKey: smallImageKey,
        smallImageText: smallImageText,
      },
      trayTitle: $('<div/>').html(songTitle).text(),
      playback: playbackBoolean,
      service: 'Bandcamp'
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
  const a = string.split(":")

  const seconds = +a[0] * 60 + +a[1]
  return seconds
}
