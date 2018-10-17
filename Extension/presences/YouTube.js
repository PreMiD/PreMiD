let playback = true,
eventType,
playbackNew

//* Register listeners
$('.video-stream').click(handlePlayPause)
$('.ytp-play-button').click(handlePlayPause)

//* Try to connect to socket
var socket = io.connect('http://localhost:3020/');

//* Socket connected
socket.on('connect', function () {
  console.log('YT Presence: %c' + chrome.i18n.getMessage('connectedConsole'), "color: green; font-weight: 700")
  if(sessionStorage['ytpconnected'] == null || sessionStorage['ytpconnected'] == 'false') {
    $('<div id="ytp-connectinfo"><img draggable="false" src="//github.com/Timeraa/YT-Presence/blob/master/icon.png?raw=true"><h1>YT Presence</h1><h2>' + chrome.i18n.getMessage("connected") + '</h2></div>').appendTo('body')
    setTimeout(() => $('#ytp-connectinfo').remove(), 5*1000)
    sessionStorage['ytpconnected'] = 'true'
  }
})

//* Socket connection lost
socket.on('disconnect', function() {
  console.log('YT Presence: %c' +  + chrome.i18n.getMessage('disconnectedConsole'), "color: red; font-weight: 700")
  sessionStorage['ytpconnected'] = 'false'
  $('<div id="ytp-connectinfo"><img draggable="false" src="//github.com/Timeraa/YT-Presence/blob/master/icon.png?raw=true"><h1>YT Presence</h1><h2>' + chrome.i18n.getMessage("disconnected") + '</h2></div>').appendTo('body')
  setTimeout(() => $('#ytp-connectinfo').remove(), 5*1000)
})

//* When we receive messages from the application
socket.on('mediaKeyHandler', function (data) {
  //* Check if the data is for YTM & if music is running
  //* Media control buttons
  if (musicRunning) {
    //* Switch cases for playback / Clicks corresponding buttons
    switch (data.playback) {
      case "pause":
        $('.video-stream').click()
        updateData("playPauseVideo")
        break
      case "nextTrack":
        $('.ytp-next-button')[0].click()
        //* Prevent playback from being paused again
        playback = true
        //* Send response back to application
        updateData("nextVideo")
        break
      case "previousTrack":
        $('.ytp-prev-button')[0].click()
        //* Send response back to application
        updateData("previousVideo")
        break
    }
  }
})


function handlePlayPause() {
  //* Toggle playback variable
  if (playback == true) playback = false; else playback = true;
  //* Send status to application
  updateData(playback ? "playing" : "paused")
}

function checkPlayChange() {
  //* Correct playback if out of sync
  if (playback == false) {
    //* Check if playbutton on page matches variable
    if ($('.ytp-play-button svg').prop("outerHTML") == playButton) {
      //* Update playback variable
      playback = true
      //* Pause song
      $('.ytp-play-button').click()
    }
  }

  //* Set musicRunning variable to true if url has /watch or music title not empty
  if (document.location.pathname.includes("/watch") || $(".title.style-scope.ytmusic-player-bar").html() != "") musicRunning = true; else musicRunning = false;
}

//* Start interval
window.onload = function () {
  setInterval(updateData, 1000)
}

//* Create needed variables
let urlForVideo,
  songTime,
  calcDifference = []

function updateData(playbackChange = false) {
  if (document.location.pathname.includes("/watch")) musicRunning = true; else musicRunning = false;
  urlForVideo = document.location.href
  if ($(".ytp-time-current").html() != " " && $('.video-stream')[0] != null) {
    let data

    if (playbackChange != false) {
      var playbackNew = playbackChange
      var eventType = 'playBackChange'
    } else {
      var playbackNew = playback ? "playing" : "paused"
      var eventType = 'updateData'
    }

    var endTime
    if(musicRunning) {
      var startTime = Date.now();
        endTime = Math.floor(startTime / 1000) -
        Math.floor($('.video-stream')[0].currentTime) +
        Math.floor($('.video-stream')[0].duration);
        
      data = {
        yt: {
          url: urlForVideo,
          videoTitle: $(".title.style-scope.ytd-video-primary-info-renderer")
            .children().html(),
          videoAuthor: $("#upload-info .style-scope .ytd-video-owner-renderer")
            .contents()
            .first()
            .html(),
          videoCurrentTimeSeconds: Math.floor($('.video-stream')[0].currentTime),
          videoEndTimeSeconds: Math.floor($('.video-stream')[0].duration),
          videoCurrentTime: startTime,
          videoEndTime: endTime,
          playback: playbackNew
        }
      }
    } else {
      data = {
        yt: {
          playback: false
        }
      }
    }
    if (socket.connected && !isNaN($('.video-stream')[0].duration)) socket.emit(eventType, data)
  }
}

function getSeconds(string) {
  const a = string.split(":")

  const seconds = +a[0] * 60 + +a[1]
  return seconds
}
