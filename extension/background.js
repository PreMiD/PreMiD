function updatePresence(tabId, changeInfo, tab) {
  if (tab.url) {
    // Create a URL object from the current tab URL
    const url = new URL(tab.url);
    // Parse data
    const data = tab.url.startsWith("https://music.youtube.com/")
    ? { connected: true, service: "ytm", url: tab.url }
    : tab.url.startsWith("https://www.youtube.com/")
    ? { type: "yt", url: tab.url }
    : null;

    if (!data) return;
  
    const settings = {
      async: true,
      crossDomain: true,
      url: "http://localhost:3000/",
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      processData: false,
      data: JSON.stringify(data)
    }
  
    $.ajax(settings)
  }
}

chrome.tabs.onUpdated.addListener(updatePresence);

function sendAlive() {
  $.ajax({
    async: true,
    crossDomain: true,
    url: "http://localhost:3000/",
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    processData: false,
    data: JSON.stringify({
      connected: true
    })
  })
}

setInterval(sendAlive, 1*1000)
