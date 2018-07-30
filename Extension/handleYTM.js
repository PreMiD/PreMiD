//* Start interval
$(document).ready(() => {
  setInterval(updateData, 1000)
})

//* Create needed variables
let songTime,
splitTime,
songStartTime,
songEndTime,
songTitle,
songCover,
songAuthors = []

function updateData() {
  //* Clear old authors
  songAuthors = []

  if($(".time-info.style-scope.ytmusic-player-bar").html() != "" && 
  $(".time-info.style-scope.ytmusic-player-bar").html() != " ") {
    //* Get song Time String (2:10 / 3:21)
    songTime = $(".time-info.style-scope.ytmusic-player-bar").html()
    //* Split to array ["2:10", "3:21"]
    splitTime = songTime.split(" / ", 2)
    //* Convert to seconds
    songStartTime = getSeconds(splitTime[0])
    songEndTime = getSeconds(splitTime[1])
    //* Get Song title
    songTitle = $(".title.style-scope.ytmusic-player-bar").html()
    //* Get Song cover/thumbnail
    songCover = $(".image.style-scope.ytmusic-player-bar").attr("src")

    //* Get all authors
    $(".byline.ytmusic-player-bar").contents().each(function(index, item) {
      if(item.classList != undefined) {
        if(item.classList.contains("yt-simple-endpoint") == true) {
          songAuthors.push(item.innerHTML)
        }
      }
    })
    
    //* If no authors found in previous method use this
    if(songAuthors.length == 0 || songAuthors.length == 1) {
      //* Clear old list
      songAuthors = []
      songAuthors.push($(".byline.ytmusic-player-bar").contents().first().text())
    }

    var startTime = Date.now();
    var endTime =
      Math.floor(startTime / 1000) -
      songStartTime +
      songEndTime;

    const data = {
      connected: true,
      service: "ytm",
      currentSongTitle: songTitle,
      currentSongAuthors: songAuthors,
      currentSongStartTimeSeconds: songStartTime,
      currentSongStartTime: startTime,
      currentSongEndTime: endTime,
      currentSongCover: songCover
    }

    //* Send data to app/server
    $.ajax({
      async: true,
      crossDomain: true,
      url: "http://localhost:3000/",
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      processData: false,
      data: JSON.stringify(data)
    })
  }
}

//* Used to extract seconds from Syntax 
//* 1:39 => 99
function getSeconds(string) {
  const s = string.split(":")

  const seconds = +s[0] * 60 + +s[1]
  return seconds
}
