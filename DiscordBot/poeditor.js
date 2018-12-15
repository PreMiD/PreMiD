const fs = require("fs");
const fetch = require("node-fetch");

sendPOEditorUpdate();
setInterval(sendPOEditorUpdate, 15 * 60 * 1000);

function sendPOEditorUpdate() {
  require("dotenv").load();
  var result = fs.readFileSync("./updates.json");

  fetch("https://api.poeditor.com/v2/languages/list", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `api_token=${process.env.POEditorAPIKey}&id=217273&language=en`
  })
    .then(res => res.json())
    .then(json => {
      var referenceLanguage = json.result.languages.find(language => language.code == "en")
      if (!JSON.parse(result).includes(Date.parse(referenceLanguage.updated))) {
        result = JSON.parse(result);
        result.push(Date.parse(referenceLanguage.updated));

        fetch("https://api.poeditor.com/v2/terms/list", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `api_token=${process.env.POEditorAPIKey}&id=217273&language=en`
        })
          .then(res => res.json())
          .then(json => {
            var body = json.result;

            var fields = [];
            body.terms.forEach(string => {
              if (
                isNaN(string.updated) &&
                !result.includes(Date.parse(string.updated))
              ) {
                result.push(Date.parse(string.updated));
                fields.push({
                  name: `**${string.term}**`,
                  value: `**\`\`${string.translation.content}\`\`**`
                });
              }
            });
            fetch(process.env.webhook, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: "POEditor",
                avatar_url:
                  "https://poeditor.com/public/images/logo/logo_head_500_transparent.png",
                  content: "Strings were **updated/added**!",
                  embeds: [
                  {
                    color: '4116653',
                    description: "These strings were affected:",
                    fields: fields,
                    footer: {
                      text: "POEditor",
                      icon_url: 'https://poeditor.com/public/images/logo/logo_head_500_transparent.png'
                    },
                    timestamp: new Date().toISOString()
                  }
                ]
              })
            })
            fs.writeFileSync("./updates.json", JSON.stringify(result), 'utf8')
          });
      }
    });
}
