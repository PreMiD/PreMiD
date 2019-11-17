import { readFileSync, writeFileSync } from "fs";
import { parse, stringify } from "ini";

let file = readFileSync("installer_assets/installer.xml", "utf-8");

file = file.replace("VERSION", require("../package.json").version);
file = file.replace(/(PACKAGEDNAME)/g, process.argv[2]);

if (process.argv[2].includes("ia32"))
  file = file.replace(/(installer_64bit)/g, "installer_32bit");

file = file.replace(/(\.\.\/)/g, "");

writeFileSync("installer.xml", file);

let versionId = (require("../package.json").version as string)
    .replace(/[.]/g, "")
    .padStart(4, "0"),
  updateIni = parse(readFileSync("installer_assets/update.ini", "utf-8"));

updateIni.Update.version_id = versionId;

writeFileSync("update.ini", stringify(updateIni));
