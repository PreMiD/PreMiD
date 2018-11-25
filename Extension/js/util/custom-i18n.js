var currentLanguageFile = null,
defaultLanguageFile = null;
var detectLanguage = chrome.i18n.getUILanguage()
console.log(detectLanguage)

document.onload = init()

async function init() {
  var languages = ["en", "de"]
  if(languages.includes(detectLanguage)) {
    currentLanguageFile = await loadLanguageFile(detectLanguage)
  } else {
    currentLanguageFile = await loadLanguageFile("en")
  }

  console.log(getString("app.description"))
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

//getString("app.name")

function getString(term) {
  if(currentLanguageFile.find(str => str.term == term) == null) {
    if(defaultLanguageFile.find(str => str.term == term) == null) {
      console.error(`Could not find translation for "${term}"!`)
      return null;
    } else {
      return defaultLanguageFile.find(str => str.term == term).definition
    }
  } else {
    return currentLanguageFile.find(str => str.term == term).definition
  }
}