//* Declare needed constants
var { app } = require("electron"),
  AutoLaunch = require("auto-launch"),
  Config = require("electron-store"),
  options = new Config({
    name: "options"
  }),
  debug = require("../util/debug"),
  autoLaunch = new AutoLaunch({
    name: "PreMiD",
    path: app.getPath("exe"),
    isHidden: true
  });

module.exports.init = async () => {
  if (!app.isPackaged) {
    debug.info("Skipping autoLaunch due to development instance.");
    return
  }

  if (options.get("autoLaunch")) {
    if (!(await autoLaunch.isEnabled())) {
      debug.info("Adding App to startup items...");
      autoLaunch.enable()
        .then(() => debug.success("Adding App to startup items... - Done"))
        .catch(err =>
          debug.error("Adding App to startup items... - Error\n" + err.message)
        );
    } else debug.error("App already added to startup items, skipping...");
  } else {
    if (await autoLaunch.isEnabled()) {
      debug.info("Removing App from startup items...");
      autoLaunch.disable()
        .then(() => debug.success("Removing App from startup items... - Done"))
        .catch(err =>
          debug.error(
            "Removing App from startup items... - Error\n" + err.message
          )
        );
    }
  }
};
