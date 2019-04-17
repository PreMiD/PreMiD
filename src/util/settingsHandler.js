const Config = require('electron-store');
const options = new Config({
	name: 'options'
});

var mediaControls = require('./shortcutHandler'),
	{ success } = require('../util/debug');

module.exports = async (data) => {
	success('Saved settings from extension');
	if (options.get('titleMenubar') != data.titleMenubar) {
		options.set('titleMenubar', data.titleMenubar);
		if (PLATFORM == 'darwin' && !data.titleMenubar) TRAY.setTitle('');
	}

	if (options.get('autoUpdate') != data.autoUpdate) options.set('autoUpdate', data.autoUpdate);

	if (options.get('autoLaunch') != data.autoLaunch) {
		options.set('autoLaunch', data.autoLaunch);
		require('./autoLaunch').init();
	}

	if (options.get('mediaKeys') != data.mediaKeys) {
		options.set('mediaKeys', data.mediaKeys);
		if (data.mediaKeys) mediaControls.register();
		else mediaControls.unregister();
	}

	if (options.get('titleMenubar') != data.titleMenubar) {
		options.set('titleMenubar', data.titleMenubar);
		if (!data.titleMenubar) TRAY.setTitle('');
	}
};
