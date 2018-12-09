var request = require('request')
var fetch = require('node-fetch')

/*
request({
url: 'https://api.poeditor.com/v2/terms/list',
  method: 'POST',
  json: true,
  body: `api_token=${process.env.poeditorAPIToken}&id=217273&language=en`,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
}, function(error, response, body){
  console.log("Great")
  console.log(body);
}) */
  
test()

async function test() {
  require('dotenv').load()

  var result1 = await fetch("https://api.poeditor.com/v2/terms/list", {
    method: "POST",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `api_token=${process.env.poeditorAPIToken}&id=217273&language=en`
  }).then(res => res.json())
  console.log(result1.result.terms)
}