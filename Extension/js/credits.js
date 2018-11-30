$(document).ready(async function() {
  fetch('https://api.premid.app/credits').then(async response => {
    var result = await response.json()
    var firstItemInRow;
    var currItemInRow = 0
    result.forEach(element => {
      if(currItemInRow == 0) firstItemInRow = element
      if(currItemInRow == 1) {
        $('<div class="col s6"><div class="credit-panel card-panel"><img draggable="false" src="' + element.avatarURL + '"><h1 class="fitty">' + element.name + '</h1><h2>' + element.type + '</h2></div></td><td><div class="credit-panel card-panel"><img draggable="false" src="' + firstItemInRow.avatarURL + '"><h1 class="fitty">' + firstItemInRow.name + '</h1><h2>' + firstItemInRow.type + '</h2></div></div>').appendTo('#credits #credits_container')
        currItemInRow = 0
      } else 
      currItemInRow++;
    });
  })
})
