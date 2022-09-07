import * as electronPackager from "electron-packager";
import { platform } from "os";
import * as prompts from "prompts";
import * as ora from "ora";

(async () => {
	let response = {
		os: "current",
		arch: "all"
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
						title: "universal",
						value: "universal"
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
			}
		]);

	if (!response.os) {
		process.exit();
	}

	let icon = "";

	if (
		response.os == "darwin" ||
		(response.os === "current" && platform() === "darwin")
	)
		icon = "./installer_assets/appIcon.icns";
	if (["ia32", "x64"].includes(response.arch) || platform() === "win32")
		icon = "./installer_assets/appIcon.ico";

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
			asar: true,
			// @ts-ignore
			arch: response.arch,
			// @ts-ignore
			platform: response.os
		};

	if (response.arch === "current") delete packagingOptions.arch;
	if (response.os === "current") delete packagingOptions.platform;

	electronPackager(packagingOptions).then(() => {
		spinner.text = "Done!";
		spinner.succeed();
		process.exit();
	});
})();
