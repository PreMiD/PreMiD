$(document).ready(async function() {
  fetch('//localhost:8080/credits').then(async response => {
    var result = await response.json()
    var firstItemInRow;
    var currItemInRow = 0
    result.forEach(element => {
      if(currItemInRow == 0) firstItemInRow = element
      if(currItemInRow == 1) {
        $('<div class="usercard"><div class="credits_avatar"><img draggable="false" src="' + element.avatarURL + '"></div><div class="credits_text"><h6>' + element.name + '</h6><p>' + element.type + '</p></div></div><div class="usercard"><div class="credits_avatar"><img draggable="false" src="' + firstItemInRow.avatarURL + '"></div><div class="credits_text"><h6>' + firstItemInRow.name + '</h6><p>' + firstItemInRow.type + '</p></div></div>').appendTo('#credits .credits_container')
        currItemInRow = 0
      } else 
      currItemInRow++;
    });
  })
})
