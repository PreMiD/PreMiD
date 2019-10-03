import { app } from "electron";
if (!app.isPackaged) var chalk = require("chalk");

/**
 * Show info message in console
 * */
export function info(message: string) {
  //* Return if app packaged
  //* Show debug
  if (app.isPackaged) return;
  console.log(`${chalk.bgBlue(chalk.white("  INFO   "))} ${message}`);
}

/**
 * Show success message in console
 * */
export function success(message: string) {
  //* Return if app packaged
  //* Show debug
  if (app.isPackaged) return;
  console.log(`${chalk.bgGreen(" SUCCESS ")} ${message}`);
}

/**
 * Show error message in console
 * */
export function error(message: string) {
  //* Return if app packaged
  //* Show debug
  if (app.isPackaged) return;
  console.log(`${chalk.bgRed("  ERROR  ")} ${message}`);
}
