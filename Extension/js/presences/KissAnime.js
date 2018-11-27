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
      (($('#player_html5_html5_api')[0] || $('#my_video_1_html5_api')[0])).paused ? (($('#player_html5_html5_api')[0] || $('#my_video_1_html5_api')[0])).play() : (($('#player_html5_html5_api')[0] || $('#my_video_1_html5_api')[0])).pause()
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
  var eventType
  videoRunning = ($('#navsubbar p a').html() || $('.movie_back_link strong').html()) != "" && (($('#player_html5_html5_api')[0] || $('#my_video_1_html5_api')[0])) != undefined && !isNaN((($('#player_html5_html5_api')[0] || $('#my_video_1_html5_api')[0])).duration) ? true : false
  if(videoRunning) {
    var videoTitle = ($('#navsubbar p a').html() || $('.movie_back_link strong').html()).trim().replace(/\s\s+/g, ' '),
    videoEpisode = $('#selectEpisode option:selected').text().trim(),
    videoTimeSeconds = Math.floor((($('#player_html5_html5_api')[0] || $('#my_video_1_html5_api')[0])).currentTime),
    videoDurationSeconds = Math.floor((($('#player_html5_html5_api')[0] || $('#my_video_1_html5_api')[0])).duration),
    videoTimestamps = getTimestamps(videoTimeSeconds, videoDurationSeconds)
    playback = (($('#player_html5_html5_api')[0] || $('#my_video_1_html5_api')[0])).paused ? "paused" : "playing"

    if (playbackChange) eventType = 'playBackChange'; else eventType = 'updateData';

    var playbackBoolean = !(($('#player_html5_html5_api')[0] || $('#my_video_1_html5_api')[0])).paused

    var smallImageKey = playbackBoolean ? 'play' : 'pause',
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")

    if(playbackBoolean) {
      var data = {
        clientID: '505704053238398986',
        presenceData: {
          details: $('<div/>').html(videoTitle).text(),
          state: $('<div/>').html(videoEpisode).text(),
          largeImageKey: 'ka_lg',
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
        service: 'KissAnime'
      }
    } else {
      var data = {
        clientID: '505704053238398986',
        presenceData: {
          details: $('<div/>').html(videoTitle).text(),
          state: $('<div/>').html(videoEpisode).text(),
          largeImageKey: 'ka_lg',
          largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
          smallImageKey: smallImageKey,
          smallImageText: smallImageText,
        },
        currentSeconds: videoTimeSeconds,
        durationSeconds: videoDurationSeconds,
        trayTitle: $('<div/>').html(videoTitle).text(),
        playback: playbackBoolean,
        service: 'KissAnime'
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
    if((($('#player_html5_html5_api')[0] || $('#my_video_1_html5_api')[0])).paused != lastPlayback) {
      togglePlayback()
      lastPlayback = (($('#player_html5_html5_api')[0] || $('#my_video_1_html5_api')[0])).paused
    }
  }
}