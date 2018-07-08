const config = require('../config.json')
const constants = require('../util/constants')
const Config = require('electron-config');
const userSettings = new Config({
  name: "userSettings"
});


var togglePresence,
    toggleYouTube,
    toggleYouTubeMusic;

$(document).ready(function() {
  document.getElementById('version').innerHTML = 'V' + config.version
  togglePresence = $(".togglePresence"),
  toggleYouTube = $(".toggleYouTube"),
  toggleYouTubeMusic = $(".toggleYouTubeMusic");

  togglePresence.change(switchPresence);
  //toggleYouTube.change(switchYouTube);
  toggleYouTubeMusic.change(switchYouTubeMusic);

  if (userSettings.get('enabled') == true) togglePresence.prop("checked", true)
  else {
    togglePresence.prop("checked", false)
    //toggleYouTube.prop("checked", false)
    toggleYouTubeMusic.prop("checked", false)
    //toggleYouTube.attr("disabled", "disabled")
    toggleYouTubeMusic.attr("disabled", "disabled")
  }

  if (userSettings.get('youTube') == true) {
    
    //toggleYouTube.prop("checked", true)
    //toggleYouTube.removeAttr("disabled")
  } else toggleYouTube.prop("checked", false)
  
  if (userSettings.get('youTubeMusic') == true) {
    toggleYouTubeMusic.prop("checked", true)
    toggleYouTubeMusic.removeAttr("disabled")
  } else toggleYouTubeMusic.prop("checked", false)
})

function switchPresence() {
  if (userSettings.get('enabled') == true) {
    userSettings.set('enabled', false);
    userSettings.set('youTube', false);
    userSettings.set('youTubeMusic', false);
    toggleYouTube.prop("checked", false)
    toggleYouTube.attr("disabled", "disabled")
    toggleYouTubeMusic.prop("checked", false)
    toggleYouTubeMusic.attr("disabled", "disabled")
  } else {
    userSettings.set('enabled', true);
    //toggleYouTube.removeAttr("disabled")
    toggleYouTubeMusic.removeAttr("disabled")
  }
}

function switchYouTube() {
  if (userSettings.get('youTube') == true) {
    userSettings.set('youTube', false)
    toggleYouTube.prop("checked", false)
  } else {
    userSettings.set('youTube', true)
    toggleYouTube.prop("checked", true)
  }
}

function switchYouTubeMusic() {
  if (userSettings.get('youTubeMusic') == true) {
    userSettings.set('youTubeMusic', false);
    toggleYouTubeMusic.prop("checked", false)
  } else {
    userSettings.set('youTubeMusic', true);
    toggleYouTubeMusic.prop("checked", true)
  }
}