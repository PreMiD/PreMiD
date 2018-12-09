var iframe_video = {dur: null, curr: null, paused: true}
chrome.runtime.onMessage.addListener(function(data) {
  if(data.tabPriority)
    if(typeof updateData === "function")
      updateData();

  if(data.mediaKeys)
    if(typeof handleMediaKeys === "function")
      handleMediaKeys(data)

  if(!sessionStorage.getItem("tabPriority")) {
    sessionStorage.setItem("tabPriority", true)
  }
  priorityMessage();

  if(!data.tabPriority) {
    sessionStorage.setItem("tabPriority", false)
  }

  if(data.iframe_video != undefined)
    iframe_video = data.iframe_video
})

function priorityMessage() {
  chrome.storage.sync.get(['options'], async function(result) {
    if(result.options.tabPriority) {
      if(result.options.darkTheme) {
        $(('<div id="premid-connectinfo" class="dark"><img draggable="false" src="' + chrome.runtime.getURL('icon.png') + '"><h1>' + chrome.runtime.getManifest().name + '</h1><h2>' + await getString("tabPriority.prioritized") + '</h2></div>')).appendTo('body')
      } else {
        $(('<div id="premid-connectinfo"><img draggable="false" src="' + chrome.runtime.getURL('icon.png') + '"><h1>' + chrome.runtime.getManifest().name + '</h1><h2>' + await getString("tabPriority.prioritized") + '</h2></div>')).appendTo('body')
      }
  
      $('#premid-connectinfo h2').width(($('#premid-connectinfo h2').textWidth()+60))
      setTimeout(() => {
        $('#premid-connectinfo').remove()
      }, 5*1000)
    }
  })
}

/**
 * Calculate textWidth in PX
 * @returns Number
 */
$.fn.textWidth = function(){
  var html_org = $(this).html();
  var html_calc = '<span>' + html_org + '</span>';
  $(this).html(html_calc);
  var width = $(this).find('span:first').width();
  $(this).html(html_org);
  return width;
};

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