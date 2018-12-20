var dataGrabberID,
currPresence
$(document).ready(async function() {
  await chrome.storage.local.set(
    {
      presences: [
        {
          service: "YouTube",
          url: "www.youtube.com",
          video: {
            iframe: false,
            tag: "$('.videostream')[0]"
          }
        }
      ]
    }
  )

  var presences = (await chrome.storage.local.get(['presences'])).presences
  presences.forEach(presence => {
    if(document.location.hostname == presence.url) {
      if(!dataGrabberID) {
        currPresence = presence
        dataGrabberID = setInterval(dataGrabber, 1*1000);
      }
    }
  });
})


async function dataGrabber() {
  var presence = currPresence
  if(!presence.video.iframe) {
    console.log(eval(presence.video.tag))
  }
}