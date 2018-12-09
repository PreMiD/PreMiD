const poconnect = require('node-poeditor');
const fs = require('fs');
const fetch = require('node-fetch')

sendPOEditorUpdate()
setInterval(sendPOEditorUpdate, 15*1000)

async function sendPOEditorUpdate() {
  require('dotenv').load()
  try {
    var result = fs.readFileSync("./updates.json")
    
    const res = await poconnect.languages.list(process.env.poeditorAPIToken, 217273);
    
    var referenceLanguage = res.languages.find(language => language.code == "en")
    if(!JSON.parse(result).includes(Date.parse(referenceLanguage.updated))) {
      result = JSON.parse(result)
      result.push(Date.parse(referenceLanguage.updated))

      await fetch("https://api.poeditor.com/v2/terms/list", {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `api_token=${process.env.poeditorAPIToken}&id=217273&language=en`
      }).then(res => res.json())
      .then(json => {

        var body = json.result
  
        var fields = []
        body.terms.forEach(string => {
          if(isNaN(string.updated) && !result.includes(Date.parse(string.updated))) {
            result.push(Date.parse(string.updated))
            fields.push({
              "name": `**${string.term}**`,
              "value": `**\`\`${string.translation.content}\`\`**`
            })
          }
        });
        
        fetch(process.env.webhook, {
          method: "POST",
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: JSON.stringify({
            "username": "POEditor",
            "avatar_url": "https://poeditor.com/public/images/logo/logo_head_500_transparent.png",
            "content": "Strings were **updated/added**!",
            "embeds": [
              {
                "description": "These strings were affected:",
                "color": 1530475,
                "timestamp": "2018-12-07T17:47:51.221Z",
                "footer": {
                  "icon_url": "https://poeditor.com/public/images/logo/logo_head_500_transparent.png",
                  "text": "POEditor"
                },
                "fields": {
                  "name": "dick",
                  "content": "lal"
                }
              }
            ]
          })
        })

        //fs.writeFileSync("./updates.json", JSON.stringify(result), 'utf8')
      })
    }
  } catch (err) {}
}