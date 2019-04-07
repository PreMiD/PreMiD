const Config = require('electron-store');
const options = new Config({
	name: 'options'
});

var mediaControls = require('./shortcutHandler');

module.exports = async (data) => {
	console.log(data);
	if (options.get('titleMenubar') != data.titleMenubar) {
		options.set('titleMenubar', data.titleMenubar);
		if (PLATFORM == 'darwin' && !data.titleMenubar) TRAY.setTitle('');
	}

	if (options.get('autoUpdate') != data.checkForUpdates) options.set('autoUpdate', data.checkForUpdates);

	if (options.get('autoLaunch') != data.systemStartup) {
		options.set('autoLaunch', data.systemStartup);
		require('./autoLaunch').init();
	}

	console.log(options.get('mediaKeys') != data.mediaKeys);
	if (options.get('mediaKeys') != data.mediaKeys) {
		options.set('mediaKeys', data.mediaKeys);
		if (data.mediaKeys) mediaControls.register();
		else mediaControls.unregister();
	}

	if (options.get('titleMenubar') != data.titleMenubar) {
		options.set('titleMenubar', data.titleMenubar);
		if (!data.titleMenubar) TRAY.setTitle('');
	}

	//console.log(data.options)
};
