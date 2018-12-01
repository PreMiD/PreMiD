$(document).ready(async function() {
  fetch('https://api.premid.app/credits').then(async response => {
    var result = await response.json()
    result = result.sort((a, b) => {return b.rolePosition - a.rolePosition})
    var firstItemInRow;
    var currItemInRow = 0
    result.forEach(element => {
      if(currItemInRow == 0) firstItemInRow = element
      if(currItemInRow == 1) {
        $(`<div class="usercard" style="--hoverColor: ` + element.roleColor + `"><div class="credits_avatar"><img draggable="false" src="` + element.avatar + `"></div><div class="credits_text"><h6 style="color: ` + element.patronColor + `">` + element.name + `</h6><p>` + element.role + `</p><p> ${element.patronColor != "#fff" && element.role != "Patron" ? "Patron" : ""}</p></div></div><div class="usercard" style="--hoverColor: ` + firstItemInRow.roleColor + `"><div class="credits_avatar"><img draggable="false" src="` + firstItemInRow.avatar + `"></div><div class="credits_text"><h6 style="color: ` + firstItemInRow.patronColor + `">` + firstItemInRow.name + `</h6><p>` + firstItemInRow.role + `</p><p> ${firstItemInRow.patronColor != "#fff" && firstItemInRow.role != "Patron" ? "Patron" : ""}</p></div></div>`).appendTo('#credits .credits_container')
        currItemInRow = 0
      } else 
      currItemInRow++;
    });
  }).catch(err => {
    $(`<div class="usercard noHover"><div class="credits_text"><h6>Error</h6><p>Could not load credits.</p></div></div>`).appendTo('#credits .credits_container')
  })
})
