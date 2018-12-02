$(document).ready(async function() {
  chrome.storage.sync.get(['options'], function(result) {
    options = result.options
    if(result.options.darkTheme == undefined) {
      $('html').addClass('dark')
    } else if(result.options.darkTheme) $('html').addClass('dark')
    if(options.fimfiction == undefined) $.extend(options, {fimfiction: true})
    if(options.anime4you == undefined) $.extend(options, {anime4you: true})
    if(options.rabbIt == undefined) $.extend(options, {rabbIt: true})
    if(options.hentaigasm == undefined) $.extend(options, {hentaigasm: true})
    if(options.hentaihaven == undefined) $.extend(options, {hentaihaven: true})
    if(options.darkTheme == undefined) $.extend(options, {darkTheme: true})
    chrome.storage.sync.set({options: options})
  })

  $('.PlikeThisProject').html((await getString("tab.installed.likeThisProject")).replace("$1", '<a target="_blank" href="https://github.com/Timeraa/PreMiD">GitHub</a>'))
  
  var hasNextChanged = true,
  index = 0
  while(hasNextChanged) {
    if(await getString("tab.updated.added" + index, false) != null) {
      var item = document.getElementById('WhatsNewList').appendChild(document.createElement('li'))
      item.innerHTML = await getString("tab.updated.added" + index)
    } else hasNextChanged = false;
    index++
  }
  
  hasNextChanged = true
  index = 0
  while(hasNextChanged) {
    if(await getString("tab.updated.changed" + index, false) != null) {
      var item = document.getElementById('WhatChangedList').appendChild(document.createElement('li'))
      item.innerHTML = await getString("tab.updated.changed" + index)
    } else hasNextChanged = false;
    index++
  }
})

$('.gotIt').click(function() { window.close()})