$(document).ready(function() {
  $('.Poptions').html(chrome.i18n.getMessage('options'))
  $('.Pcredits').html(chrome.i18n.getMessage('credits'))

  $('.Pgeneral').html(chrome.i18n.getMessage('general'))

  $('.Penabled').html(chrome.i18n.getMessage('enabled'))
  $('.PtitleMenubar').html(chrome.i18n.getMessage('titleMenubar'))
  $('.PmediaControls').html(chrome.i18n.getMessage('mediaControls'))
  $('.PcheckForUpdates').html(chrome.i18n.getMessage('checkForUpdates'))
  $('.PsystemStartup').html(chrome.i18n.getMessage('systemStartup'))
  $('.Pdarktheme').html(chrome.i18n.getMessage('darkTheme'))

  $('.Ppresences').html(chrome.i18n.getMessage('presences'))

  $('#content #panel').each(function() {
    this.addEventListener('click', updateItem)
  })

  //* Tab physics
  $('.tabs').tabs({
    duration: 250
  });
})
function updateItem() {
  $(this).addClass('open')
  setTimeout(() => {
    if($(this).attr("class").split(' ')[0] == "github") {
      chrome.tabs.create({url: 'https://github.com/Timeraa/PreMiD'})
    } else window.location.href= $(this).attr("class").split(' ')[0] + ".html";
  }, 350)
}