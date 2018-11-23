var chalk = require('chalk')


console.log(chalk.yellow("Creating installer for Windows..."))
var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: './out/PreMiD-win32-ia32',
  outputDirectory: './dist/installer/',
  exe: './PreMiD.exe',
  iconUrl: 'https://raw.githubusercontent.com/Timeraa/PreMiD/master/installer_assets/appIcon.ico',
  noMsi: true
});

resultPromise.then(() => console.log(chalk.green("Created installer for Windows!")), (e) => console.log(`No dice: ${e.message}`));