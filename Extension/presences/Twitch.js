let playback = true,
eventType,
playbackNew,
lastURL = null,
startTimeStamp

var lastPlaybackState = true
setInterval(() => {
  if($('.player-video video')[0] != null && $('.player-video video')[0].paused && lastPlaybackState == true) {
    handlePlayPause()
    lastPlaybackState = false;
  }
  if($('.player-video video')[0] != null && !$('.player-video video')[0].paused && lastPlaybackState == false) {
    handlePlayPause()
    lastPlaybackState = true;
  }
}, 500)

//* Create socket connection to application
var socket = io.connect('http://localhost:3020/');

//* Log when connected
socket.on('connect', function () {
  console.log('YT Presence: %cConnected to Application', "color: green; font-weight: 700")
  if(sessionStorage['ytpconnected'] == null || sessionStorage['ytpconnected'] == 'false') {
    $('<div id="ytp-connectinfo"><img draggable="false" src="//github.com/Timeraa/YT-Presence/blob/master/icon.png?raw=true"><h1>YT Presence</h1><h2>Connected</h2></div>').appendTo('body')
    setTimeout(() => {
      $('#ytp-connectinfo').remove()
    }, 5*1000)
    sessionStorage['ytpconnected'] = 'true'
  }
})

socket.on('disconnect', function() {
  sessionStorage['ytpconnected'] = 'false'
  $('<div id="ytp-connectinfo"><img draggable="false" src="//github.com/Timeraa/YT-Presence/blob/master/icon.png?raw=true"><h1>YT Presence</h1><h2>Disconnected</h2></div>').appendTo('body')
  setTimeout(() => {
    $('#ytp-connectinfo').remove()
  }, 5*1000)
})

//* When we receive messages from the application
socket.on('mediaKeyHandler', function (data) {
  //* Check if the data is for YTM & if music is running
  //* Media control buttons
  if ($('.player-video video')[0] != null) {
    //* Switch cases for playback / Clicks corresponding buttons
    switch (data.playback) {
      case "pause":
        $('.player-video video')[0].paused ? $('.qa-pause-play-button').click() : $('.qa-pause-play-button').click()
        updateData("playPauseVideo")
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
  urlForVideo = document.location.href
  let data

  if (playbackChange != false) {
    var eventType = 'playBackChange'
  } else {
    var eventType = 'updateData'
  }

  if($('.player-video video')[0] != undefined && $('.tw-ellipsis.tw-mg-b-05').children().length > 0) {
    if(urlForVideo != lastURL) {
      lastURL = urlForVideo
      startTimeStamp = Date.now()
    }

    data = {
      twitch: {
        url: urlForVideo,
        streamTitle: $('.tw-ellipsis.tw-mg-b-05').children().get(0).innerHTML,
        streamHost: $('.channel-header__user h5').html(),
        watchingSince: startTimeStamp,
        playback: $('.player-video video')[0].paused ? "paused" : "playing"
      }
    }
  } else {
    data = {
      twitch: {
        playback: false
      }
    }
  }
  if (socket.connected) socket.emit(eventType, data)
}