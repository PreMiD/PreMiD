

/*
NOT WORKING FOR NOW
*/
async function updateData() {
    var data = {
      clientID: '522133694325194763',
      presenceData: {
        state: $('<div/>')+"test".text()
    }

    chrome.runtime.sendMessage({presence: data})
}