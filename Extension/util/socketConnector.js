//* Create socket connection to application
var socket = io.connect('http://localhost:3020/');

//* Log when connected
socket.on('connect', socketConnect)
socket.on('disconnect', socketDisconnect)

function socketConnect() {
  console.log(chrome.runtime.getManifest().name + ': %c' + chrome.i18n.getMessage('connected'), "color: green; font-weight: 700")
  if(sessionStorage['ytpconnected'] == null || sessionStorage['ytpconnected'] == 'false') {
    sessionStorage['ytpconnected'] = 'true'
    insertConnectionInfo(chrome.i18n.getMessage("connected"))
  }
}

function socketDisconnect() {
  console.log(chrome.runtime.getManifest().name + ': %c' + chrome.i18n.getMessage('disconnected'), "color: red; font-weight: 700")
  sessionStorage['ytpconnected'] = 'false'
  insertConnectionInfo(chrome.i18n.getMessage("disconnected"))
}

function insertConnectionInfo(message) {
  $('<div id="ytp-connectinfo"><img draggable="false" src="https://raw.githubusercontent.com/Timeraa/YT-Presence/master/icon.png"><h1>' + chrome.runtime.getManifest().name + '</h1><h2>' + message + '</h2></div>').appendTo('body')
  setTimeout(() => {
    $('#ytp-connectinfo').remove()
  }, 5*1000)
}
