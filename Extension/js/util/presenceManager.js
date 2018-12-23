$(document).ready(function() {
  window.addEventListener('PreMiD_AddService', addService)
})

async function addService(data) {
  if(data.detail.userID && data.detail.service != undefined) {
    console.log(data.detail.userID, data.detail.service)
  }

  await chrome.storage.local.set(
    {
      presences: [
        {
          userID: "223238938716798978",
          name: "YouTube",
          description: "WOW",
          color: "#da2727",
          url: "www.youtube.com",
          presence: 'https://de.paz.yt/proxy/r/?https://raw.githubusercontent.com/Timeraa/PreMiD/V1.4/presences/YouTube/presence.js',
          enabled: true
        }
      ]
    }
  )
}