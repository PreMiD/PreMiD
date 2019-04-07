var { app, dialog, BrowserWindow } = require('electron'),
	os = require('os'),
	request = require('request-promise-native'),
	{ existsSync, mkdirSync, createWriteStream } = require('fs'),
	debug = require('./debug'),
	{ exec } = require('child_process');

async function checkForUpdate(sendNotification = false, sendNoUpdateInfo = false) {
	debug.info('Checking for update...');

	request(
		{
			url: 'https://api.premid.app/version',
			json: true
		},
		function(error, response, body) {
			if (error) {
				debug.error('Checking for update... - Error\n' + error.message);
				dialog.showMessageBox({
					type: 'error',
					title: 'PreMiD',
					message: `Error while checking for update!`,
					detail: `${error}`
				});
				return;
			}
			//* Remove v from version
			var gitVersion = body.app;
			//* Compare version
			if (gitVersion > VERSION) {
				global.UPDATEAVAIABLE = gitVersion;

				debug.info(`New version avaiable: V${VERSION} > V${gitVersion}`);

				dialog.showMessageBox(
					{
						type: 'question',
						buttons: [ 'Nah, not now', 'Yes!' ],
						title: 'Update available!',
						message: `PreMiD V${gitVersion} is available for download!\nDo you want to update?`
					},
					function(response) {
						if (response == 1) {
							if (os.platform() == 'darwin') {
								debug.info('Downloading latest release...');
								if (!existsSync(app.getPath('temp') + 'PreMiD/'))
									mkdirSync(app.getPath('temp') + 'PreMiD');
								var oldPercentage;
								app.dock.show();
								var win = new BrowserWindow({ show: false });

								downloadFile({
									remoteFile: `https://github.com/PreMiD/PreMiD/releases/download/v1.2/PreMiD-Mac.dmg`,
									localFile: app.getPath('temp') + 'PreMiD/update.dmg',
									onProgress: function(received, total) {
										var percentage = received * 100 / total;
										if (Math.floor(percentage) != oldPercentage) {
											win.setProgressBar(Math.floor(percentage) / 100);
											oldPercentage = Math.floor(percentage);
											debug.info(`Update download: ${Math.floor(percentage)}%`);
										}
									}
								}).then(function() {
									win.setProgressBar(-1);
									win.close();
									win = null;

									dialog.showMessageBox(null, {
										type: 'info',
										message:
											'Update downloaded successfully, please drag the new version into your applications folder and open it.'
									});

									exec(
										`hdiutil attach ${app.getPath('temp')}PreMiD/update.dmg`,
										(err, stdout, stderr) => {
											if (!err) {
												process.exit(0);
											} else debug.error('oof... something bad happened\n' + err);
										}
									);
									debug.info('Update download: successful');
								});
							} else if (os.platform() != 'win32') {
								debug.info('Unrecognizable system detected... Follow instructions on release.');
								require('electron').shell.openExternal(
									`https://github.com/PreMiD/PreMiD/releases/latest`
								);
							}
							//TODO Handle Windows
							//process.exit(0);
						}
					}
				);
			} else {
				if (os.platform() == 'darwin' && existsSync(app.getPath('temp') + 'PreMiD'))
					require('del')([ app.getPath('temp') + 'PreMiD' ], { force: true });
				global.UPDATEAVAIABLE = false;
				debug.success(`Checking for update... - Up to date`);
				if (sendNoUpdateInfo) {
					dialog.showMessageBox({
						type: 'info',
						title: 'PreMiD',
						message: `You are up to date! (v${VERSION})`
					});
				}
			}
		}
	);

	return UPDATEAVAIABLE;
}

/**
 * Promise based download file method
 */
function downloadFile(configuration) {
	return new Promise(function(resolve, reject) {
		// Save variable to know progress
		var received_bytes = 0;
		var total_bytes = 0;

		var req = request({
			method: 'GET',
			uri: configuration.remoteFile
		});

		var out = createWriteStream(configuration.localFile);
		req.pipe(out);

		req.on('response', function(data) {
			// Change the total bytes value to get progress later.
			total_bytes = parseInt(data.headers['content-length']);
		});

		// Get progress if callback exists
		if (configuration.hasOwnProperty('onProgress')) {
			req.on('data', function(chunk) {
				// Update the received bytes
				received_bytes += chunk.length;

				configuration.onProgress(received_bytes, total_bytes);
			});
		} else {
			req.on('data', function(chunk) {
				// Update the received bytes
				received_bytes += chunk.length;
			});
		}

		req.on('end', function() {
			resolve();
		});
	});
}

function showProgress(received, total) {
	var percentage = received * 100 / total;
	console.log(percentage + '% | ' + received + ' bytes out of ' + total + ' bytes.');
}

module.exports.checkForUpdate = checkForUpdate;
