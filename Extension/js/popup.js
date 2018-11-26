$(document).ready(async function() {
  $('.Poptions').html(await getString("popup.tabs.options"))
  $('.Pcredits').html(await getString("popup.tabs.credits"))

  $('.Pgeneral').html(await getString("popup.options.headings.general"))

  $('.Penabled').html(await getString("popup.options.enabled"))
  $('.PtitleMenubar').html(await getString("popup.options.titleMenubar"))
  $('.PmediaControls').html(await getString("popup.options.mediaControls"))
  $('.PcheckForUpdates').html(await getString("popup.options.checkForUpdates"))
  $('.PsystemStartup').html(await getString("popup.options.systemStartup"))
  $('.Pdarktheme').html(await getString("popup.options.darkTheme"))

  $('.Ppresences').html(await getString("popup.options.headings.presences"))

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