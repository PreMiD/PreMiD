var { execFile } = require("child_process"),
  path = require("path"),
  bitRockBuilder = "",
  bitRockUpdater = "";

if (process.argv.length < 3) {
  return;
}

if (process.argv[2] == "windows") {
  bitRockBuilder =
    "C:/Program Files (x86)/BitRock InstallBuilder Enterprise 19.4.1/bin/builder-cli.exe";
  bitRockUpdater =
    "C:/Program Files (x86)/BitRock InstallBuilder Enterprise 19.4.1/autoupdate/bin/customize.exe";
}

if (process.argv[2] == "osx") {
  bitRockBuilder =
    "/Applications/BitRock InstallBuilder Enterprise 19.4.1/bin/Builder.app/Contents/MacOS/installbuilder.sh";
  bitRockUpdater =
    "/Applications/BitRock InstallBuilder Enterprise 19.4.1/autoupdate/bin/customize.sh";
}

execFile(bitRockUpdater, [
  "build",
  path.resolve("installer_assets/updater.xml"),
  process.argv[2]
]);

execFile(bitRockBuilder, [
  "build",
  path.resolve("installer_assets/PreMiD.xml"),
  process.argv[2]
]);
