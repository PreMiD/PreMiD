let options = undefined

chrome.runtime.getPlatformInfo(async function(info) {
  if(info.os == "mac")
    $(`
    <tr>
      <td>
        <h5 term="popup.options.titleMenubar" id="pMiDOption"></h5>
      </td>
      <td>
        <div class="switch">
          <label>
            <input type="checkbox" class="toggleTitleMenubar" />
            <span class="lever"></span>
          </label>
        </div>
      </td>
    </tr>`)
    .insertAfter('.enabledToggle')
  titleMenubarToggle = $('.toggleTitleMenubar')
  titleMenubarToggle.change(tMB);
})

$(document).ready(function() {
  chrome.storage.local.get(["presences"], function(data) {
    if(data.presences.length > 0) {
      data.presences.forEach(presence => {
        $(`
        <tr>
          <td>
            <h5 id="pMiDOption">${presence.name}</h5>
          </td>
          <td>
            <div class="switch ${presence.name}">
              <label class="presenceToggle">
                <input type="checkbox" class="${presence.name}" ${presence.enabled ? "checked" : ""} />
                <span class="lever" color="${presence.color}"></span>
              </label>
            </div>
          </td>
        </tr>`).appendTo('.presences')
        if($(`.${presence.name} input`).is(':checked')) {
          $(`.${presence.name} .lever`).attr('style', `background-color: ${presence.color} !important`)
        }
      })
      $('.presenceToggle').click(async function(event) {
        var element = this
        chrome.storage.local.get(["presences"], function(data) {
          data.presences.find(presence => presence.name == $(element).children().get(0).getAttribute("class")).enabled = $(element).children().get(0).checked
          chrome.storage.local.set(data)
        })
        if($(this).children().get(0).checked) {
          $(this).children().get(1).setAttribute("style", `background-color: ${$(this).children().get(1).getAttribute("color")} !important;`)
        } else {
          $(this).children().get(1).setAttribute("style", ``)
        }
      })
    } else {
      $(`<h5 class="noPresences">Keine Presenzen</h5>`).insertBefore('.presenceStore')
    }
  })

  var enabledToggle = $('.togglePresence'),
  mediaControlsToggle = $('.toggleMediaControls'),
  checkForUpdatesToggle = $('.toggleCheckUpdates'),
  systemStartupToggle = $('.toggleSystemStartup'),
  darkThemeToggle = $('.toggleDarkTheme'),
  tabPriorityToggle = $('.toggleTabPriority')
  
  debuggintToggle = $('.debuggingToggle')
  debuggintToggle.change(debugToggle);

  enabledToggle.change(tEnabled);
  mediaControlsToggle.change(tMC);
  checkForUpdatesToggle.change(tCFU);
  systemStartupToggle.change(tSS);
  darkThemeToggle.change(tdT);
  tabPriorityToggle.change(tTP);

  chrome.storage.sync.get(['options'], function(result) {
    options = result.options
    if(result.options != undefined) {
      if(options.darkTheme) $('html').addClass("dark")
      enabledToggle.prop('checked', result.options.enabled)
      if(titleMenubarToggle != undefined)
      titleMenubarToggle.prop('checked', result.options.titleMenubar)
      mediaControlsToggle.prop('checked', result.options.mediaControls)
      checkForUpdatesToggle.prop('checked', result.options.checkForUpdates)
      systemStartupToggle.prop('checked', result.options.systemStartup)
      darkThemeToggle.prop('checked', result.options.darkTheme)
      tabPriorityToggle.prop('checked', result.options.tabPriority)
      debuggintToggle.prop('checked', result.options.debugging)
    }
  })
})

function tEnabled() {
  options.enabled = !options.enabled
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

function tTP() {
  options.tabPriority = !options.tabPriority
  sync()
}

function tdT() {
  options.darkTheme = !options.darkTheme
  if(options.darkTheme) $('html').addClass("dark"); else $('html').removeClass("dark");
  sync()
}

function debugToggle() {
  options.debugging = !options.debugging
  sync()
}

function sync() {
  chrome.storage.sync.set({options: options})
}