const Config = require('electron-store');
const userSettings = new Config({
	name: 'userSettings'
});

var debug = require('./debug');

var { globalShortcut, app } = require('electron');

module.exports.register = async () => {
	if (!userSettings.get('mediaControls')) return;
	debug.info('Registering keyboard shortcuts...');

	var nxtTrack = globalShortcut.register('medianexttrack', () => {
		if (EXTENSIONSOCKET != null) EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: 'nextTrack' });
	});

	var pauseSkipToggle = 0;
	var ppTrack = globalShortcut.register('mediaplaypause', () => {
		pauseSkipToggle++;
		setTimeout(() => {
			if (EXTENSIONSOCKET != null && pauseSkipToggle == 1)
				EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: 'pause' });
			if (EXTENSIONSOCKET != null && pauseSkipToggle == 2)
				EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: 'nextTrack' });
			if (EXTENSIONSOCKET != null && pauseSkipToggle == 3)
				EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: 'previousTrack' });
			pauseSkipToggle = 0;
		}, 500);
	});

	var prvTrack = globalShortcut.register('mediaprevioustrack', () => {
		if (EXTENSIONSOCKET != null) EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: 'previousTrack' });
	});

	if ((ppTrack, nxtTrack, prvTrack)) debug.success('Registering keyboard shortcuts... - Done');
	else debug.error('Registering keyboard shortcuts... - Error');
};

module.exports.unregister = async () => {
	debug.info('Unregistering keyboard shortcuts...');
	if (require('os').platform() == 'darwin') {
		app.relaunch();
		app.exit(0);
	} else globalShortcut.unregisterAll();
	debug.success('Unregistering keyboard shortcuts... - Done');
};

app.on('will-quit', () => {
	debug.info('Unregistering keyboard shortcuts...');
	globalShortcut.unregisterAll();
	debug.success('Unregistering keyboard shortcuts... - Done');
});
