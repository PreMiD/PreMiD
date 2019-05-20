var { app, dialog } = require("electron"),
  os = require("os"),
  debug = require("./debug"),
  { execFile } = require("child_process"),
  path = require("path");

async function checkForUpdate(
  sendNotification = false,
  sendNoUpdateInfo = false
) {
  debug.info("Checking for update...");

  var filePath = os.platform();
  if (filePath == "win32") filePath = "./updater.exe";
  if (filePath == "darwin" && !app.isPackaged)
    filePath = "./updater.app/Contents/MacOS/osx-intel";
  if (filePath == "darwin" && app.isPackaged)
    filePath = "/Applications/PreMiD/updater.app/Contents/MacOS/osx-intel";
  const ls = execFile(filePath, ["--mode", "unattended"]);
  ls.on("close", code => {
    if (code == 0) {
      debug.info("Update available!");
      if (sendNotification)
        dialog.showMessageBox(
          {
            type: "question",
            buttons: ["Nah, not now", "Yes!"],
            title: "Update available!",
            message: `A new version of PreMiD is available for download!\nDo you want to update now?`
          },
          function(response) {
            if (response == 0) return;
            var sudo = require("sudo-prompt");
            sudo.exec(
              `"${path.resolve(
                "./updater" + osSuffix
              )}" --mode unattended --unattendedmodebehavior download`,
              {
                name: "PreMiD Updater"
              },
              function(error, stdout, stderr) {
                process.exit(0);
              }
            );
          }
        );
    } else {
      if (sendNoUpdateInfo)
        dialog.showMessageBox({
          type: "info",
          title: "Up to date!",
          message: `PreMiD is up to date! ${filePath}`
        });
    }
  });

  return UPDATEAVAIABLE;
}

module.exports.checkForUpdate = checkForUpdate;
