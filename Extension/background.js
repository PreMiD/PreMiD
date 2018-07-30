//* Used to send response to app
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

setInterval(sendAlive, 1*5000)