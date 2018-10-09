//* Declare needed constants
const remote = require('electron').remote
const app = remote.app
const AutoLaunch = require('auto-launch');
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
    $('<tr><td class="noselect">Title menubar</td><td class="right"><label class="switch"><input class="toggleTitleMenubar" type="checkbox"><span class="slider round"></span></label></td></tr>').insertAfter('.ytmToggle')
  }

  togglePresence = $(".togglePresence"),
  toggleYouTube = $(".toggleYouTube"),
  toggleYouTubeMusic = $(".toggleYouTubeMusic");
  toggleTitleMenubar = $(".toggleTitleMenubar");
  toggleAutoLaunch = $(".toggleAutoLaunch");
  toggleAutoUpdate = $(".toggleAutoUpdate");

  togglePresence.change(switchPresence);
  toggleYouTube.change(switchYouTube);
  toggleYouTubeMusic.change(switchYouTubeMusic);
  toggleTitleMenubar.change(switchTitleMenubar);
  toggleAutoLaunch.change(switchAutomaticStartup);
  toggleAutoUpdate.change(switchAutoUpdate);

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
  } else {
    toggleTitleMenubar.prop("checked", false)
  }

  if (userSettings.get('autoLaunch') == true) {
    toggleAutoLaunch.prop("checked", true)
    toggleAutoLaunch.removeAttr("disabled")
  } else toggleAutoLaunch.prop("checked", false)

  if (userSettings.get('autoUpdateCheck') == true) {
    toggleAutoUpdate.prop("checked", true)
    toggleAutoUpdate.removeAttr("disabled")
  } else toggleAutoUpdate.prop("checked", false)
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
    toggleYouTube.removeAttr("disabled")
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

function switchTitleMenubar() {
  if (userSettings.get('titleMenubar') == true) {
    userSettings.set('titleMenubar', false);
    toggleTitleMenubar.prop("checked", false)
  } else {
    userSettings.set('titleMenubar', true);
    toggleTitleMenubar.prop("checked", true)
  }
}

function switchAutomaticStartup() {
  //* Add App to AutoLaunch
  let autoLaunch = new AutoLaunch({
    name: 'YT Presence',
    path: app.getPath('exe'),
    isHidden: true
  });
  
  if (userSettings.get('autoLaunch') == true) {    
    autoLaunch.isEnabled().then((isEnabled) => {
      if(isEnabled) autoLaunch.disable()
    }).catch((err) => {
      console.log("Error while adding App to autostart.")
    })
    
    userSettings.set('autoLaunch', false);
    toggleAutoLaunch.prop("checked", false)
  } else {
    autoLaunch.isEnabled().then((isEnabled) => {
      if(!isEnabled) autoLaunch.enable()
    }).catch((err) => {
      console.log("Error while adding App to autostart.")
    })
    
    userSettings.set('autoLaunch', true);
    toggleAutoLaunch.prop("checked", true)
  }
}

function switchAutoUpdate() {
  if (userSettings.get('autoUpdateCheck') == true) {
    userSettings.set('autoUpdateCheck', false);
    toggleAutoUpdate.prop("checked", false)
  } else {
    userSettings.set('autoUpdateCheck', true);
    toggleAutoUpdate.prop("checked", true)
  }
}