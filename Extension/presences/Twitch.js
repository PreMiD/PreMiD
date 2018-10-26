let playback = true,
  eventType,
  playbackNew,
  lastURL = null,
  startTimeStamp,
  tabActive = 0,
  dataUpdaterRunning = false,
  dataUpdater;

var lastPlaybackState = true;
setInterval(() => {
  if (
    $(".player-video video")[0] != null &&
    $(".player-video video")[0].paused &&
    lastPlaybackState == true
  ) {
    handlePlayPause();
    lastPlaybackState = false;
  }
  if (
    $(".player-video video")[0] != null &&
    !$(".player-video video")[0].paused &&
    lastPlaybackState == false
  ) {
    handlePlayPause();
    lastPlaybackState = true;
  }
}, 500);

//* When we receive messages from the application
socket.on("mediaKeyHandler", function(data) {
  //* Check if the data is for twitch & if music is running
  //* Media control buttons
  if ($(".player-video video")[0] != null) {
    //* Switch cases for playback / Clicks corresponding buttons
    switch (data.playback) {
      case "pause":
        $(".player-video video")[0].paused
          ? $(".qa-pause-play-button").click()
          : $(".qa-pause-play-button").click();
        updateData("playPauseVideo");
        break;
    }
  }
});

function handlePlayPause() {
  //* Toggle playback variable
  if (playback == true) playback = false;
  else playback = true;
  //* Send status to application
  updateData(playback ? "playing" : "paused");
}

function checkPlayChange() {
  //* Correct playback if out of sync
  if (playback == false) {
    //* Check if playbutton on page matches variable
    if ($(".ytp-play-button svg").prop("outerHTML") == playButton) {
      //* Update playback variable
      playback = true;
      //* Pause song
      $(".ytp-play-button").click();
    }
  }
}

//* Start interval
window.onload = function() {
  //* Tab Priority
  setInterval(() => {
    if (tabActive == 5) {
      dataUpdaterRunning = false;
      clearInterval(dataUpdater);
    }
    if (tabActive >= 9 && dataUpdaterRunning == false) {
      dataUpdaterRunning = true;
      dataUpdater = setInterval(updateData, 1000);
    }
    if (tabActive > 0) tabActive--;
  }, 500);
};

chrome.runtime.onMessage.addListener((message, sender) => {
  if (tabActive <= 9) tabActive += 2;
  if (tabActive == 0) tabActive = 5;
});

//* Create needed variables
let urlForVideo,
  songTime,
  calcDifference = [];

function updateData(playbackChange = false) {
  urlForVideo = document.location.href;

  if (playbackChange != false) {
    var eventType = "playBackChange";
  } else {
    var eventType = "updateData";
  }

  if (
    $(".player-video video")[0] != undefined &&
    $(".tw-ellipsis.tw-mg-b-05").children().length > 0
  ) {
    if (urlForVideo != lastURL) {
      lastURL = urlForVideo;
      startTimeStamp = Math.floor(Date.now() / 1000);
    }

    var playbackBoolean = !$(".player-video video")[0].paused;

    var smallImageKey = playbackBoolean ? "play" : "pause",
      smallImageText = playbackBoolean
        ? chrome.i18n.getMessage("playbackPlaying")
        : chrome.i18n.getMessage("playbackPaused");

    var streamTitle = $(".tw-ellipsis.tw-mg-b-05")
        .children()
        .get(0).innerHTML,
      streamHost = $(".channel-header__user h5").html();
    if (playbackBoolean) {
      var data = {
        clientID: "501021996336021504",
        presenceData: {
          details: $("<div/>")
            .html(streamTitle)
            .text(),
          state: $("<div/>")
            .html(streamHost)
            .text(),
          largeImageKey: "twitch_lg",
          largeImageText:
            chrome.runtime.getManifest().name +
            " V" +
            chrome.runtime.getManifest().version,
          smallImageKey: smallImageKey,
          smallImageText: smallImageText,
          startTimestamp: startTimeStamp
        },
        trayTitle: $("<div/>")
          .html(streamTitle)
          .text(),
        playback: playbackBoolean,
        service: "twitch"
      };
    } else {
      var data = {
        clientID: "501021996336021504",
        presenceData: {
          details: $("<div/>")
            .html(streamTitle)
            .text(),
          state: $("<div/>")
            .html(streamHost)
            .text(),
          largeImageKey: "twitch_lg",
          largeImageText:
            chrome.runtime.getManifest().name +
            " V" +
            chrome.runtime.getManifest().version,
          smallImageKey: smallImageKey,
          smallImageText: smallImageText
        },
        trayTitle: $("<div/>")
          .html(streamTitle)
          .text(),
        playback: playbackBoolean,
        service: "twitch"
      };
    }
  }
  if (socket.connected) socket.emit(eventType, data);
}
