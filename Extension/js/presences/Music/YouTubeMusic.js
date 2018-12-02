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

//* default YTM data
var data = {
  clientID: '463151177836658699',
  presenceData: {
    largeImageKey: 'ytm_lg',
    largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
  },
  playback: false,
  service: 'YouTube Music'
}

/**
 * Update Data and send it to the App
 * @param {String} playbackChange Playback if changed
 */
async function updateData(playbackChange = false) {
  var eventType
  musicRunning = $(".title.style-scope.ytmusic-player-bar").html() != ""
    && $('.video-stream')[0] != undefined
    && !isNaN($('.video-stream')[0].duration)
      ? true : false

  if(musicRunning) {
    //* Update data
    var songTitle = $(".title.style-scope.ytmusic-player-bar").html(),
    videoStream = $('.video-stream')[0],
    songTimeSeconds = Math.floor(videoStream.currentTime),
    songDurationSeconds = Math.floor(videoStream.duration),
    songTimestamps = getTimestamps(songTimeSeconds, songDurationSeconds)
    playback = videoStream.paused ? "paused" : "playing",
    songAuthorsString = getAuthors();

    if (playbackChange) eventType = 'playBackChange'; else eventType = 'updateData';

    var playbackBoolean = !videoStream.paused

    var smallImageKey = playbackBoolean ? 'play' : 'pause',
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")

    //* Update dynamic data
    data.presenceData.details = $('<div/>').html(songTitle).text()
    data.presenceData.state = $('<div/>').html(songAuthorsString).text()
    data.presenceData.smallImageKey = smallImageKey
    data.presenceData.smallImageText = smallImageText
    data.trayTitle = $('<div/>').html(songTitle).text()
    data.playback = playbackBoolean
    
    //* If playing back show timestamps
    if(playbackBoolean) {
        data.presenceData.startTimestamp = songTimestamps[0]
        data.presenceData.endTimestamp = songTimestamps[1]
      } else {
        delete data.presenceData.startTimestamp
        delete data.presenceData.endTimestamp
      }
    }

  //* If socket connection, send data
  if(socket.connected) socket.emit(eventType, data)
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