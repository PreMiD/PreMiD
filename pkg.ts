import electronPackager = require("electron-packager");
import { platform } from "os";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { exec } from "child_process";
import { removeSync, ensureDirSync } from "fs-extra";
import { parse, stringify } from "ini";

var icon: string;

if (platform() == "darwin") icon = "./installer_assets/appIcon.icns";
if (platform() == "win32") icon = "./installer_assets/appIcon.ico";

if (existsSync("./dist/app/update.ini")) removeSync("./dist/app/update.ini");
if (existsSync("./dist/app/updater.app")) removeSync("./dist/app/updater.app");
if (existsSync("./dist/app/updater.exe")) removeSync("./dist/app/updater.exe");

console.log("Packaging app...");

electronPackager({
  dir: "./dist/app",
  out: "./dist",
  darwinDarkModeSupport: true,
  icon: icon,
  overwrite: true,
  quiet: true
}).then(() => {
  console.log("Successfully packaged app.");

  if (process.argv.length < 2 || process.argv[2] !== "dist") process.exit();

  var versionId = "0" + require("./package.json").version.replace(/[.]/g, ""),
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

  if (!existsSync(bitRockBuilder) || !existsSync(bitRockUpdater)) {
    console.log("BitRock installation not found");
    process.exit(404);
  }

  console.log("Building updater...");
  var updater = exec(
    `${bitRockUpdater} build installer_assets/updater.xml osx`
  );

  updater.once("exit", (code, signal) => {
    if (![0, 1].includes(code)) {
      console.error(`Updater failed with code ${code}: ${signal}`);
      return;
    }

    console.log("Creating installer...");
    var builder = exec(
      `${bitRockBuilder} build installer_assets/PreMiD_x64.xml osx`
    );

    builder.once("exit", code => {
      removeSync("./tmp");

      if (code !== 0) return;
      console.log("Done!");
    });
  });
});
