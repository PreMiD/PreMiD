const config = require('../config.json')
const Config = require('electron-config')
const userSettings = new Config({
  name: "userSettings"
})


var togglePresence,
    toggleYouTube,
    toggleYouTubeMusic,
    toggleTitleMenubar;

$(() => {
  var os = require('os')
  if (os.platform() == "darwin") {
    $(".options").append($('<tr><td class="noselect">Title menubar</td><td class="right"><label class="switch"><input class="toggleTitleMenubar" type="checkbox"><span class="slider round"></span></label></td></tr>'))
  }

  document.getElementById('version').innerHTML = 'V' + config.version
  togglePresence = $(".togglePresence"),
  toggleYouTube = $(".toggleYouTube"),
  toggleYouTubeMusic = $(".toggleYouTubeMusic");
  toggleTitleMenubar = $(".toggleTitleMenubar");

  togglePresence.change(switchPresence);
  toggleYouTube.change(switchYouTube);
  toggleYouTubeMusic.change(switchYouTubeMusic);
  toggleTitleMenubar.change(switchTitleMenubar);

  if (userSettings.get('enabled') == true) togglePresence.prop("checked", true)
  else {
    togglePresence.prop("checked", false)
    toggleYouTube.prop("checked", false)
    toggleYouTubeMusic.prop("checked", false)
    toggleYouTube.attr("disabled", "disabled")
    toggleYouTubeMusic.attr("disabled", "disabled")
    toggleTitleMenubar.attr("disabled", "disabled")
  }

  if (userSettings.get('youTube') == true) {
    toggleYouTube.prop("checked", true)
    toggleYouTube.removeAttr("disabled")
  } else toggleYouTube.prop("checked", false)
  
  if (userSettings.get('youTubeMusic') == true) {
    toggleYouTubeMusic.prop("checked", true)
    toggleYouTubeMusic.removeAttr("disabled")
  } else toggleYouTubeMusic.prop("checked", false)

  if (userSettings.get('titleMenubar') == true) {
    toggleTitleMenubar.prop("checked", true)
    toggleTitleMenubar.removeAttr("disabled")
  } else toggleTitleMenubar.prop("checked", false)
})

function switchPresence() {
  if (userSettings.get('enabled') == true) {
    userSettings.set('enabled', false);
    userSettings.set('youTube', false);
    userSettings.set('youTubeMusic', false);
    userSettings.set('titleMenubar', false);
    toggleYouTube.prop("checked", false)
    toggleYouTube.attr("disabled", "disabled")
    toggleYouTubeMusic.prop("checked", false)
    toggleYouTubeMusic.attr("disabled", "disabled")
    toggleTitleMenubar.prop("checked", false)
    toggleTitleMenubar.attr("disabled", "disabled")
  } else {
    userSettings.set('enabled', true);
    toggleYouTube.removeAttr("disabled")
    toggleYouTubeMusic.removeAttr("disabled")
    toggleTitleMenubar.removeAttr("disabled")
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

function switchTitleMenubar() {
  var constants = require('../util/constants')
  if (userSettings.get('titleMenubar') == true) {
    userSettings.set('titleMenubar', false);
    toggleTitleMenubar.prop("checked", false)
    constants.menuBar.tray.setTitle("Chrome found!")
  } else {
    userSettings.set('titleMenubar', true);
    toggleTitleMenubar.prop("checked", true)
  }
}