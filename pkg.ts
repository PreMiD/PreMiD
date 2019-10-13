import * as electronPackager from "electron-packager";
import { platform, arch } from "os";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { exec } from "child_process";
import { removeSync, ensureDirSync } from "fs-extra";
import { parse, stringify } from "ini";
import * as prompts from "prompts";
import * as ora from "ora";

(async () => {
  let response = {
    os: "current",
    arch: ["x64", "ia32"],
    installer: false
  };

  if (process.env.NODE_ENV !== "DePloY")
    response = await prompts([
      {
        type: "select",
        name: "arch",
        message: "What architecture?",
        choices: [
          {
            title: "current",
            value: "current"
          },
          {
            title: "all",
            value: "all"
          },
          {
            title: "arm64",
            value: "arm64"
          },
          {
            title: "armv7l",
            value: "armv7l"
          },
          {
            title: "ia32",
            value: "ia32"
          },
          {
            title: "mips64el",
            value: "mips64el"
          },
          {
            title: "x64",
            value: "x64"
          }
        ]
      },
      {
        type: "select",
        name: "os",
        message: "What operating system?",
        choices: [
          {
            title: "current",
            value: "current"
          },
          {
            title: "all",
            value: "all"
          },
          {
            title: "darwin",
            value: "darwin"
          },
          {
            title: "linux",
            value: "linux"
          },
          {
            title: "mas",
            value: "mas"
          },
          {
            title: "win32",
            value: "win32"
          }
        ]
      },
      {
        type: "confirm",
        name: "installer",
        message: "With installer?"
      }
    ]);

  //#region WIP
  let installerXml = readFileSync(`installer_assets/installer.xml`, "utf-8");

  installerXml = installerXml.replace(
    "{{VERSION}}",
    require("./package.json").version
  );
  installerXml = installerXml.replace(
    /(PACKAGEDNAME)/g,
    `PreMiD-${platform()}-${arch()}`
  );

  ensureDirSync("tmp");
  writeFileSync("tmp/installer.xml", installerXml);
  //#endregion

  if (!response.os) {
    process.exit();
    return;
  }

  let icon: string;

  if (
    response.os == "darwin" ||
    (response.os === "current" && platform() === "darwin")
  )
    icon = "./installer_assets/appIcon.icns";
  if (["ia32", "x64"].includes(response.arch) || platform() === "win32")
    icon = "./installer_assets/appIcon.ico";

  if (existsSync("./dist/app/update.ini")) removeSync("./dist/app/update.ini");
  if (existsSync("./dist/app/updater.app"))
    removeSync("./dist/app/updater.app");
  if (existsSync("./dist/app/updater.exe"))
    removeSync("./dist/app/updater.exe");

  let spinner = ora("Packaging app").start(),
    packagingOptions: electronPackager.Options = {
      dir: "./dist/app",
      out: "./dist",
      darwinDarkModeSupport: true,
      icon: icon,
      overwrite: true,
      quiet: true,
      appBundleId: "eu.Timeraa.PreMiD",
      appCategoryType: "Utilities",
      appCopyright: `Timeraa 2018-${new Date().getFullYear()}`,
      prune: true,
      // @ts-ignore
      arch: response.arch,
      // @ts-ignore
      platform: response.os
    };

  if (response.arch === "current") delete packagingOptions.arch;
  if (response.os === "current") delete packagingOptions.platform;

  // @ts-ignore
  electronPackager(packagingOptions).then(() => {
    if (!response.installer) {
      spinner.text = "Done!";
      spinner.succeed();
      process.exit();
      return;
    }

    let versionId = "0" + require("./package.json").version.replace(/[.]/g, ""),
      updateIni = parse(readFileSync("./installer_assets/update.ini", "utf-8"));

    updateIni.Update.version_id = versionId;

    ensureDirSync("./tmp");
    writeFileSync("./tmp/update.ini", stringify(updateIni));

    let bitRockBuilder = "",
      bitRockUpdater = "";

    if (platform() === "win32") {
      bitRockBuilder = resolve(
        "C:/Program Files (x86)/BitRock InstallBuilder Enterprise 19.8.0/bin/builder-cli.exe"
      );
      bitRockUpdater = resolve(
        "C:/Program Files (x86)/BitRock InstallBuilder Enterprise 19.8.0/autoupdate/bin/customize.exe"
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
      spinner.fail("Bitrock installation not found.");
      process.exit();
      return;
    }

    spinner.text = "Building updater";

    let updater = exec(
      `"${bitRockUpdater}" build installer_assets/updater.xml ${
        platform() === "win32" ? "windows" : "osx"
      }`
    );

    updater.once("exit", (code, signal) => {
      if (![0, 1].includes(code)) {
        spinner.fail(`Updater failed with code ${code}: ${signal}`);
        process.exit();
        return;
      }

      spinner.text = "Building installer";
      let builder = exec(
        `"${bitRockBuilder}" build tmp/installer.xml ${
          platform() === "win32" ? "windows" : "osx"
        }`
      );

      builder.once("exit", code => {
        removeSync("./tmp");

        if (code !== 0) {
          spinner.fail(`Error code: ${code}`);
          process.exit();
          return;
        }

        spinner.text = "Done!";
        spinner.succeed();
        process.exit();
        return;
      });
    });
  });
})();
