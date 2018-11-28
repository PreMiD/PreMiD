$(document).ready(function() {
  setInterval(function() {
    if(document.location.hostname == "mysembed.net" || document.location.hostname == "www.rapidvideo.com" || document.location.hostname == "fruithosts.net" || document.location.hostname == "vidoza.net" || document.location.hostname == "oload.fun") {
      if($('video.vjs-tech:first').get(0) != undefined && !isNaN($('video.vjs-tech:first').get(0).duration)) {
        chrome.runtime.sendMessage({iframe_video: {currTime: $('video.vjs-tech:first').get(0).currentTime, dur: $('video.vjs-tech:first').get(0).duration, paused: $('video.vjs-tech:first').get(0).paused}}, function(response) {});
      } else if($('video.video-js:first').get(0) != undefined && !isNaN($('video.video-js:first').get(0).duration)) {
        chrome.runtime.sendMessage({iframe_video: {currTime: $('video.video-js:first').get(0).currentTime, dur: $('video.video-js:first').get(0).duration, paused: $('video.video-js:first').get(0).paused}}, function(response) {});
      }
    }
  }, 1000)
})