var playback = false,
  videoTitle,
  videoAuthor,
  videoTimestamps,
  playbackBoolean,
  liveBoolean,
  startTimestamp,
  smallImageKey,
  smallImageText;

/**
 * Handles Media Key controls
 * @param {data} data Data passed by socketConnector.js
 */
async function handleMediaKeys(data) {
  if (playback) {
    switch (data.mediaKeys) {
      case "pause":
        playbackBoolean
          ? $(".video-stream")[0].pause()
          : $(".video-stream")[0].play();
        break;
      case "nextTrack":
        $(".ytp-next-button")[0].click();
        break;
      case "previousTrack":
        $(".ytp-prev-button")[0].click();
        break;
    }
  }
}

/**
 * Updates the Presence data and sends it back
 * to the background.js for further interaction
 */
async function updateData() {
  playback =
    document.location.pathname.includes("/watch") &&
    $(".ytd-video-primary-info-renderer .title").text() != "" &&
    $(".video-stream")[0] != undefined &&
    !isNaN($(".video-stream")[0].duration)
      ? true
      : false;

  //* If page has all required propertys
  if (playback) {
    if (!startTimestamp) startTimestamp = Math.floor(Date.now() / 1000);
    videoTitle = $(".ytd-video-primary-info-renderer .title").text();
    videoAuthor = document
      .querySelector("#upload-info .ytd-channel-name")
      .innerText.trim();
    videoTimestamps = getTimestamps(
      Math.floor($(".video-stream")[0].currentTime),
      Math.floor($(".video-stream")[0].duration)
    );
    playbackBoolean = !$(".video-stream")[0].paused;
    liveBoolean = Boolean($(".ytp-live")[0]);
    smallImageKey = playbackBoolean ? "play" : "pause";
    smallImageText = playbackBoolean
      ? await getString("presence.playback.playing")
      : await getString("presence.playback.paused");

    var data = {
      clientID: "463097721130188830",
      presenceData: {
        details: $("<div/>")
          .html(videoTitle)
          .text(),
        state: $("<div/>")
          .html(videoAuthor)
          .text(),
        largeImageKey: "yt_lg",
        largeImageText:
          chrome.runtime.getManifest().name +
          " V" +
          chrome.runtime.getManifest().version,
        smallImageKey: smallImageKey,
        smallImageText: smallImageText
      },
      trayTitle: $("<div/>")
        .html(videoTitle)
        .text(),
      playback: playbackBoolean,
      service: "YouTube"
    };

    if (playbackBoolean) {
      data.presenceData.startTimestamp = liveBoolean
        ? startTimestamp
        : videoTimestamps[0];
      if (!liveBoolean) data.presenceData.endTimestamp = videoTimestamps[1];
    } else {
      delete data.presenceData.startTimestamp;
      delete data.presenceData.endTimestamp;
    }

    chrome.runtime.sendMessage({ presence: data });
  }
}
