import { readFileSync, writeFileSync } from "fs";

let file = readFileSync("installer_assets/PreMiD-Upgrade.xml", "utf-8");

file = file.replace("VERSION", require("../package.json").version);

writeFileSync("installer_assets/PreMiD-Upgrade.xml", file);
