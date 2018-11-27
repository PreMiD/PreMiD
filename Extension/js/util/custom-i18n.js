var currentLanguageFile = null,
defaultLanguageFile = null;
var detectLanguage = chrome.i18n.getUILanguage()

document.onload = init()

async function init() {
  var languages = ["en", "de"]
  if(languages.includes(detectLanguage)) {
    currentLanguageFile = await loadLanguageFile(detectLanguage)
  } else {
    currentLanguageFile = await loadLanguageFile("en")
  }
}

async function loadLanguageFile(languageCode) {
  defaultLanguageFile = await fetch(chrome.runtime.getURL('languages/en.json'))
  .then(response => response.json())
  .then(responseData => {
    return responseData
  })
  return fetch(chrome.runtime.getURL('languages/' + languageCode + '.json'))
  .then(response => response.json())
  .then(responseData => {
    return responseData
  })
}

function getString(term) {
  if(currentLanguageFile.hasOwnProperty(term)) {
    if(defaultLanguageFile.hasOwnProperty(term)) {
      console.error(`Could not find translation for "${term}"!`)
      return null;
    } else {
      return defaultLanguageFile[term]
    }
  } else {
    return currentLanguageFile[term]
  }
}