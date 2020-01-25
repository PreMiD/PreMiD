import { readFileSync, writeFileSync } from "fs";
import { parse, stringify } from "ini";

let file = readFileSync("installer_assets/PreMiD-Upgrade.xml", "utf-8");

file = file.replace("VERSION", require("../package.json").version);

writeFileSync("installer_assets/PreMiD-Upgrade.xml", file);

let versionId = (require("../package.json").version as string)
		.replace(/[.]/g, "")
		.padStart(4, "0"),
	updateIni = parse(readFileSync("installer_assets/update.ini", "utf-8"));

updateIni.Update.version_id = versionId;

writeFileSync("installer_assets/update.ini", stringify(updateIni));
