var iframe_video = {dur: null, curr: null, paused: true}
chrome.runtime.onMessage.addListener(function(data) {
  if(data.tabPriority) {
    var event = new CustomEvent('PreMiD_UpdateData')
    window.dispatchEvent(event);
  }

  if(data.mediaKeys) {
    var event1 = new CustomEvent('PreMiD_MediaKeys', {detail: data.mediaKeys})
    window.dispatchEvent(event1);
  }

  if(!sessionStorage.getItem("tabPriority")) {
    sessionStorage.setItem("tabPriority", true)
    priorityMessage();
  }

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
  
      $('#premid-connectinfo h2').width(textWidth($('#premid-connectinfo h2'))+60)
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
function textWidth(element){
  var html_org = $(element).html();
  var html_calc = '<span>' + html_org + '</span>';
  $(element).html(html_calc);
  var width = $(element).find('span:first').width();
  $(element).html(html_org);
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

window.addEventListener("PreMiD_UpdatePresence", function(data) {
  chrome.runtime.sendMessage({presence: data.detail})
});
