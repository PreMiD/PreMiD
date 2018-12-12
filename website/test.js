var request = require('request')

request.post('https://discordapp.com/api/v6/users/@me', {form: '13osaWpODiNl5xq7w0NQ0A9dap7O2a'}, (error, response, body) => {
  console.log(body)
})