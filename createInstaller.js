var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: './out/YT Presence-win32-x64',
  outputDirectory: './dist/windows/',
  exe: './YT Presence.exe',
  iconUrl: 'https://raw.githubusercontent.com/Timeraa/YT-Presence/master/appIcon.ico',
  noMsi: true
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));