import electronPackager = require("electron-packager");
import { platform } from "os";
import { existsSync } from "fs";
import { removeSync } from "fs-extra";
import { spawn } from "child_process";

var icon: string;

var npm = spawn("npm", ["i", "--silent"], {
  stdio: "inherit",
  cwd: "./dist/app",
  detached: true
});

npm.once("close", code => {
  if (code !== 0) {
    console.error(`FAIL: ${code}`);
    return;
  }

  if (platform() == "darwin") icon = "./installer_assets/appIcon.icns";
  if (platform() == "win32") icon = "./installer_assets/appIcon.ico";

  if (existsSync("./dist/app/update.ini")) removeSync("./dist/app/update.ini");
  if (existsSync("./dist/app/updater.app"))
    removeSync("./dist/app/updater.app");
  if (existsSync("./dist/app/updater.exe"))
    removeSync("./dist/app/updater.exe");

  electronPackager({
    dir: "./dist/app",
    out: "./dist",
    asar: true,
    darwinDarkModeSupport: true,
    icon: icon,
    overwrite: true
  }).then(() => {
    console.log("Successfully packaged app.");
  });
});
