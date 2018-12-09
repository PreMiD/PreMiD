var playback = false,
songTitle,
songAuthors,
videoTimestamps,
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
        playbackBoolean ? $('.video-stream')[0].pause() : $('.video-stream')[0].play()
        break
      case "nextTrack":
        $('.next-button').click()
        break
      case "previousTrack":
        $('.previous-button').click()
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
    $('.ytmusic-player-bar.title').text() != ""
    && $('.video-stream')[0] != undefined
    && !isNaN($('.video-stream')[0].duration)
    ? true : false

  //* If page has all required propertys
  if(playback) {
    songTitle = $('.ytmusic-player-bar.title').text()
    songAuthors = getAuthors()
    videoTimestamps = getTimestamps(Math.floor($('.video-stream')[0].currentTime), Math.floor($('.video-stream')[0].duration))
    playbackBoolean = !$('.video-stream')[0].paused
    smallImageKey = playbackBoolean ? 'play' : 'pause'
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")

    var data = {
      clientID: '463151177836658699',
      presenceData: {
        details: $('<div/>').html(songTitle).text(),
        state: $('<div/>').html(songAuthors).text(),
        largeImageKey: 'ytm_lg',
        largeImageText: browser.runtime.getManifest().name + ' V' + browser.runtime.getManifest().version,
        smallImageKey: smallImageKey,
        smallImageText: smallImageText,
      },
      trayTitle: $('<div/>').html(songTitle).text(),
      playback: playbackBoolean,
      service: 'YouTube Music'
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
 * Get authors of Song
 */
function getAuthors() {
  var songAuthors = [],
  songAuthorsString = ""

  //* Extract authors as array
  $(".byline.ytmusic-player-bar").contents().each(function (index, item) {
    if (item.classList != undefined) {
      if (item.classList.contains("yt-simple-endpoint") == true) {
        songAuthors.push(item.innerHTML)
      }
    }
  })

  //* If no authors found in previous method use this
  if (songAuthors.length == 0 || songAuthors.length == 1) {
    //* Clear old list
    songAuthors = []
    songAuthors.push($(".byline.ytmusic-player-bar").contents().first().text())
  }

  //* Build Song autor string
  songAuthors.forEach((author, index, authors) => {
    if (index == 0)
    songAuthorsString = author;
    else if (index < authors.length - 2)
    songAuthorsString = songAuthorsString + ", " + author;
    else if (index < authors.length - 1) songAuthorsString = songAuthorsString + " and " + author;
    else songAuthorsString = songAuthorsString + " &bull; " + author;
  });

  return songAuthorsString
}