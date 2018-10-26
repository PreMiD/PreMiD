var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: './out/PreMiD-win32-x64',
  outputDirectory: './dist/windows/',
  exe: './PreMiD.exe',
  iconUrl: 'https://raw.githubusercontent.com/Timeraa/YT-Presence/master/appIcon.ico',
  noMsi: true
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));