//* Play Pause buttons
var playButton = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope iron-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope iron-icon"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" class="style-scope iron-icon"></path></g></svg>'
var pauseButton = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope iron-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope iron-icon"><path d="M8 5v14l11-7z" class="style-scope iron-icon"></path></g></svg>'

//* Create needed variables
let splitTime,
  songCurrentTime,
  songEndTime,
  songAuthors = [],
  playback = true,
  eventType

//* Register listeners
$('.play-pause-button').click(handlePlayPause)
$('.ytmusic-player').click(handlePlayPause)
//* Start interval
$(document).ready(() => {
  //* Check Play change
  setInterval(checkPlayChange, 250)
  //* Update data and send to application
  setInterval(updateData, 1000)
})

//* Create socket connection to application
var socket = io.connect('http://localhost:3000/');

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

socket.on('error', (err) => console.log(`Error while connecting... ${err}`))

//* When we receive messages from the application
socket.on('mediaKeyHandler', function (data) {
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
        //* Prevent playback from being paused again
        playback = true
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
    if ($(".play-pause-button svg").prop("outerHTML") == playButton) {
      //* Update playback variable
      playback = true
      //* Pause song
      $('.play-pause-button').click()
    }
  }

  //* Set musicRunning variable to true if url has /watch or music title not empty
  if (document.location.pathname.includes("/watch") || $(".title.style-scope.ytmusic-player-bar").html() != "") musicRunning = true; else musicRunning = false;
}

function updateData(playbackChange = false) {
  //* Clear author array
  songAuthors = []

  if ($(".title.style-scope.ytmusic-player-bar").html() != "") {
    //* Get song Time String (2:10 / 3:21)
    //* Split to array ["2:10", "3:21"]
    splitTime = $(".time-info.style-scope.ytmusic-player-bar").html().split(" / ", 2)
    //* Convert to seconds
    songCurrentTime = getSeconds(splitTime[0])
    songEndTime = getSeconds(splitTime[1])

    //* Get all authors
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

    var startTime = Date.now();
    var endTime =
      Math.floor(startTime / 1000) -
      songCurrentTime +
      songEndTime;

    if (playbackChange != false) {
      playbackNew = playbackChange
      eventType = 'playBackChange'
    } else {
      playbackNew = playback ? "playing" : "paused"
      eventType = 'updateData'
    }

    var data = {
      ytm: {
        songTitle: $(".title.style-scope.ytmusic-player-bar").html(),
        songAuthors: songAuthors,
        songCurrentTimeSeconds: songCurrentTime,
        songCurrentTime: startTime,
        songEndTimeSeconds: songEndTime,
        songEndTime: endTime,
        songCover: $(".image.style-scope.ytmusic-player-bar").attr("src"),
        playback: playbackNew
      }
    }
  } else {
    var data = {
      status: "keepAlive"
    }
    eventType = 'updateData'
  }

  if(socket.connected) socket.emit(eventType, data)
}

//* Used to extract seconds from Syntax 
//* 1:39 => 99
function getSeconds(string) {
  const s = string.split(":")

  const seconds = +s[0] * 60 + +s[1]
  return seconds
}
