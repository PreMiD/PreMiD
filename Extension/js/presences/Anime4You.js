let videoRunning = false,
tabActive = 0,
dataUpdaterRunning = false,
dataUpdater

var videoDuration = null,
videoCurrentTime = null,
videoPlayback = false

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
  if(message.iframe_video) {
    videoCurrentTime = message.iframe_video.currTime
    videoDuration = message.iframe_video.dur
    videoPlayback = message.iframe_video.paused
  }
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
      videoPlayback ? $('.server-box iframe:first').contents().find('video:first')[0].play() : $('.server-box iframe:first').contents().find('video:first')[0].pause()
        updateData("playPauseTrack")
        break
    }
  }
}

/**
 * Update Data and send it to the App
 * @param {String} playbackChange Playback if changed
 */
async function updateData(playbackChange = false) {
  //console.log($('.embed-responsive iframe')[0].contentWindow.jQuery('title'))
  var eventType,
  videoRunning = $('.titleshow h1').text().trim() != "" && videoDuration != null ? true : false
  if(videoRunning) {
    var videoTitle = $('.titleshow h1').text().trim(),
    videoEpisode = await getString("presence.episode") + " " + $('.episoden a.active').text(),
    videoTimeSeconds = Math.floor(videoCurrentTime),
    videoDurationSeconds = Math.floor(videoDuration),
    videoTimestamps = getTimestamps(videoTimeSeconds, videoDurationSeconds)
    playback = videoPlayback ? "paused" : "playing"

    if (playbackChange) eventType = 'playBackChange'; else eventType = 'updateData';

    var playbackBoolean = !videoPlayback

    var smallImageKey = playbackBoolean ? 'play' : 'pause',
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")

    if(playbackBoolean) {
      var data = {
        clientID: '517148876273090577',
        presenceData: {
          details: $('<div/>').html(videoTitle).text(),
          state: $('<div/>').html(videoEpisode).text(),
          largeImageKey: 'a4y_lg',
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
        service: 'JKAnime'
      }
    } else {
      var data = {
        clientID: '517148876273090577',
        presenceData: {
          details: $('<div/>').html(videoTitle).text(),
          state: $('<div/>').html(videoEpisode).text(),
          largeImageKey: 'a4y_lg',
          largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
          smallImageKey: smallImageKey,
          smallImageText: smallImageText,
        },
        currentSeconds: videoTimeSeconds,
        durationSeconds: videoDurationSeconds,
        trayTitle: $('<div/>').html(videoTitle).text(),
        playback: playbackBoolean,
        service: 'JKAnime'
      }
    }
  }
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
    if(videoPlayback != lastPlayback) {
      togglePlayback()
      lastPlayback = videoPlayback
    }
  }
}