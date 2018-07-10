const constants = require("../util/constants.js");
const { ytm_client_id } = require("../config.json");
const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();

let presence,
  startTime = new Date(),
  endTime = new Date(),
  lastTitle,
  lastStartingTime;

async function updatePresence(data) {
  if (data.currentSongStartTime == lastStartingTime) {
    if ((data.currentSongAuthor && data.currentSongTitle) != undefined) {
      constants.menuBar.tray.setTitle("");
      constants.ytmrpc.setActivity({
        details: entities.decode(data.currentSongTitle),
        state: entities.decode(data.currentSongAuthor),
        smallImageKey: "pause",
        smallImageText: "Playback paused.",
        largeImageKey: "ytm_lg",
        instance: true
      });
    }
  } else {
    startTime = new Date();
    endTime =
      Math.floor(startTime / 1000) -
      data.currentSongStartTime +
      data.currentSongEndTime;
    lastTitle = data.currentSongTitle;
    lastStartingTime = data.currentSongStartTime;

    if (
      (data.currentSongAuthor && data.currentSongTitle) != undefined &&
      data.currentSongAuthor != "" &&
      data.currentSongTitle != ""
    ) {
      constants.menuBar.tray.setTitle(entities.decode(data.currentSongTitle));
      constants.ytmrpc.setActivity({
        details: entities.decode(data.currentSongTitle),
        state: entities.decode(data.currentSongAuthor),
        smallImageKey: "play",
        smallImageText: "Playing back.",
        largeImageKey: "ytm_lg",
        startTimestamp: startTime,
        endTimestamp: endTime,
        instance: true
      });
    }
  }
}

constants.ytmrpc.on("ready", () => {
  constants.presenceReady = true;
});

exports.updatePresence = updatePresence;

constants.ytmrpc.login(ytm_client_id).catch(console.error);
