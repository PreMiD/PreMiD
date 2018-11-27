let videoRunning = false,
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
      videoRunning = false
      clearInterval(dataUpdater)
    }
    if(tabActive >= 9 && dataUpdaterRunning == false) {
      dataUpdaterRunning = true
      dataUpdater = setInterval(updateData, 1000)
    }
    if(tabActive > 0) tabActive--
  }, 500)
})

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
  if (videoRunning) {
    //* Switch cases for playback / Clicks corresponding buttons
    switch (data.playback) {
      case "pause":
        $('.vjs-play-control').click()
        updateData("playPauseTrack")
        break
      case "nextTrack":
        $('.prevnext[data-value="next"]')[0].click()
        //* Send response back to application
        updateData("nextTrack")
        break
      case "previousTrack":
        $('.prevnext[data-value="prev"]')[0].click()
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
function updateData(playbackChange = false) {
  //console.log($('.widget.player .widget-title .title').text())
  console.log($('.vjs-tech').text())
  var videoTitle = $('.widget.player .widget-title .title').text()[0]
  var videoAuthor = $('.widget.player .widget-title .title').text()[1]
  var eventType,
  videoRunning = $('.widget.player .widget-title .title').text() != "" && $('.vjs-tech').get(0) != undefined && !isNaN($('.vjs-tech').get(0).duration) ? true : false
  if(videoRunning) {
    var videoTimeSeconds = Math.floor($('.vjs-tech').get(0).currentTime),
    videoDurationSeconds = Math.floor($('.vjs-tech').get(0).duration),
    videoTimestamps = getTimestamps(videoTimeSeconds, videoDurationSeconds)
    playback = $('.vjs-tech').get(0).paused ? "paused" : "playing"
    
    if (playbackChange) eventType = 'playBackChange'; else eventType = 'updateData';
    
    var playbackBoolean = !$('.vjs-tech').get(0).paused

    var smallImageKey = playbackBoolean ? 'play' : 'pause',
    smallImageText = playbackBoolean ? getString("presence.playback.playing") : getString("presence.playback.paused")
    
    if(playbackBoolean) {
      var data = {
        clientID: '517002121103671297',
        presenceData: {
          details: $('<div/>').html(videoTitle).text(),
          state: $('<div/>').html(videoAuthor).text(),
          largeImageKey: '9e_lg',
          largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
          smallImageKey: smallImageKey,
          smallImageText: smallImageText,
          startTimestamp: videoTimestamps[0],
          endTimestamp: videoTimestamps[1]
        },
        currentSeconds: videoTimeSeconds,
        durationSeconds: videoDurationSeconds,
        trayTitle: $('<div/>').html(videoTitle).text(),
        playback: playbackBoolean,
        service: '9Anime'
      }
    } else {
      var data = {
        clientID: '517002121103671297',
        presenceData: {
          details: $('<div/>').html(videoTitle).text(),
          state: $('<div/>').html(videoAuthor).text(),
          largeImageKey: '9e_lg',
          largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
          smallImageKey: smallImageKey,
          smallImageText: smallImageText,
        },
        currentSeconds: videoTimeSeconds,
        durationSeconds: videoDurationSeconds,
        trayTitle: $('<div/>').html(videoTitle).text(),
        playback: playbackBoolean,
        service: '9Anime'
      }
    }
  }
  console.log(data)
  if(socket.connected) socket.emit(eventType, data)
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
  if(videoRunning) {
    if($('.vjs-tech').get(0).paused != lastPlayback) {
      togglePlayback()
      lastPlayback = $('.vjs-tech').get(0).paused
    }
  }
}