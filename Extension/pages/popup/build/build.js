'use strict';
require('./check-versions')();

require('dotenv').load();
const Discord = require('discord.js');

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');

const spinner = ora('Building for production...');
spinner.start();

if (process.env.webhookID !== undefined) {
	var infoHook = new Discord.WebhookClient(process.env.webhookID, process.env.webhookToken);
	sendWebhookInfo('start');
}

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), (err) => {
	if (err) throw err;
	webpack(webpackConfig, (err, stats) => {
		spinner.stop();
		if (err) throw err;
		process.stdout.write(
			stats.toString({
				colors: true,
				modules: false,
				children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
				chunks: false,
				chunkModules: false
			}) + '\n\n'
		);

		if (stats.hasErrors()) {
			console.log(chalk.red('  Build failed with errors.\n'));
			sendWebhookInfo('error');
			process.exit(1);
		}

		console.log(chalk.cyan('  Build complete.\n'));
		console.log(
			chalk.yellow(
				'  Tip: built files are meant to be served over an HTTP server.\n' +
					"  Opening index.html over file:// won't work.\n"
			)
		);
		sendWebhookInfo('success');
	});
});

function sendWebhookInfo(type) {
	if (process.env.webhookID !== undefined) {
		var title, description, color;

		switch (type) {
			case 'start':
				title = `${process.env.NODE_ENV == 'production' ? '' : 'BETA '}WEBSITE BUILD STARTED`;
				description =
					'Server received update from Git and will now try to build the latest production release...';
				color = '#ffff00';
				break;

			case 'success':
				title = `${process.env.NODE_ENV == 'production' ? '' : 'BETA '}WEBSITE BUILD SUCCEEDED`;
				description = 'Server received update from Git and successfully built the latest production release!';
				color = '#00CC00';
				break;

			case 'error':
				title = `${process.env.NODE_ENV == 'production' ? '' : 'BETA '}WEBSITE BUILD FAILED`;
				description =
					'Server received update from Git and will could not build the latest production release... :L';
				color = '#ff0000';
				break;
		}

		var embed = new Discord.RichEmbed().setTitle(title).setDescription(description).setColor(color).setTimestamp();

		infoHook.send(embed);
	}
}
