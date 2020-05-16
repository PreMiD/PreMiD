import * as archiver from "archiver";
import * as rcedit from "rcedit";
import { arch } from "os";
import { copySync, ensureDirSync, removeSync } from "fs-extra";
import { createWriteStream, existsSync, readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";
import { get } from "https";
import { join } from "path";

async function main() {
	ensureDirSync("tmp");

	if (!existsSync(join(__dirname, "tmp/PreMiD.exe"))) {
		console.log("Downloading node");
		const file = createWriteStream(join(__dirname, "tmp/PreMiD.exe"));
		get(`https://nodejs.org/dist/v14.2.0/win-${arch()}/node.exe`, response =>
			response.pipe(file)
		);

		await new Promise(resolve => file.once("close", resolve));

		console.log("Transforming node");
		rcedit(join(__dirname, "tmp/PreMiD.exe"), {
			"version-string": {
				CompanyName: "Timeraa",
				FileDescription: "Your Rich Presence for everything.",
				LegalCopyright: "© 2018-2020 Timeraa",
				OriginalFilename: "PreMiD",
				ProductName: "PreMiD"
			},
			"product-version": 3.0,
			"file-version": 3.0,
			icon: join(__dirname, "installer_assets/appIcon.ico")
		});
		console.log("Transformed node");
	}

	let packageJSON = JSON.parse(
		readFileSync(join(__dirname, "package.json"), "utf-8")
	);

	delete packageJSON.scripts;
	delete packageJSON.devDependencies;

	writeFileSync(
		join(__dirname, "dist", "package.json"),
		JSON.stringify(packageJSON)
	);

	copySync(join(__dirname, "yarn.lock"), join(__dirname, "dist", "yarn.lock"));
	execSync("yarn", { cwd: join(__dirname, "dist") });
	removeSync(join(__dirname, "dist", "yarn.lock"));

	const outputFile = createWriteStream(`${packageJSON.releaseType}Update.zip`),
		archive = archiver("zip", { zlib: { level: 9 } });

	archive.on("error", function (err) {
		throw err;
	});

	archive.pipe(outputFile);
	archive.directory(join(__dirname, "dist"), false);
	archive.finalize();
}

main();
