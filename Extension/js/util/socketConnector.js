//* Allowed Service URLS
var allowedURL = ["www.youtube.com", "music.youtube.com", "twitch.tv", "soundcloud.com", "netflix.com", "kissanime.ac", "kissanime.ru", "jkanime.net", "fimfiction.net", "www.crunchyroll.com", "www.rabb.it", "www.masterani.me", "www.superanimes.site", "www1.9anime.to", "www.google.de", "www.anime4you.one"]

//* If one is included...
if(allowedURL.includes(document.location.host)) {  
  //* Create socket connection to application
  var socket = io.connect('http://localhost:3020/');
  //* Notify when connected
  socket.on('connect', socketConnect)
  //* Notify when disconnected
  socket.on('disconnect', socketDisconnect)
}

//* When socket connected
async function socketConnect() {
  if(sessionStorage['premidConnected'] == null || sessionStorage['premidConnected'] == 'false') {
    sessionStorage['premidConnected'] = 'true'
  }
  $(document).ready(async function() {
    insertConnectionInfo(await getString("connectionInfo.connected"))
  })
  
  console.log(chrome.runtime.getManifest().name + ": %c" + await (await getString("connectionInfo.connected")).replace("%SERVICE%", getService()), "color: #009900;font-weight: bold;")
}

//* When socket disconnected
async function socketDisconnect() {
  sessionStorage['premidConnected'] = 'false'
  insertConnectionInfo(await getString("connectionInfo.disconnected"))

  console.log(chrome.runtime.getManifest().name + ": %c" + await (await getString("connectionInfo.disconnected")).replace("%SERVICE%", getService()), "color: #990000;font-weight: bold;")
}

//* Inject Connection Info HTML
function insertConnectionInfo(message) {
  var service = getService()

  $('<div id="premid-connectinfo"><img draggable="false" src="' + chrome.runtime.getURL('icon.png') + '"><h1>' + chrome.runtime.getManifest().name + '</h1><h2>' + message.replace("%SERVICE%", service) + '</h2></div>').appendTo('body')
  $('#premid-connectinfo h2').width($('#premid-connectinfo h2').textWidth()+60)
  setTimeout(() => {
    $('#premid-connectinfo').remove()
  }, 5*1000)
}

//* Calculate text width in pixels
$.fn.textWidth = function(){
  var html_org = $(this).html();
  var html_calc = '<span>' + html_org + '</span>';
  $(this).html(html_calc);
  var width = $(this).find('span:first').width();
  $(this).html(html_org);
  return width;
};

function getService() {
  switch(document.location.host) {
    case "www.youtube.com":
      return "YouTube"
    case "music.youtube.com":
      return "YouTube Music"
    case "twitch.tv":
      return "Twitch"
    case "soundcloud.com":
      return "SoundCloud"
    case "www.netflix.com":
      return "Netflix"
    case "kissanime.ac" || "kissanime.ru":
      return "KissAnime"
    case "jkanime.net":
      return "JKAnime"
    case "fimfiction.net":
      return "FimFiction"
    case "crunchyroll.com":
      return "Crunchyroll"
    case "www.rabb.it":
      return "Rabbit"
    case "www.masterani.me":
      return "MasterAnime"
    case "www.superanimes.site":
      return "SuperAnimes"
    case "www1.9anime.to":
      return "9Anime"
    case "www.google.de":
      return "Google"
    case "www.anime4you.one":
      return "Anime4You"
    default:
      throw `No service name defined for "${document.location.host}"`
  }
}