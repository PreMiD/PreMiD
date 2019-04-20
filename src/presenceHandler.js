var DiscordRPC = require('discord-rpc'),
	{ app, dialog } = require('electron'),
	express = require('express');

//* Create server to listen for extension
var extension = express(),
	http = require('http'),
	socketServer = http.createServer(extension),
	io = require('socket.io')(socketServer);

//* Load Config
const Config = require('electron-store');

var options = new Config({
	name: 'options'
});

var debug = require('./util/debug');

//* Define needed variables
var lastKeepAliveSwitch = 0;

//* Keep alive check to automatically remove presence if browser not running/not using YT
setInterval(keepAliveCheck, 1000);

async function keepAliveCheck() {
	//* Allow up to 5 seconds of potential browser lag
	if (lastKeepAliveSwitch > 5) {
		setupServices.forEach((service) => {
			service.rpc.destroy();
		});
		setupServices = [];
		serviceLogins = [];
		if (PLATFORM == 'darwin') TRAY.setTitle('');
	}
	lastKeepAliveSwitch += 1;
}

//* Listen on port 3020
socketServer.listen(3020, () => {
	debug.success(`Listening on Port 3020`);
});

socketServer.on('error', (e) => {
	if (e.code == 'EADDRINUSE')
		dialog.showMessageBox({
			type: 'error',
			title: 'Whoopsie! Port already in use...',
			message: `Whoopsie! Port 3020 is already in use... Is PreMiD running already?`
		});
});

//* Socket connection event
io.on('connection', function(socket) {
	global.EXTENSIONSOCKET = socket;
	BROWSERCONNECTIONSTATE = 'CONNECTED';

	socket.on('playBackChange', updatePresence);
	socket.on('updateData', updatePresence);
	socket.on('optionUpdate', require('./util/settingsHandler'));
});

var setupServices = [],
	serviceLogins = [],
	presencePauseSwitch = 0;

//* Updates the presence with the incomming data
async function updatePresence(data) {
	lastKeepAliveSwitch = 0;

	if (setupServices.length > 0 && data.hidden != undefined && data.hidden == true) {
		setupServices.map((svice) => svice.rpc.clearActivity());
		return;
	}

	var setupService = setupServices.find((svice) => svice.serviceName == data.service);

	if (!data.playback) presencePauseSwitch++;
	else presencePauseSwitch = 0;
	if (presencePauseSwitch >= 60) {
		if (setupService != null) {
			require('./util/shortcutHandler').unregister();
			setupService.rpc.clearActivity();
			if (PLATFORM == 'darwin') TRAY.setTitle('');
		}
	} else {
		if (setupService) {
			require('./util/shortcutHandler').register();
			if (options.get('titleMenubar'))
				if (PLATFORM == 'darwin' && data.playback) TRAY.setTitle(data.trayTitle);
				else TRAY.setTitle('');
			setupService.rpc.setActivity(data.presenceData);
		} else {
			tryLogin(data.service, data.clientID);
			serviceLogins.push({
				serviceName: data.service,
				intervalID: setInterval(() => tryLogin(data.service, data.clientID), 10 * 1000)
			});
		}
	}
}

/**
 * Try to login to RPC until connected
 */
async function tryLogin(service, clientID) {
	setupServices.push({ rpc: new DiscordRPC.Client({ transport: 'ipc' }), serviceName: service, ready: false });
	var serviceRPC = setupServices.find((svice) => svice.serviceName == service);
	serviceRPC.rpc.login({ clientId: clientID }).catch((err) => debug.error(`RPC: ${err.message}`));
	serviceRPC.rpc.on('ready', () => {
		clearInterval(serviceLogins.find((svice) => svice.serviceName == service).intervalID);
		serviceRPC.ready = true;
	});
}

app.on('will-quit', () => {
	debug.info('Closing all active RPC connections...');
	Promise.all(
		setupServices.map((service) => {
			service.rpc.clearActivity();
			service.rpc.destroy();
			return service;
		})
	).then((collection) => {
		debug.success(
			'Closing all active RPC connections... - Done | ' +
				collection.map((service) => service.serviceName).join(', ')
		);
	});
});
