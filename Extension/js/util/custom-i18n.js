//* Define variables
var availableLanguages = ["en", "de"],
currentLanguageFile = null,
defaultLanguageFile = null,
detectLanguage = chrome.i18n.getUILanguage()


/**
 * 
 * @param {String} languageCode Language code to load file from
 */
async function loadLanguageFile(languageCode) {
  //* Load default Language file in case string is not in a language file
  defaultLanguageFile = await fetch(chrome.runtime.getURL('languages/en.json'))
  .then(response => response.json())
  .then(responseData => {
    return responseData
  })
  //* Load actual language file to try to get String from
  return await fetch(chrome.runtime.getURL('languages/' + languageCode + '.json'))
  .then(response => response.json())
  .then(responseData => {
    return responseData
  })
}

/**
 * 
 * @param {String} term Term definition to get the string value of
 */
async function getString(term) {
  //* Load Language files if they are not set
  if((currentLanguageFile && defaultLanguageFile) == null) {
    //* Check if we have language xx in our available languages
    if(availableLanguages.includes(detectLanguage))
      //* Load and set file variable
      currentLanguageFile = await loadLanguageFile(detectLanguage);
    else
      //* Load and set file variable
      currentLanguageFile = await loadLanguageFile("en");
  }

  //* Check if the term is NOT available in the user's language file
  if(!currentLanguageFile.hasOwnProperty(term)) {
    //* Return error if it couldn't be found in the default file as well
    if(!defaultLanguageFile.hasOwnProperty(term)) {
      console.error(`Could not find translation for "${term}"!`)
      return null;
    } else {
      //* Return needed term value
      return defaultLanguageFile[term]
    }
  } else {
    //* Return needed term value
    return currentLanguageFile[term]
  }
}