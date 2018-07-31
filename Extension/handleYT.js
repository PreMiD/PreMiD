//* Start interval
window.onload = function() {
  setInterval(updateData, 1000)
}

//* Create needed variables
let urlForVideo,
  songTime,
  calcDifference = []

function updateData() {
  if (document.location.href.includes("youtube"))
    urlForVideo = document.location.href
  if ($(".ytp-time-current").html() != " ") {
    const data = {
      connected: true,
      service: "yt",
      url: urlForVideo,
      currentSongTitle: $(".style-scope.ytd-video-primary-info-renderer")
        .children()
        .eq(2)
        .contents()
        .first()
        .html(),
      currentSongAuthor: $(
        "#upload-info .style-scope .ytd-video-owner-renderer"
      )
        .contents()
        .first()
        .html(),
      currentSongStartTime: getSeconds($(".ytp-time-current").html()),
      currentSongEndTime: getSeconds($(".ytp-time-duration").html()),
      currentSongCover: "NAN"
    }

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

function getSeconds(string) {
  const a = string.split(":")

  const seconds = +a[0] * 60 + +a[1]
  return seconds
}
