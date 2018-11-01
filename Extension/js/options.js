let options = undefined

$('.Ppreferences').html(chrome.i18n.getMessage('options'))
$('.Pgeneral').html(chrome.i18n.getMessage('general'))
$('.Penabled').html(chrome.i18n.getMessage('enabled'))
$('.PmediaControls').html(chrome.i18n.getMessage('mediaControls'))
$('.PcheckForUpdates').html(chrome.i18n.getMessage('checkForUpdates'))
$('.PsystemStartup').html(chrome.i18n.getMessage('systemStartup'))
$('.Ppresences').html(chrome.i18n.getMessage('presences'))

chrome.runtime.getPlatformInfo(function(info) {
  if(info.os == "mac")
  $('<tr><td>Title Menubar</td><td><label class="switch"><input class="toggleTitleMenubar" type="checkbox"><span class="slider round"></span></label></td></tr>').insertAfter('#tPresence')
  titleMenubarToggle = $('.toggleTitleMenubar')
  titleMenubarToggle.change(tMB);
})

$(document).ready(function() {
  var enabledToggle = $('.togglePresence'),
  youtubeToggle = $('.toggleYouTube'),
  youtubeMusicToggle = $('.toggleYouTubeMusic'),
  twitchToggle = $('.toggleTwitch'),
  soundcloudToggle = $('.toggleSoundCloud'),
  netflixToggle = $('.toggleNetflix'),
  kissanimeToggle = $('.toggleKissAnime'),
  jkanimeToggle = $('.toggleJKAnime')
  mediaControlsToggle = $('.toggleMediaControls')
  checkForUpdatesToggle = $('.toggleCheckUpdates')
  systemStartupToggle = $('.toggleSystemStartup')

  enabledToggle.change(tEnabled);
  youtubeToggle.change(tYT);
  youtubeMusicToggle.change(tYTM);
  twitchToggle.change(tT);
  soundcloudToggle.change(tSC);
  netflixToggle.change(tN);
  kissanimeToggle.change(tKA);
  jkanimeToggle.change(tJKA);
  mediaControlsToggle.change(tMC);
  checkForUpdatesToggle.change(tCFU);
  systemStartupToggle.change(tSS);

  chrome.storage.sync.get(['options'], function(result) {
    options = result.options
    if(result.options == undefined) {
      chrome.storage.sync.set({options: {enabled: true, youtube: true, youtubeMusic: true, twitch: true, soundcloud: true, netflix: true, kissanime: true, jkanime: true, titleMenubar: true, mediaControls: true, checkForUpdates: true, systemStartup: true}})
      enabledToggle.prop('checked', true)
      youtubeToggle.prop('checked', true)
      youtubeMusicToggle.prop('checked', true)
      twitchToggle.prop('checked', true)
      soundcloudToggle.prop('checked', true)
      netflixToggle.prop('checked', true)
      kissanimeToggle.prop('checked', true)
      jkanimeToggle.prop('checked', true)
      if(titleMenubarToggle != undefined)
      titleMenubarToggle.prop('checked', true)
      mediaControlsToggle.prop('checked', true)
      checkForUpdatesToggle.prop('checked', true)
      systemStartupToggle.prop('checked', true)
    } else {
      enabledToggle.prop('checked', result.options.enabled)
      youtubeToggle.prop('checked', result.options.youtube)
      youtubeMusicToggle.prop('checked', result.options.youtubeMusic)
      twitchToggle.prop('checked', result.options.twitch)
      soundcloudToggle.prop('checked', result.options.soundcloud)
      netflixToggle.prop('checked', result.options.netflix)
      kissanimeToggle.prop('checked', result.options.kissanime)
      jkanimeToggle.prop('checked', result.options.jkanime)
      if(titleMenubarToggle != undefined)
      titleMenubarToggle.prop('checked', result.options.titleMenubar)
      mediaControlsToggle.prop('checked', result.options.mediaControls)
      checkForUpdatesToggle.prop('checked', result.options.checkForUpdates)
      systemStartupToggle.prop('checked', result.options.systemStartup)
    }
  })
})

function tEnabled() {
  options.enabled = !options.enabled
  sync()
}

function tYT() {
  options.youtube = !options.youtube
  sync()
}

function tYTM() {
  options.youtubeMusic = !options.youtubeMusic
  sync()
}

function tT() {
  options.twitch = !options.twitch
  sync()
}

function tSC() {
  options.soundcloud = !options.soundcloud
  sync()
}

function tN() {
  options.netflix = !options.netflix
  sync()
}

function tKA() {
  options.kissanime = !options.kissanime
  sync()
}

function tJKA() {
  options.jkanime = !options.jkanime
  sync()
}

function tMB() {
  options.titleMenubar = !options.titleMenubar
  sync()
}

function tMC() {
  options.mediaControls = !options.mediaControls
  sync()
}

function tCFU() {
  options.checkForUpdates = !options.checkForUpdates
  sync()
}

function tSS() {
  options.systemStartup = !options.systemStartup
  sync()
}

function sync() {
  chrome.storage.sync.set({options: options})
}