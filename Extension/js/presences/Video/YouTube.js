let videoRunning = false,
tabActive = 0,
dataUpdaterRunning = false,
dataUpdater

//* Update data and send to application
$(document).ready(() => {
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
        $('.ytp-play-button').click()
        updateData("playPauseTrack")
        break
      case "nextTrack":
        $('.ytp-next-button')[0].click()
        //* Send response back to application
        updateData("nextTrack")
        break
      case "previousTrack":
        $('.ytp-prev-button')[0].click()
        //* Send response back to application
        updateData("previousTrack")
        break
    }
  }
}


var playbackBoolean
/**
 * Update Data and send it to the App
 * @param {String} playbackChange Playback if changed
 */
async function updateData(playbackChange = false) {
  var eventType
  if(document.location.pathname.includes("/watch"))
    videoRunning = $('.ytd-video-primary-info-renderer .title').text() != "" && $('.video-stream')[0] != undefined && !isNaN($('.video-stream')[0].duration) ? true : false;
  else if(document.location.hash.includes(("#/watch" || "#/watch")))
    videoRunning = $('.player-video-title').text() != "" && $('.video-stream')[0] != undefined && !isNaN($('.video-stream')[0].duration) ? true : false;


  if(videoRunning) {
    if(document.location.pathname.includes("/watch")) {
      var videoTitle = $('.ytd-video-primary-info-renderer .title').text(),
      videoAuthor = $("#upload-info .style-scope .ytd-video-owner-renderer").contents().first().html()
    } else if(document.location.hash.includes(("#/watch" || "#/watch"))) {
      var videoTitle = $('.player-video-title').text(),
      videoAuthor = $(".player-video-details").text().split(" • ")[0]
    }
    
    var videoTimeSeconds = Math.floor($('.video-stream')[0].currentTime),
    videoDurationSeconds = Math.floor($('.video-stream')[0].duration)
    videoTimestamps = getTimestamps(videoTimeSeconds, videoDurationSeconds)
    
    if (playbackChange) eventType = 'playBackChange'; else eventType = 'updateData';
    
    playbackBoolean = !$('.video-stream')[0].paused

    var smallImageKey = playbackBoolean ? 'play' : 'pause',
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")
    
    if(playbackBoolean) {
      var data = {
        clientID: '463097721130188830',
        presenceData: {
          details: $('<div/>').html(videoTitle).text(),
          state: $('<div/>').html(videoAuthor).text(),
          largeImageKey: 'yt_lg',
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
        service: 'YouTube'
      }
    } else {
      var data = {
        clientID: '463097721130188830',
        presenceData: {
          details: $('<div/>').html(videoTitle).text(),
          state: $('<div/>').html(videoAuthor).text(),
          largeImageKey: 'yt_lg',
          largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
          smallImageKey: smallImageKey,
          smallImageText: smallImageText,
        },
        currentSeconds: videoTimeSeconds,
        durationSeconds: videoDurationSeconds,
        trayTitle: $('<div/>').html(videoTitle).text(),
        playback: playbackBoolean,
        service: 'YouTube'
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