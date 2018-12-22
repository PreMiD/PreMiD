var playback = false,
videoTitle,
videoAuthor,
videoTimestamps,
playbackBoolean,
smallImageKey,
smallImageText,
extensionData = null

window.addEventListener("PreMiD_UpdateData", updateData);
window.addEventListener("PreMiD_MediaKeys", handleMediaKeys);

//* Request needed data
setTimeout(function() {
var event = new CustomEvent('PreMiD_RequestExtensionData', {detail: {strings: {playing: 'presence.playback.playing', paused: 'presence.playback.paused'}, version: "chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version"}})
  window.dispatchEvent(event);
}, 0)

//* Bind event to receive Data
window.addEventListener("PreMiD_ReceiveExtensionData", function(data) {
  extensionData = data.detail
})

/**
 * Handles Media Key controls
 * @param {data} data Data passed by socketConnector.js
 */
async function handleMediaKeys(data) {
  data = data.detail
  console.log(data)
  if(playback) {
    switch (data.mediaKeys) {
      case "pause":
        playbackBoolean ? $('.video-stream')[0].pause() : $('.video-stream')[0].play()
        break
      case "nextTrack":
        $('.ytp-next-button')[0].click()
        break
      case "previousTrack":
        $('.ytp-prev-button')[0].click()
        break
    }
  }
}

/**
 * Updates the Presence data and sends it back
 * to the background.js for further interaction
 */
async function updateData() {
  playback = 
    document.location.pathname.includes("/watch")
    && $('.ytd-video-primary-info-renderer .title').text() != ""
    && $('.video-stream')[0] != undefined
    && !isNaN($('.video-stream')[0].duration)
    ? true : false

  //* If page has all required propertys
  if(playback) {
    videoTitle = $('.ytd-video-primary-info-renderer .title').text()
    videoAuthor = $("#upload-info .style-scope .ytd-video-owner-renderer").contents().first().html()
    videoTimestamps = getTimestamps(Math.floor($('.video-stream')[0].currentTime), Math.floor($('.video-stream')[0].duration))
    playbackBoolean = !$('.video-stream')[0].paused
    smallImageKey = playbackBoolean ? 'play' : 'pause'
    smallImageText = playbackBoolean ? extensionData.strings.playing : extensionData.strings.paused

    var data = {
      clientID: '463097721130188830',
      presenceData: {
        details: $('<div/>').html(videoTitle).text(),
        state: $('<div/>').html(videoAuthor).text(),
        largeImageKey: 'yt_lg',
        largeImageText: extensionData.version,
        smallImageKey: smallImageKey,
        smallImageText: smallImageText,
      },
      trayTitle: $('<div/>').html(videoTitle).text(),
      playback: playbackBoolean,
      service: 'YouTube'
    }

    if(playbackBoolean) {
      data.presenceData.startTimestamp = videoTimestamps[0]
      data.presenceData.endTimestamp = videoTimestamps[1]
    } else {
      delete data.presenceData.startTimestamp
      delete data.presenceData.endTimestamp
    }

    var event = new CustomEvent('PreMiD_UpdatePresence', {detail: data})
    window.dispatchEvent(event);

  }
}

/**
 * Get Timestamps
 * @param {Number} videoTime Song Time seconds
 * @param {Number} videoDuration Song Duration seconds
 */
function getTimestamps(videoTime, videoDuration) {
  var startTime = Date.now();
  var endTime =
    Math.floor(startTime / 1000) -
    videoTime +
    videoDuration;
    return [Math.floor(startTime/1000), endTime]
}