var chalk = require('chalk')
const { app } = require("electron");

module.exports.info = (message) => {
  if(!app.isPackaged)
    console.log(`[${chalk.hex('#596cae')("PreMiD")}] ${chalk.hex("#5050ff")(message)}`)
}

module.exports.success = (message) => {
  if(!app.isPackaged)
    console.log(`[${chalk.hex('#596cae')("PreMiD")}] ${chalk.hex("#50ff50")(message)}`)
}

module.exports.error = (message) => {
  if(!app.isPackaged)
    console.log(`[${chalk.hex('#596cae')("PreMiD")}] ${chalk.hex("#ff5050")(message)}`)
}