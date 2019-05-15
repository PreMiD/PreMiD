//* Import needed variables
var { app, BrowserWindow } = require("electron"),
  pjson = require("./package.json"),
  os = require("os"),
  updater = require("./util/updateChecker"),
  Config = require("electron-store"),
  options = new Config({ name: "options" });

//* Clear Console if not packaged
if (!app.isPackaged) process.stdout.write("\u001b[2J\u001b[0;0H");

//* Set app user model id for Notifications on windows
app.setAppUserModelId("eu.Timeraa.PreMiD");

//* Define Global Variables
global.PLATFORM = os.platform();
global.UPDATEAVAIABLE = "";
global.VERSION = pjson.productVersion;

if (!app.isPackaged) global.VERSIONSTRING = VERSION + "-DEV";
else global.VERSIONSTRING = VERSION;

global.BROWSERCONNECTIONSTATE = "NOT_CONNECTED";
global.EXTENSIONSOCKET = null;
global.TRAY = null;

//* Single instance lock
app.requestSingleInstanceLock();

//* Electron initialized
app.on("ready", appReady);

//* Prevent app.quit() when all windows closed
app.on("window-all-closed", () => {});

//* App ready
async function appReady() {
  //* Create BrowserWindow for .setProgressBar
  var win = new BrowserWindow({ show: false });
  win.setProgressBar(0);

  //* New Options
  initOption("autoLaunch");
  initOption("autoUpdate");
  initOption("mediaKeys", false);
  initOption("titleMenubar");

  win.setProgressBar(0.2);

  //* Setup MenuBar
  require("./tray/createTray")();
  win.setProgressBar(0.35);

  //* Auto launch
  require("./util/autoLaunch").init();
  win.setProgressBar(0.75);

  //* Include PresenceHandler
  require("./presenceHandler.js");
  win.setProgressBar(1);
  win.close();
  win = null;

  //TODO ONLY HIDE IF NO ERROR
  if (PLATFORM == "darwin") app.dock.hide();

  //* Automatically check for update
  if (options.get("autoUpdate") == true) updater.checkForUpdate(true);
}

async function initOption(option, defaultValue = true) {
  if (options.get(option) == undefined) options.set(option, defaultValue);
}
