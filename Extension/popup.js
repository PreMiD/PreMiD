const togglePresence = $(".togglePresence"),
    toggleYouTube = $(".toggleYouTube"),
    toggleYouTubeMusic = document.getElementsByClassName("toggleYouTubeMusic")[0];

window.onload = function() {
  togglePresence.on("change", switchPresence);
  toggleYouTube.on("change", switchYouTube);
  toggleYouTubeMusic.on("change", switchYouTubeMusic);

  if (localStorage.enabled === "true") togglePresence.checked = true;
  else {
    togglePresence.checked = false;
    toggleYouTube.checked = false;
    toggleYouTubeMusic.checked = false;
    toggleYouTube.disabled = true;
    toggleYouTubeMusic.disabled = true;
  }

  if (localStorage.youtube === "true") {
    toggleYouTube.checked = true;
    toggleYouTube.disabled = false;
  } else toggleYouTube.checked = false;

  if (localStorage.youTubeMusic === "true") {
    toggleYouTubeMusic.checked = true;
    toggleYouTubeMusic.disabled = false;
  } else toggleYouTubeMusic.checked = false;
};

function switchPresence() {
  if (localStorage.enabled === "true") {
    localStorage.enabled = "false";
    localStorage.youTube = "false";
    localStorage.youTubeMusic = "false";
    toggleYouTube.checked = false;
    toggleYouTube.disabled = true;
    toggleYouTubeMusic.checked = false;
    toggleYouTubeMusic.disabled = true;
  } else {
    localStorage.enabled = "true";
    localStorage.youTube = "true";
    localStorage.youTubeMusic = "true";
    toggleYouTube.checked = true;
    toggleYouTube.disabled = false;
    toggleYouTubeMusic.checked = true;
    toggleYouTubeMusic.disabled = false;
  }
}

function switchYouTube() {
  if (localStorage.youTube === "true") {
    localStorage.youTube = "false";
    toggleYouTube.checked = false;
  } else {
    localStorage.youTube = "true";
    toggleYouTube.checked = true;
  }
}

function switchYouTubeMusic() {
  if (localStorage.youTubeMusic === "true") {
    localStorageyouTubeMusic = "false";
    toggleYouTubeMusic.checked = false;
  } else {
    localStorageyouTubeMusic = "true";
    toggleYouTubeMusic.checked = true;
  }
}
