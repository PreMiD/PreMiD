let musicRunning = false,
tabActive = 0,
dataUpdaterRunning = false,
dataUpdater

//* Update data and send to application
$(document).ready(() => {
  setInterval(playbackChange, 250)
  //* Tab Priority
  setInterval(() => {
    if(tabActive == 5) {
      dataUpdaterRunning = false
      musicRunning = false
      clearInterval(dataUpdater)
    }
    if(tabActive >= 9 && dataUpdaterRunning == false) {
      dataUpdaterRunning = true
      dataUpdater = setInterval(updateData, 1000)
    }
    if(tabActive > 0) tabActive--
  }, 500)
})


//* Tab Priority
chrome.runtime.onMessage.addListener(((message, sender) => {
  if(tabActive <= 9) tabActive += 2
  if(tabActive == 0) tabActive = 5
}))

//* Handle Media Keys from sent by application
socket.on('mediaKeyHandler', handleMediaKeys)

/**
 * Handles Media Keys for easy media control
 * @param {Object} data Data received from socket
 */
function handleMediaKeys(data) {
  //* Check if the data is for YTM & if music is running
  //* Media control buttons
  if (musicRunning) {
    //* Switch cases for playback / Clicks corresponding buttons
    switch (data.playback) {
      case "pause":
        $('.play-pause-button').click()
        updateData("playPauseTrack")
        break
      case "nextTrack":
        $('.next-button').click()
        //* Send response back to application
        updateData("nextTrack")
        break
      case "previousTrack":
        $('.previous-button').click()
        //* Send response back to application
        updateData("previousTrack")
        break
    }
  }
}

/**
 * Update Data and send it to the App
 * @param {String} playbackChange Playback if changed
 */
async function updateData(playbackChange = false) {
  var eventType
  musicRunning = $(".title.style-scope.ytmusic-player-bar").html() != "" && $('.video-stream')[0] != undefined && !isNaN($('.video-stream')[0].duration) ? true : false
  if(musicRunning) {
    var songTitle = $(".title.style-scope.ytmusic-player-bar").html(),
    songAuthors = getAuthors(),
    songTimeSeconds = Math.floor($('.video-stream')[0].currentTime),
    songDurationSeconds = Math.floor($('.video-stream')[0].duration),
    songTimestamps = getTimestamps(songTimeSeconds, songDurationSeconds)
    playback = $('.video-stream')[0].paused ? "paused" : "playing",
    songAuthorsString = null;

    if (playbackChange) eventType = 'playBackChange'; else eventType = 'updateData';

    songAuthors.forEach((author, index, authors) => {
      if (index == 0)
      songAuthorsString = author;
      else if (index < authors.length - 2)
      songAuthorsString = songAuthorsString + ", " + author;
      else if (index < authors.length - 1) songAuthorsString = songAuthorsString + " and " + author;
      else songAuthorsString = songAuthorsString + " &bull; " + author;
    });

    var playbackBoolean = !$('.video-stream')[0].paused

    var smallImageKey = playbackBoolean ? 'play' : 'pause',
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")

    if(playbackBoolean) {
      var data = {
          clientID: '463151177836658699',
          presenceData: {
            details: $('<div/>').html(songTitle).text(),
            state: $('<div/>').html(songAuthorsString).text(),
            largeImageKey: 'ytm_lg',
            largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
            smallImageKey: smallImageKey,
            smallImageText: smallImageText,
            startTimestamp: songTimestamps[0],
            endTimestamp: songTimestamps[1]
          },
          currentSeconds: songTimeSeconds,
          durationSeconds: songDurationSeconds,
          trayTitle: $('<div/>').html(songTitle).text(),
          playback: playbackBoolean,
          service: 'YouTube Music'
        }
      } else {
        var data = {
          clientID: '463151177836658699',
          presenceData: {
            details: $('<div/>').html(songTitle).text(),
            state: $('<div/>').html(songAuthorsString).text(),
            largeImageKey: 'ytm_lg',
            largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
            smallImageKey: smallImageKey,
            smallImageText: smallImageText
          },
          currentSeconds: songTimeSeconds,
          durationSeconds: songDurationSeconds,
          trayTitle: $('<div/>').html(songTitle).text(),
          playback: playbackBoolean,
          service: 'YouTube Music'
        }
      }
    }

  //* If socket connection, send data
  if(socket.connected) socket.emit(eventType, data)
}

/**
 * Get authors of Song
 */
function getAuthors() {
  var songAuthors = []
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
  return songAuthors
}

/**
 * Get Timestamps
 * @param {Number} songTime Song Time
 * @param {Number} songDuration Song Duration
 */
function getTimestamps(songTime, songDuration) {
  var startTime = Date.now();
  var endTime =
    Math.floor(startTime / 1000) -
    songTime +
    songDuration;
    return [Math.floor(startTime/1000), endTime]
}

/**
 * Toggles playback
 */
function togglePlayback() {
  //* Toggle playback variable
  playback = !playback
  //* Send status to application
  updateData(playback ? "playing" : "paused")
}

var lastPlayback = false
function playbackChange() {
  if(musicRunning) {
    if($('.video-stream')[0].paused != lastPlayback) {
      togglePlayback()
      lastPlayback = $('.video-stream')[0].paused
    }
  }
}