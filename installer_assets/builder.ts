import { execFile } from "child_process";
import { platform } from "os";
import { resolve } from "path";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { parse, stringify } from "ini";
import { ensureDirSync, removeSync } from "fs-extra";

var versionId = "0" + require("../package.json").version.replace(/[.]/g, ""),
  updateIni = parse(readFileSync("./installer_assets/update.ini", "utf-8"));

updateIni.Update.version_id = versionId;

ensureDirSync("./tmp");
writeFileSync("./tmp/update.ini", stringify(updateIni));

var bitRockBuilder = "",
  bitRockUpdater = "";

if (platform() === "win32") {
  bitRockBuilder = resolve(
    "C:/Program Files (x86)/BitRock Installbuilder/bin/builder-cli.exe"
  );
  bitRockUpdater = resolve(
    "C:/Program Files (x86)/BitRock Installbuilder/autoupdate/bin/customize.exe"
  );
}

if (platform() === "darwin") {
  bitRockBuilder = resolve(
    "/Applications/Installbuilder/bin/Builder.app/Contents/MacOS/installbuilder.sh"
  );
  bitRockUpdater = resolve(
    "/Applications/Installbuilder/autoupdate/bin/customize.sh"
  );
}

if (!existsSync(bitRockUpdater)) {
  console.log("BitRock installation not found");
  process.exit(404);
}

var updater: any = execFile(bitRockUpdater, [
  "build",
  resolve("./installer_assets/updater.xml"),
  platform() == "darwin" ? "osx" : "windows"
]);

var builder: any = execFile(bitRockBuilder, [
  "build",
  resolve("./installer_assets/PreMiD_x64.xml"),
  platform() == "darwin" ? "osx" : "windows"
]);

updater.once("close", () => (updater = true));
builder.once("close", () => (builder = true));

var cleanUp = setInterval(() => {
  if (updater === true && builder === true) {
    removeSync("./tmp");
    clearInterval(cleanUp);
  }
}, 100);
