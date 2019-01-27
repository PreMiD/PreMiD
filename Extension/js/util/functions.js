/**
 * 
 * @param {String} type Type of message (success/error...)
 * @param {String} message Message to log
 */
function PMD_debug(type, message) {
  chrome.storage.sync.get(['options'], function(result) {
    if(result.options.debugging) {
      switch(type) {
        case "info":
          console.log('%cPreMiD %c' + message, 'color: #596cae; font-weight: 900;', 'color: #0000ff; font-weight: 900;');
          break
        case "success":
          console.log('%cPreMiD %c' + message, 'color: #596cae; font-weight: 900;', 'color: #00ff00; font-weight: 900;');
          break
        case "error":
          console.log('%cPreMiD %c' + message, 'color: #596cae; font-weight: 900;', 'color: #ff0000; font-weight: 900;');
          break
      }
    }
  })
}
