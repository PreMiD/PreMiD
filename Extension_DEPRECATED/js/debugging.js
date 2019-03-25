$(document).ready(function() {
  //* Debug toggle
  $('#logo').click(element => {
    $("html").toggleClass("debugging")
  })

  //* Debug stuff
  $('.browserLang').text(chrome.i18n.getUILanguage())
  chrome.storage.local.get(['options'], function(result) {
    if(result.options.discordAuthToken != undefined)
      $('.authToken').text(result.options.discordAuthToken)
  })
})