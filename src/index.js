const { app, BrowserWindow } = require('electron');

const chalk = require("chalk")

let constants = require('./util/constants')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const setup = () => {
  console.log(constants.consolePrefix + chalk.green("Loading..."))

  // Create the browser window.
  constants.win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  });

  // and load the index.html of the app.
  constants.win.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  constants.win.webContents.openDevTools();

  // Emitted when the window is closed.
  constants.win.on('closed', () => {
    //constants.win = null;
  });

  require('./presenceHandler.js')
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', setup);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    //app.quit();
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    setup();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

require('./menubar/setup')