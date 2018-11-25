var allowedURL = ["www.youtube.com", "music.youtube.com", "twitch.tv", "soundcloud.com", "netflix.com", "kissanime.ac", "kissanime.ru", "jkanime.net", "fimfiction.net", "www.crunchyroll.com"]

//* Create socket connection to application
if(allowedURL.includes(document.location.host)) {
  var socket = io.connect('http://localhost:3020/');
  
  //* Log when connected
  socket.on('connect', socketConnect)
  socket.on('disconnect', socketDisconnect)
}

function socketConnect() {
  console.log(chrome.runtime.getManifest().name + ': %c' + chrome.i18n.getMessage('connected'), "color: green; font-weight: 700")
  if(sessionStorage['premidConnected'] == null || sessionStorage['premidConnected'] == 'false') {
    sessionStorage['premidConnected'] = 'true'
    insertConnectionInfo(chrome.i18n.getMessage("connected"))
  }
}

function socketDisconnect() {
  console.log(chrome.runtime.getManifest().name + ': %c' + chrome.i18n.getMessage('disconnected'), "color: red; font-weight: 700")
  sessionStorage['premidConnected'] = 'false'
  insertConnectionInfo(chrome.i18n.getMessage("disconnected"))
}

function insertConnectionInfo(message) {
  var service = getService()

  $('<div id="premid-connectinfo"><img draggable="false" src="' + chrome.runtime.getURL('icon.png') + '"><h1>' + chrome.runtime.getManifest().name + '</h1><h2>' + message.replace("%SERVICE%", service) + '</h2></div>').appendTo('body')
  $('#premid-connectinfo h2').width($('#premid-connectinfo h2').textWidth() + 60)
  setTimeout(() => {
    $('#premid-connectinfo').remove()
  }, 5*1000)
}


function getService() {
  switch(document.location.host) {
    case "www.youtube.com":
      return "YouTube"
      break
    case "music.youtube.com":
      return "YouTube Music"
      break
    case "twitch.tv":
      return "Twitch"
      break
    case "soundcloud.com":
      return "SoundCloud"
      break
    case "netflix.com":
      return "Netflix"
      break
    case "kissanime.ac" || "kissanime.ru":
      return "KissAnime"
      break
    case "jkanime.net":
      return "JKAnime"
      break
    case "fimfiction.net":
      return "FimFiction"
      break
    case "crunchyroll.com":
      return "Crunchyroll"
      break
    default:
      return null
      break
  }
}

$.fn.textWidth = function(){
  var html_org = $(this).html();
  var html_calc = '<span>' + html_org + '</span>';
  $(this).html(html_calc);
  var width = $(this).find('span:first').width();
  $(this).html(html_org);
  return width;
};