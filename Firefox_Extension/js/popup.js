$(document).ready(async function() {
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
      browser.tabs.create({url: 'https://github.com/Timeraa/PreMiD'})
    } else window.location.href= $(this).attr("class").split(' ')[0] + ".html";
  }, 350)
}