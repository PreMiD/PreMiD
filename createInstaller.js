var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: '/out/YT Presence-win32-64x',
  outputDirectory: '/dist/installerWindows',
  authors: 'Timeraa',
  exe: './YT-Presence.exe'
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));