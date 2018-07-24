//* Start interval
window.onload = function() {
  setInterval(updateData, 1000);
};

//* Create needed variables
let urlForVideo, songTime, calcDifference;

function updateData() {
  if (document.location.href.includes("music.youtube")) urlForVideo = document.location.href;
  if($(".time-info.style-scope.ytmusic-player-bar").html() != " ") {
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

  if(currentSongAuthors.length == 0 || currentSongAuthors.length == 1) {
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
    currentSongEndTime: getSeconds(calcDifference[1]),
    currentSongCover: $(".image.style-scope.ytmusic-player-bar").attr("src")
  };

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

//* Used to extract seconds from Syntax 
//* 1:39 => 99
function getSeconds(string) {
  const s = string.split(":");

  const seconds = +s[0] * 60 + +s[1];
  return seconds;
}
