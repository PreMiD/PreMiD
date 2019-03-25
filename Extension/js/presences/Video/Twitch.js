var playback = false,
	videoTitle,
	videoAuthor,
	videoTimestamps,
	playbackBoolean,
	smallImageKey,
	smallImageText,
	urlForVideo,
	lastURL = null;

/**
 * Handles Media Key controls
 * @param {data} data Data passed by socketConnector.js
 */
async function handleMediaKeys(data) {
	if (playback) {
		switch (data.mediaKeys) {
			case 'pause':
				playbackBoolean ? $('.player-video video')[0].pause() : $('.player-video video')[0].play();
				break;
		}
	}
}

/**
 * Updates the Presence data and sends it back
 * to the background.js for further interaction
 */
async function updateData() {
	urlForVideo = document.location.href;

	playback = $('.player-video video')[0] != undefined && $('.tw-font-size-4').innerText;

	//* If page has all required propertys
	if (playback) {
		if (urlForVideo != lastURL) {
			lastURL = urlForVideo;
			startTimeStamp = Math.floor(Date.now() / 1000);
		}

		videoTitle = $('.tw-font-size-4').innerText;
		videoAuthor = $('.channel-header__user-avatar h5').innerHTML;
		playbackBoolean = !$('.player-video video').paused;
		smallImageKey = playbackBoolean ? 'play' : 'pause';
		smallImageText = playbackBoolean
			? await getString('presence.playback.playing')
			: await getString('presence.playback.paused');

		var data = {
			clientID: '501021996336021504',
			presenceData: {
				details: $('<div/>').html(videoTitle).text(),
				state: $('<div/>').html(videoAuthor).text(),
				largeImageKey: 'twitch_lg',
				largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
				smallImageKey: smallImageKey,
				smallImageText: smallImageText
			},
			trayTitle: $('<div/>').html(videoTitle).text(),
			playback: playbackBoolean,
			service: 'Twitch'
		};

		if (playbackBoolean) {
			data.presenceData.startTimestamp = startTimeStamp;
		} else {
			delete data.presenceData.startTimestamp;
		}

		chrome.runtime.sendMessage({ presence: data });
	}
}
