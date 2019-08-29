import { app, globalShortcut } from "electron";
import { socket } from "./socketManager";
import { info, error, success } from "./../util/debug";

var playPauseSwitch = null,
  playPauseTimeout = null;

/**
 * Register media keyboard shortcuts
 */
export function init() {
  //* If registered or not enabled return
  //* Bind mediaplaypause
  //* Bind medianexttrack
  //* Bind mediaprevioustrack
  //* Debug if bound failed/succeeded
  if (
    globalShortcut.isRegistered("mediaplaypause") ||
    globalShortcut.isRegistered("medianexttrack") ||
    globalShortcut.isRegistered("mediaprevioustrack")
  )
    return;
  var mpp = globalShortcut.register("mediaplaypause", () => {
      //* Return if not connected
      //* if playPause timeout not set set it - 500ms timeout > switch play/pause, nextrack/previoustrack
      //* Increase switch each press
      //* Show debug
      if (!socket.connected) return;
      if (!playPauseTimeout)
        playPauseTimeout = setTimeout(handlePlayPause, 500);
      playPauseSwitch++;
      info("Media Play/Pause");
    }),
    mnt = globalShortcut.register("medianexttrack", () => {
      //* send keybind to app if connected
      if (socket.connected)
        socket.emit("keybinds", {
          playback: "nextTrack"
        });
      info("Media Nextrack");
    }),
    mpt = globalShortcut.register("mediaprevioustrack", () => {
      //* send keybind to app if connected
      if (socket.connected)
        socket.emit("keybinds", {
          playback: "previousTrack"
        });
      info("Media Previoustrack");
    });
  if (mpp && mnt && mpt) success("Registered keyboard shortcuts.");
  else error("Registering keyboard shortcuts failed.");
}

/**
 * Handle Play/Pause media key after 500ms timeout
 */
function handlePlayPause() {
  //* Switch case -> emit
  //* Reset switch var
  //* Reset timeout var
  switch (playPauseSwitch) {
    case 1:
      socket.emit("keybinds", { playback: "pause" });
      break;
    case 2:
      socket.emit("keybinds", { playback: "nextTrack" });
      break;
    case 3:
      socket.emit("keybinds", { playback: "previousTrack" });
      break;
  }
  playPauseSwitch = null;
  playPauseTimeout = null;
}

/**
 * Unregister all globalShortcuts set by app
 */
export function deinit() {
  //* Return if they aren't bound
  //* Clear keybinds
  //* Show debug
  if (
    !globalShortcut.isRegistered("mediaplaypause") &&
    !globalShortcut.isRegistered("medianexttrack") &&
    !globalShortcut.isRegistered("mediaprevioustrack")
  )
    return;
  globalShortcut.unregisterAll();
  info("Cleared keybinds");
}

//* If app will quit deinit keybinds
app.once("will-quit", deinit);
