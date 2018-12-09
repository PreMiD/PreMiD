$(document).ready(function() {
  setInterval(function() {
    if(document.location.hostname == "flex.aniflex.org" 
      || document.location.hostname == "www.mp4upload.com" 
      || document.location.hostname == "www.aniseason.tv" 
      || document.location.hostname == "www.mp4upload.com" 
      || document.location.hostname == "www.ani-stream.com" 
      || document.location.hostname == "openload.co" 
      || document.location.hostname == "mysembed.net" 
      || document.location.hostname == "www.rapidvideo.com" 
      || document.location.hostname == "fruithosts.net" 
      || document.location.hostname == "vidoza.net" 
      || document.location.hostname == "oload.fun" 
      || document.location.hostname == "streamango.com" 
      || document.location.hostname == "openload.co") {
      if($('video.jwplayer:first').get(0) != undefined && !isNaN($('video.jwplayer:first').get(0).duration)) {
        browser.runtime.sendMessage({iframe_video: {curr: $('video.jwplayer:first').get(0).currentTime, dur: $('video.jwplayer:first').get(0).duration, paused: $('video.vjs-tech:first').get(0).paused}}, function(response) {});
      } else if($('video.vjs-tech:first').get(0) != undefined && !isNaN($('video.vjs-tech:first').get(0).duration)) {
        browser.runtime.sendMessage({iframe_video: {curr: $('video.vjs-tech:first').get(0).currentTime, dur: $('video.vjs-tech:first').get(0).duration, paused: $('video.vjs-tech:first').get(0).paused}}, function(response) {});
      } else if($('video.jw-video:first').get(0) != undefined && !isNaN($('video.jw-video:first').get(0).duration)) {
        browser.runtime.sendMessage({iframe_video: {curr: $('video.jw-video:first').get(0).currentTime, dur: $('video.jw-video:first').get(0).duration, paused: $('video.jw-video:first').get(0).paused}});
      } else if($('video.video-js:first').get(0) != undefined && !isNaN($('video.video-js:first').get(0).duration)) {
        browser.runtime.sendMessage({iframe_video: {currTime: $('video.video-js:first').get(0).currentTime, dur: $('video.video-js:first').get(0).duration, paused: $('video.video-js:first').get(0).paused}}, function(response) {});
      }
    }
  }, 1000)
})