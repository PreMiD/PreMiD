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
        $('.jw-icon .jw-icon-inline .jw-button-color .jw-reset .jw-icon-playback').click()
        updateData("playPauseTrack")
        break
    }
  }
}
/*
$(".embed iframe").load(function() {
  console.log($('.embed iframe:first').contents())
})
*/

//! NEEDS TO BE ASYNC & NEEDS TO USE NEW GETSTRING()
/**
 * Update Data and send it to the App
 * @param {String} playbackChange Playback if changed
 */
function updateData(playbackChange = false) {
  var eventType
  videoRunning = $('.cf .inner h1').text() != "" && $('.jw-video.jw-reset')[0] != undefined && !isNaN($('.jw-video.jw-reset')[0].duration) ? true : false
  if(videoRunning) {
    var videoTitle = $('.cf .inner h1').text(),
    videoAuthor = $('.section-box #extras h4 a[rel="category tag"]').text(),
    videoTimeSeconds = Math.floor($('.jw-video.jw-reset')[0].currentTime),
    videoDurationSeconds = Math.floor($('.jw-video.jw-reset')[0].duration),
    videoTimestamps = getTimestamps(videoTimeSeconds, videoDurationSeconds)
    playback = $('.jw-video.jw-reset')[0].paused ? "paused" : "playing"
    
    if (playbackChange) eventType = 'playBackChange'; else eventType = 'updateData';
    
    var playbackBoolean = !$('.jw-video.jw-reset')[0].paused

    var smallImageKey = playbackBoolean ? 'play' : 'pause',
    smallImageText = playbackBoolean ? chrome.i18n.getMessage('playbackPlaying') : chrome.i18n.getMessage('playbackPaused')
    
    if(playbackBoolean) {
      var data = {
        clientID: '517378856500592671',
        presenceData: {
          details: $('<div/>').html(videoTitle).text(),
          state: $('<div/>').html(videoAuthor).text(),
          largeImageKey: 'heg_lg',
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
        service: 'HentaiGasm'
      }
    } else {
      var data = {
        clientID: '517378856500592671',
        presenceData: {
          details: $('<div/>').html(videoTitle).text(),
          state: $('<div/>').html(videoAuthor).text(),
          largeImageKey: 'heg_lg',
          largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
          smallImageKey: smallImageKey,
          smallImageText: smallImageText,
        },
        currentSeconds: videoTimeSeconds,
        durationSeconds: videoDurationSeconds,
        trayTitle: $('<div/>').html(videoTitle).text(),
        playback: playbackBoolean,
        service: 'HentaiGasm'
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
    if($('.jw-video.jw-reset')[0].paused != lastPlayback) {
      togglePlayback()
      lastPlayback = $('.jw-video.jw-reset')[0].paused
    }
  }
}