document.getElementById('version').innerHTML = 'V' + chrome.runtime.getManifest().version
document.getElementById('updatedYTPUpdated').innerHTML = chrome.i18n.getMessage("updatedYTPUpdated")
document.getElementById('updatedWhatsNew').innerHTML = chrome.i18n.getMessage("updatedWhatsNew")

var hasNextChanged = true,
index = 0
while(hasNextChanged) {
  if(chrome.i18n.getMessage("updatedAdded" + index) != "") {
    var item = document.getElementById('updatedWhatsNewList').appendChild(document.createElement('li'))
    item.innerHTML = chrome.i18n.getMessage("updatedAdded" + index)
  } else hasNextChanged = false;
  index++
}

document.getElementById('updatedWhatChanged').innerHTML = chrome.i18n.getMessage("updatedWhatChanged")

var hasNextChanged = true,
index = 0
while(hasNextChanged) {
  if(chrome.i18n.getMessage("updatedChanged" + index) != "") {
    var item = document.getElementById('updatedWhatChangedList').appendChild(document.createElement('li'))
    item.innerHTML = chrome.i18n.getMessage("updatedChanged" + index)
  } else hasNextChanged = false;
  index++
}

document.getElementById('installedSupportMe').innerHTML = chrome.i18n.getMessage("installedSupportMe")