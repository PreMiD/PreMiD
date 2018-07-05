const DiscordRPC = require("discord-rpc");
const YouTube = require("simple-youtube-api");
const constants = require("./constants.js");
const { ytm_client_id, api_key } = require("./config.json");
const url = require("url");
const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();

const youtube = new YouTube(api_key);

const rpc = new DiscordRPC.Client({ transport: "ipc" });

let presence,
  videoAuthor = "fetching...",
  videoTitle = "fetching...",
  serviceType,
  startTime = new Date(),
  endTime = new Date(),
  lastTitle,
  lastStartingTime,
  setup = false;

async function updatePresence(data) {
  if (data.currentSongStartTime == lastStartingTime) {
    if ((data.currentSongAuthor && data.currentSongTitle) != undefined) {
    rpc.setActivity({
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

    if (data.url.includes("watch?v=")) {
      if ((data.currentSongAuthor && data.currentSongTitle) != undefined) {
        rpc.setActivity({
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
}

rpc.on("ready", () => {
  constants.presenceReady = true;
});

exports.updatePresence = updatePresence;

rpc.login(ytm_client_id).catch(console.error);
