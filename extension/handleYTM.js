//* Start interval
window.onload = function() {
  setInterval(updateData, 1000);
};

//* Create used variables
let urlForVideo, songTime, calcDifference;

function updateData() {
  if (document.location.href.includes("watch?v=")) urlForVideo = document.location.href;
  songTime = $(".time-info.style-scope.ytmusic-player-bar").html();
  calcDifference = songTime.split(" / ", 2);

  var currentSongAuthors = []

  $(".byline.ytmusic-player-bar").contents().each(function(index, item) {
    if(item.classList != undefined) {
      if(item.classList.contains("yt-simple-endpoint") == true) {
        currentSongAuthors.push(item.innerHTML)
      }
    }
  })
  
  var currentSongAuthorString = ""

  if(currentSongAuthors.length == 0) {
    currentSongAuthorString = $(".byline.ytmusic-player-bar").contents().first().text()
  } else {
    for(var i = 0; i < currentSongAuthors.length; i++) {
      if(i == currentSongAuthors.length -1) {
        currentSongAuthorString = currentSongAuthorString + " - " + currentSongAuthors[i]
      } else {
        if(i == 0) {
          currentSongAuthorString = currentSongAuthorString + currentSongAuthors[i]
        } else {
          currentSongAuthorString = currentSongAuthorString + ", " + currentSongAuthors[i]
        }
      }
    }
  }

  const data = {
    connected: true,
    service: "ytm",
    url: urlForVideo,
    currentSongTitle: $(".title.style-scope.ytmusic-player-bar").html(),
    currentSongAuthor: currentSongAuthorString,
    currentSongStartTime: getSeconds(calcDifference[0]),
    currentSongEndTime: getSeconds(calcDifference[1])
  };

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
  };

  $.ajax(settings);
}

function getSeconds(string) {
  const a = string.split(":");

  const seconds = +a[0] * 60 + +a[1];
  return seconds;
}
