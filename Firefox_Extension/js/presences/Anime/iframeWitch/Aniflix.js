$(document).ready(function() {
  setInterval(function() {
    if(document.location.hostname == "flex.aniflex.org" || document.location.hostname == "www.mp4upload.com" || document.location.hostname == "www.aniseason.tv" || document.location.hostname == "www.mp4upload.com" || document.location.hostname == "www.ani-stream.com" || document.location.hostname == "openload.co") {
      if($('video.jwplayer:first').get(0) != undefined && !isNaN($('video.jwplayer:first').get(0).duration)) {
        chrome.runtime.sendMessage({iframe_video: {curr: $('video.jwplayer:first').get(0).currentTime, dur: $('video.jwplayer:first').get(0).duration, paused: $('video.vjs-tech:first').get(0).paused}}, function(response) {});
      } else if($('video.vjs-tech:first').get(0) != undefined && !isNaN($('video.vjs-tech:first').get(0).duration)) {
        chrome.runtime.sendMessage({iframe_video: {curr: $('video.vjs-tech:first').get(0).currentTime, dur: $('video.vjs-tech:first').get(0).duration, paused: $('video.vjs-tech:first').get(0).paused}}, function(response) {});
      } else if($('video.jw-video:first').get(0) != undefined && !isNaN($('video.jw-video:first').get(0).duration)) {
        browser.runtime.sendMessage({iframe_video: {curr: $('video.jw-video:first').get(0).currentTime, dur: $('video.jw-video:first').get(0).duration, paused: $('video.jw-video:first').get(0).paused}});
      }
    }
  }, 1000)
})