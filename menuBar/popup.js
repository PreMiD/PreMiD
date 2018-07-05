var togglePresence,
    toggleYouTube,
    toggleYouTubeMusic

$(document).ready(function() {
    togglePresence = $(".togglePresence"),
    toggleYouTube = $(".toggleYouTube"),
    toggleYouTubeMusic = $(".toggleYouTubeMusic");

  togglePresence.change(switchPresence);
  toggleYouTube.change(switchYouTube);
  toggleYouTubeMusic.change(switchYouTubeMusic);

  if (localStorage.enabled === "true") togglePresence.prop("checked", true)
  else {
    togglePresence.prop("checked", false)
    toggleYouTube.prop("checked", false)
    toggleYouTubeMusic.prop("checked", false)
    toggleYouTube.attr("disabled", "disabled")
    toggleYouTubeMusic.attr("disabled", "disabled")
  }

  if (localStorage.youTube === "true") {
    
    toggleYouTube.prop("checked", true)
    toggleYouTube.removeAttr("disabled")
  } else toggleYouTube.prop("checked", false)
  
  if (localStorage.youTubeMusic === "true") {
    toggleYouTubeMusic.prop("checked", true)
    toggleYouTubeMusic.removeAttr("disabled")
  } else toggleYouTubeMusic.prop("checked", false)
})

function switchPresence() {
  if (localStorage.enabled === "true") {
    localStorage.enabled = "false";
    localStorage.youTube = "false";
    localStorage.youTubeMusic = "false";
    toggleYouTube.prop("checked", false)
    toggleYouTube.attr("disabled", "disabled")
    toggleYouTubeMusic.prop("checked", false)
    toggleYouTubeMusic.attr("disabled", "disabled")
  } else {
    localStorage.enabled = "true";
    toggleYouTube.removeAttr("disabled")
    toggleYouTubeMusic.removeAttr("disabled")
  }
}

function switchYouTube() {
  if (localStorage.youTube === "true") {
    localStorage.youTube = "false";
    toggleYouTube.prop("checked", false)
  } else {
    localStorage.youTube = "true";
    toggleYouTube.prop("checked", true)
  }
}

function switchYouTubeMusic() {
  if (localStorage.youTubeMusic === "true") {
    localStorage.youTubeMusic = "false";
    toggleYouTubeMusic.prop("checked", false)
  } else {
    localStorage.youTubeMusic = "true";
    toggleYouTubeMusic.prop("checked", true)
  }
}