var { execFile } = require('child_process'),
	path = require('path');

if (process.argv.length < 3) {
	return;
}

execFile('C:\\Program Files (x86)\\BitRock InstallBuilder Enterprise 19.4.1\\autoupdate\\bin\\customize.exe', [
	'build',
	path.resolve('installer_assets/updater.xml'),
	process.argv[2]
]);

execFile('C:\\Program Files (x86)\\BitRock InstallBuilder Enterprise 19.4.1\\bin\\builder-cli.exe', [
	'quickbuild',
	path.resolve('installer_assets/PreMiD.xml'),
	process.argv[2]
]);
