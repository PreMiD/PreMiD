var { execFile } = require('child_process'),
	os = require('os').platform();

if (os == 'win32') os = 'windows';

execFile('C:\\Program Files (x86)\\BitRock InstallBuilder Enterprise 19.4.1\\autoupdate\\bin\\customize.exe', [
	'build',
	'./updater.xml',
	os
]);

execFile('C:\\Program Files (x86)\\BitRock InstallBuilder Enterprise 19.4.1\\bin\\builder-cli.exe', [
	'quickbuild',
	'./PreMiD.xml',
	os
]);
