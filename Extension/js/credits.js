$(document).ready(async function () {
  fetch('https://api.premid.app/credits').then(async response => {
    var result = await response.json()
    result = result.sort((a, b) => {
      return b.rolePosition - a.rolePosition
    })
    result.forEach(element => {
        $(`<div class="usercard" style="--hoverColor: ` + element.roleColor + `"><div><div class="credits_avatar"><img draggable="false" src="` + element.avatar + `"></div><div class="credits_text">` + getNameColor(element) + `<p>` + element.role + `</p><p> ${element.patronColor != "#fff" && element.role != "Patron" ? "Patron" : ""}</p></div></div></div>`).appendTo('#credits .credits_container')
    });
  }).catch(err => {
    $(`<div class="usercard noHover"><div class="credits_text"><h6>Error</h6><p>Could not load credits.</p></div></div>`).appendTo('#credits .credits_container')
  })
})

function getNameColor(element) {
  if(element.patronColor != "#fff") {
    return `<h6 style="color: ` + element.patronColor + `">` + element.name + `</h6>`;
  } else {
    return `<h6>` + element.name + `</h6>`;
  }
}
