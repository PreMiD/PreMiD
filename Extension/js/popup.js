$(document).ready(function() {
  $('.Pname').html(chrome.runtime.getManifest().name)
  $('.Pversion').html('V' + chrome.runtime.getManifest().version)
  $('.Pabout').html(chrome.i18n.getMessage('about'))
  $('.Pfeedback').html(chrome.i18n.getMessage('feedback'))
  $('.Poptions').html(chrome.i18n.getMessage('options'))

  $('#content #panel').each(function() {
    this.addEventListener('click', updateItem)
  })
})

function updateItem() {
  $(this).addClass('open')
  setTimeout(() => {
    if($(this).attr("class").split(' ')[0] == "github") {
      chrome.tabs.create({url: 'https://github.com/Timeraa/PreMiD'})
    } else window.location.href= $(this).attr("class").split(' ')[0] + ".html";
  }, 350)
}