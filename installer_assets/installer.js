var os = require('os');
var os = os.platform();

var path = require('path');
var chalk = require('chalk');

if (os == 'darwin') {
	console.log(chalk.yellow('Creating installer for Mac OS...'));
	var createDMG = require('electron-installer-dmg');

	createDMG(
		{
			appPath: '../out/PreMiD-darwin-x64/PreMiD.app',
			name: 'PreMiD',
			background: './dmg-background.png',
			icon: './appIcon.icns',
			contents: [
				{ x: 500, y: 250, type: 'link', path: '/Applications' },
				{ x: 175, y: 250, type: 'file', path: path.join(__dirname, '../out/PreMiD-darwin-x64/PreMiD.app') }
			],
			out: '../dist/installer/',
			overwrite: true
		},
		function done(err) {
			if (err) console.error(err);
			else console.log(chalk.green('Created installer for Mac OS!'));
		}
	);
} else if (os == 'win32') {
	console.log(chalk.yellow('Creating installer for Windows...'));
	var electronInstaller = require('electron-winstaller');

	resultPromise = electronInstaller.createWindowsInstaller({
		appDirectory: './out/PreMiD-win32-x64',
		outputDirectory: './dist/installer/',
		exe: './PreMiD.exe',
		iconUrl: 'https://raw.githubusercontent.com/Timeraa/PreMiD/master/installer_assets/appIcon.ico',
		noMsi: true
	});

	resultPromise.then(
		() => console.log(chalk.green('Created installer for Windows!')),
		(e) => console.log(`No dice: ${e.message}`)
	);
}
