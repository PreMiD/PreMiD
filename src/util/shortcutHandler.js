var Config = require('electron-store'),
	options = new Config({
		name: 'options'
	}),
	debug = require('./debug'),
	{ globalShortcut, app } = require('electron'),
	pauseSkipToggle = 0,
	ppTimeout = null;

module.exports.register = async () => {
	if (!options.get('mediaKeys')) return;
	debug.info('Registering keyboard shortcuts...');

	var nxtTrack = globalShortcut.register('medianexttrack', () => {
		if (EXTENSIONSOCKET != null) EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: 'nextTrack' });
	});

	var ppTrack = globalShortcut.register('mediaplaypause', () => {
		if (pauseSkipToggle < 3) pauseSkipToggle++;
		else {
			clearTimeout(ppTimeout);
			handlePP();
		}
		if (!ppTimeout) ppTimeout = setTimeout(handlePP, 500);
	});

	var prvTrack = globalShortcut.register('mediaprevioustrack', () => {
		if (EXTENSIONSOCKET != null) EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: 'previousTrack' });
	});

	if ((ppTrack, nxtTrack, prvTrack)) debug.success('Registering keyboard shortcuts... - Done');
	else debug.error('Registering keyboard shortcuts... - Error');
};

function handlePP() {
	ppTimeout = null;
	if (EXTENSIONSOCKET != null && pauseSkipToggle == 1) EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: 'pause' });
	if (EXTENSIONSOCKET != null && pauseSkipToggle == 2)
		EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: 'nextTrack' });
	if (EXTENSIONSOCKET != null && pauseSkipToggle == 3)
		EXTENSIONSOCKET.emit('mediaKeyHandler', { playback: 'previousTrack' });
	pauseSkipToggle = 0;
}

module.exports.unregister = async () => {
	debug.info('Unregistering keyboard shortcuts...');
	globalShortcut.unregisterAll();
	debug.success('Unregistering keyboard shortcuts... - Done');
};

app.on('will-quit', () => {
	debug.info('Unregistering keyboard shortcuts...');
	globalShortcut.unregisterAll();
	debug.success('Unregistering keyboard shortcuts... - Done');
});
