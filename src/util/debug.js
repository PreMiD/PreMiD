var chalk = require('chalk')

module.exports.debug = function(type, message) {
  var color
  switch(type) {
    case "info":
      color = "#dcff32"
      break
    case "success":
      color = "#64c800"
      break
    case "error":
      color = "#c80000"
      break
    default:
      throw new Error("Invalid debug color.")
  }
  console.log(chalk.bold(chalk.hex('#596cae')("PreMiD")) + chalk.hex('#ffffff')(": ") + chalk.hex(color)(message))
}