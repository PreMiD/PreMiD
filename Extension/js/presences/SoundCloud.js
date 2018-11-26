
let playback = true,
eventType,
playbackNew,
tabActive = 0,
dataUpdaterRunning = false,
dataUpdater

var lastPlaybackState = true
setInterval(() => {
  if($('.playControl').hasClass('playing') && lastPlaybackState == true) {
    handlePlayPause()
    lastPlaybackState = false;
  }
  if(!$('.playControl').hasClass('playing') && lastPlaybackState == false) {
    handlePlayPause()
    lastPlaybackState = true;
  }
}, 500)

//* When we receive messages from the application
socket.on('mediaKeyHandler', function (data) {
  //* Check if the data is for YTM & if music is running
  //* Media control buttons
  if ($('.playControl') != undefined) {
    //* Switch cases for playback / Clicks corresponding buttons
    switch (data.playback) {
      case "pause":
        $('.playControl').click()
        updateData("playPauseVideo")
        break
      case "nextTrack":
        $('.skipControl__next').click()
        //* Prevent playback from being paused again
        playback = true
        //* Send response back to application
        updateData("nextVideo")
        break
      case "previousTrack":
        $('.skipControl__previous').click()
        //* Prevent playback from being paused again
        playback = true
        //* Send response back to application
        updateData("nextVideo")
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
  //* Tab Priority
  setInterval(() => {
    if(tabActive == 5) {
      dataUpdaterRunning = false
      clearInterval(dataUpdater)
    }
    if(tabActive >= 9 && dataUpdaterRunning == false) {
      dataUpdaterRunning = true
      dataUpdater = setInterval(updateData, 1000)
    }
    if(tabActive > 0) tabActive--
  }, 500)
}

chrome.runtime.onMessage.addListener(((message, sender) => {
  if(tabActive <= 9) tabActive += 2
  if(tabActive == 0) tabActive = 5
}))

//* Create needed variables
let urlForVideo,
  songTime,
  calcDifference = []

function updateData(playbackChange = false) {
  urlForVideo = document.location.href
  if ($(".time-remaining__time").html() != "") {
    let data

    if (playbackChange != false) {
      var eventType = 'playBackChange'
    } else {
      var eventType = 'updateData'
    }

    var endTime
    if($('.playbackSoundBadge__titleContextContainer') != undefined) {
      var startTime = Math.floor(Date.now()/1000);
        endTime = startTime -
        getSeconds($('.playbackTimeline__timePassed').children().get(1).innerHTML) + getSeconds($('.playbackTimeline__duration').children().get(1).innerHTML);

        var playbackBoolean = $('.playControl').hasClass('playing')

        var smallImageKey = playbackBoolean ? 'play' : 'pause',
        smallImageText = playbackBoolean ? getString("presence.playback.playing") : getString("presence.playback.paused")
    
    
        var songTitle = $('.playbackSoundBadge__titleLink').children().get(1).innerHTML,
        songAuthorsString = $('.playbackSoundBadge__titleContextContainer').children().get(0).innerHTML;
        if(playbackBoolean) {
          data = {
              clientID: '501021185887436810',
              presenceData: {
                details: $('<div/>').html(songTitle).text(),
                state: $('<div/>').html(songAuthorsString).text(),
                largeImageKey: 'scloud_lg',
                largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
                smallImageKey: smallImageKey,
                smallImageText: smallImageText,
                startTimestamp: startTime,
                endTimestamp: endTime
              },
              currentSeconds: getSeconds($('.playbackTimeline__timePassed').children().get(1).innerHTML),
              durationSeconds: getSeconds($('.playbackTimeline__duration').children().get(1).innerHTML),
              trayTitle: $('<div/>').html(songTitle).text(),
              playback: playbackBoolean,
              service: 'SoundCloud'
            }
          } else {
            data = {
              clientID: '501021185887436810',
              presenceData: {
                details: $('<div/>').html(songTitle).text(),
                state: $('<div/>').html(songAuthorsString).text(),
                largeImageKey: 'scloud_lg',
                largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
                smallImageKey: smallImageKey,
                smallImageText: smallImageText
              },
              currentSeconds: getSeconds($('.playbackTimeline__timePassed').children().get(1).innerHTML),
              durationSeconds: getSeconds($('.playbackTimeline__duration').children().get(1).innerHTML),
              trayTitle: $('<div/>').html(songTitle).text(),
              playback: playbackBoolean,
              service: 'SoundCloud'
            }
          }

      /*data = {
        scloud: {
          url: urlForVideo,
          songTitle: $('.playbackSoundBadge__titleLink').children().get(1).innerHTML,
          songAuthor: $('.playbackSoundBadge__titleContextContainer').children().get(0).innerHTML,
          songCurrentTimeSeconds: getSeconds($('.playbackTimeline__timePassed').children().get(1).innerHTML),
          songEndTimeSeconds: getSeconds($('.playbackTimeline__duration').children().get(1).innerHTML),
          songCurrentTime: startTime,
          songEndTime: endTime,
          playback: $('.playControl').hasClass('playing') ? "playing" : "paused"
        }
      } */
    }
    if (socket.connected) socket.emit(eventType, data)
  }
}

function getSeconds(string) {
  const a = string.split(":")

  const seconds = +a[0] * 60 + +a[1]
  return seconds
}