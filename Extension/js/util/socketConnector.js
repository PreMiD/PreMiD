<<<<<<< HEAD

var allowedURL = ["www.youtube.com", "music.youtube.com", "twitch.tv", "soundcloud.com", "netflix.com", "kissanime.ac", "kissanime.ru", "jkanime.net", "fimfiction.net", "www.crunchyroll.com", "www.rabb.it", "www.masterani.me", "www.youtube.com/tv", "www.superanimes.site", "www1.9anime.to"]
=======
var allowedURL = ["www.youtube.com", "music.youtube.com", "twitch.tv", "soundcloud.com", "www.netflix.com", "kissanime.ac", "kissanime.ru", "jkanime.net", "fimfiction.net", "www.crunchyroll.com", "www.masterani.me", "www.superanimes.site"]
>>>>>>> b1ba8e4d6e00b87e5b59a08ba60e59b731ee0923

if(allowedURL.includes(document.location.host)) {  
  //* Create socket connection to application
  var socket = io.connect('http://localhost:3020/');
  //* Log when connected
  socket.on('connect', socketConnect)
  socket.on('disconnect', socketDisconnect)
}

async function socketConnect() {
  if(sessionStorage['premidConnected'] == null || sessionStorage['premidConnected'] == 'false') {
    sessionStorage['premidConnected'] = 'true'
    $(document).ready(async function() {
      insertConnectionInfo(await getString("connectionInfo.connected"))
    })
  }

}

async function socketDisconnect() {
  sessionStorage['premidConnected'] = 'false'
  insertConnectionInfo(await getString("connectionInfo.disconnected"))
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
    case "www.netflix.com":
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
    case "www.rabb.it":
      return "Rabbit"
      break
    case "www.masterani.me":
      return "MasterAnime"
      break
    case "www.superanimes.site":
      return "SuperAnimes"
      break
    case "www1.9anime.to":
      return "9Anime"
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