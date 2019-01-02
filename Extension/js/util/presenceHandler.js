var dataGrabberID,
currPresence

window.addEventListener("PreMiD_RequestExtensionData", async function(data) {
  if(data.detail.strings != undefined) {
    var translations = []
    for(var i = 0; i < Object.keys(data.detail.strings).length; i++) {
      translations.push(getString(Object.values(data.detail.strings)[i]))
    }
    Promise.all(translations)
    .then(completed => {
      for(var i = 0; i < Object.keys(data.detail.strings).length; i++) {
        data.detail.strings[Object.keys(data.detail.strings)[i]] = completed[i]
      }
    })
  }

  data.detail.version = eval(data.detail.version)

  var event = new CustomEvent('PreMiD_ReceiveExtensionData', {detail: data.detail})
  window.dispatchEvent(event);
})

//* Load presence and inject it
$(document).ready(async function() {
  var presences = (await chrome.storage.local.get(['presences'])).presences
  presences.forEach(presence => {
    if(document.location.hostname == presence.url && presence.enabled) {
      if(!dataGrabberID) {
        dataGrabberID = true
        $(`
        <!-- PreMiD PRESENCE HANDLING -->
        <script src="https://cdn.jsdelivr.net/gh/Timeraa/PreMiD@V1.4/Extension/js/util/jquery-3.3.1.min.js"></script>
        <script src="${presence.presence}"></script>
        <!-- PreMiD PRESENCE HANDLING -->
        `).appendTo('body')
      }
    }
  });
})
