import { app, globalShortcut } from "electron";
import { socket } from "./socketManager";
import { info, error, success } from "./../util/debug";
import { settings } from "./settingsManager";

var playPauseSwitch = null,
  playPauseTimeout = null;

//* If app will quit deinit shortcuts
app.once("will-quit", deinit);

/**
 * Register media keyboard shortcuts
 */
export function init() {
  //* Check if registered
  if (
    globalShortcut.isRegistered("mediaplaypause") ||
    !settings.get("mediaKeys", true)
  )
    return;

  //* Register shortcuts
  var mpp = globalShortcut.register("mediaplaypause", () => {
    //* No need to test if not connected
    if (!socket.connected) return;

    //* Only set this once
    //* 500ms timeout > switch play/pause, nextrack/previoustrack
    if (!playPauseTimeout) playPauseTimeout = setTimeout(handlePlayPause, 500);

    //* Increase switch each press
    playPauseSwitch++;
  });

  var mnt = globalShortcut.register("medianexttrack", () => {
    if (socket.connected)
      socket.emit("mediaKeyHandler", { playback: "nextTrack" });
  });

  var mpt = globalShortcut.register("mediaprevioustrack", () => {
    if (socket.connected)
      socket.emit("mediaKeyHandler", { playback: "previousTrack" });
  });

  //* Debug either success/error
  if (mpp && mnt && mpt) success("Registered keyboard shortcuts.");
  else error("Registering keyboard shortcuts failed.");
}

/**
 * Handle Play/Pause media key after 500ms timeout
 */
function handlePlayPause() {
  switch (playPauseSwitch) {
    case 1:
      socket.emit("mediaKeyHandler", { playback: "pause" });
      break;
    case 2:
      socket.emit("mediaKeyHandler", { playback: "nextTrack" });
      break;
    case 3:
      socket.emit("mediaKeyHandler", { playback: "previousTrack" });
      break;
  }

  //* Reset switch & timeout vars
  playPauseSwitch = null;
  playPauseTimeout = null;
}

/**
 * Unregister all globalShortcuts set by app
 */
export function deinit() {
  //* Check if bound
  if (!globalShortcut.isRegistered("mediaplaypause")) return;

  //* Clear shortcuts
  info("Clearing keyboard shortcuts...");
  globalShortcut.unregisterAll();
}
