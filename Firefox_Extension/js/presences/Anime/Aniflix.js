var playback = false,
videoTitle,
videoAuthor,
videoTimestamps,
playbackBoolean,
smallImageKey,
smallImageText

/**
 * Updates the Presence data and sends it back
 * to the background.js for further interaction
 */
async function updateData() {

  playback = 
    document.location.pathname.includes("/stream/")
    && iframe_video != null
    && iframe_video.dur != null
    ? true : false


  //* If page has all required propertys
  if(playback) {
    if($('.entry-title').html().match(new RegExp(" Der Film "), "") != null) {
      videoTitle = $('.entry-title').html().replace(new RegExp(" Der Film .*"), "")
      videoAuthor = $('.entry-title').html().match(new RegExp("Der Film .*"), "")
    } else if($('.entry-title').html().match(new RegExp(" OVA "), "") != null) {
      videoTitle = $('.entry-title').html().replace(new RegExp(" OVA .*"), "")
      videoAuthor = $('.entry-title').html().match(new RegExp("OVA .*"), "");
    } else if($('.entry-title').html().match(new RegExp(" Folge [0-9]*"), "") != " Folge ") {
      videoTitle = $('.entry-title').html().replace(new RegExp(" Folge [0-9]* .*"), "")
      videoAuthor = $('.entry-title').html().match(new RegExp(" Folge [0-9]* .*"), "")
    } else if($('.entry-title').html().match(new RegExp(" Spezial Folge"), "") != null) {
      videoTitle = $('.entry-title').html().replace(new RegExp(" Spezial Folge .*"), "")
      videoAuthor = $('.entry-title').html().match(new RegExp(" Spezial Folge .*"), "")
    } else if($('.entry-title').html().match(new RegExp(" Folge "), "") != null) {
      videoTitle = $('.entry-title').html().replace(new RegExp(" Folge .*"), "")
      videoAuthor = $('.entry-title').html().match(new RegExp(" Folge .*"), "")
    }

    videoTimestamps = getTimestamps(Math.floor(iframe_video.curr), Math.floor(iframe_video.dur))
    playbackBoolean = !iframe_video.paused
    smallImageKey = playbackBoolean ? 'play' : 'pause'
    smallImageText = playbackBoolean ? await getString("presence.playback.playing") : await getString("presence.playback.paused")

    var data = {
      clientID: '521104874738417664',
      presenceData: {
        details: $('<div/>').html(videoTitle).text(),
        state: $('<div/>').html(videoAuthor).text(),
        largeImageKey: 'aniflix_lg',
        largeImageText: browser.runtime.getManifest().name + ' V' + browser.runtime.getManifest().version,
        smallImageKey: smallImageKey,
        smallImageText: smallImageText,
      },
      trayTitle: $('<div/>').html(videoTitle).text(),
      playback: playbackBoolean,
      service: 'Aniflix'
    }

    if(playbackBoolean) {
      data.presenceData.startTimestamp = videoTimestamps[0]
      data.presenceData.endTimestamp = videoTimestamps[1]
    } else {
      delete data.presenceData.startTimestamp
      delete data.presenceData.endTimestamp
    }

    browser.runtime.sendMessage({presence: data})
  }
}