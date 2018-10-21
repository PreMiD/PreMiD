var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: './out/PreMiD-win32-x64',
  outputDirectory: './dist/windows/',
  exe: './PreMiD.exe',
  authors: 'Timeraa',
  iconUrl: 'https://raw.githubusercontent.com/Timeraa/PreMiD/master/appIcon.ico',
  noMsi: true,
  setupIcon: 'appIcon.ico',
  icon: 'appIcon.ico'
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));