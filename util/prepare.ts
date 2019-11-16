import { readFileSync, writeFileSync } from "fs";

let file = readFileSync("installer_assets/installer.xml", "utf-8");

file = file.replace("VERSION", require("../package.json").version);
file = file.replace(/(PACKAGEDNAME)/g, process.argv[2]);

if (process.argv[2].includes("ia32"))
  file = file.replace(/(installer_64bit)/g, "installer_32bit");

file = file.replace(/(..\/)/g, "");

writeFileSync("installer.xml", file);
