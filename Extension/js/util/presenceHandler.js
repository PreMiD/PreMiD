var dataGrabberID,
currPresence

window.addEventListener("PreMiD_RequestExtensionData", async function(data) {
  PMD_debug("info", "Presence Data Request received.")
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
