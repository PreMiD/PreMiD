require('dotenv').config()

var fetch = require('node-fetch'),
fs = require('fs'),
languages = []

console.log("Updating translation files...")
fetch('https://api.poeditor.com/v2/languages/list', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `api_token=${process.env.POEditorAPIKey}&id=217273`
})
.then(res => res.json())
.then(body => {
  body.result.languages.forEach(language => {
    languages.push(language.code)
  });
  
  languages.forEach(langCode => {
    fetch('https://api.poeditor.com/v2/terms/list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `api_token=${process.env.POEditorAPIKey}&id=217273&language=${langCode}`
    })
    .then(res => res.json())
    .then(body1 => {
      langCode = langCode.replace("-", '_')
      if(langCode == "pt") langCode = "pt_pt"

      if(body1.result.terms.find(term => term.term == "extension.description").translation.content != "") {
        if(!fs.existsSync(`./Extension/_locales/${langCode}`)) fs.mkdirSync(`./Extension/_locales/${langCode}`)
        fs.writeFileSync(`./Extension/_locales/${langCode}/messages.json`, `{"description":{"message":"${body1.result.terms.find(term => term.term == "extension.description").translation.content}"}}`)
      }
      
      var languageFileContent = []
      body1.result.terms.forEach(term => {
        languageFileContent.push({[term.term]: term.translation.content})
      });
      fs.writeFileSync(`./Extension/languages/${langCode}.json`, JSON.stringify(Object.assign(...languageFileContent)))
      console.log(`Updated ${langCode}`)
    })
  })
})