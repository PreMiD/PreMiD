$(document).ready(async function() {
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