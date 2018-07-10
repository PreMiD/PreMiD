function updatePresence(tabId, changeInfo, tab) {
  if (tab.url) {
    // Create a URL object from the current tab URL
    const url = new URL(tab.url);
    // Parse data
    if (tab.url.startsWith("https://music.youtube.com/")) {
      const data = {
        connected: true,
        service: "ytm",
        url: tab.url
      }
    } else {
      const data = {
        connected: true,
        service: "NaN"
      }
    }

    if (!data) return;
  
    $.ajax({
      async: true,
      crossDomain: true,
      url: "http://localhost:3000/",
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      processData: false,
      data: JSON.stringify(data),
      error: function(jqXHR, textStatus, errorThrown) {}
    })
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
      connected: true,
      service: "keepAlive"
    }),
    error: function(jqXHR, textStatus, errorThrown) {}
  })
}

setInterval(sendAlive, 1*1000)
