import * as Discord from "discord-rpc";
import { app } from "electron";
import { platform } from "os";
import { tray } from "./trayManager";
import { error, info } from "../util/debug";
import { init as initInputs, deinit as deinitInputs } from "./inputManager";
import { settings } from "./settingsManager";

interface Presence {
  /**
   * Client ID of presence
   */
  id: string;
  /**
   * Rich Procedual call connection
   */
  rpc: Discord.Client;
  /**
   * Connection ready?
   */
  ready: Boolean;
}

interface PresenceData {
  /**
   * Client ID of presence
   */
  clientID: string;
  /**
   * Tray title to be shown in Mac OS tray
   */
  trayTitle: string;
  /**
   * service name of presence
   * @deprecated
   */
  service: string;
  /**
   * Determines if the service is currently playing something back or not, if false it will automatically hide after 1 minute
   */
  playback: boolean;
  /**
   * Discord Presence which gets sent directly to Discord app
   */
  presenceData: Discord.Presence;
  /**
   * Determines if the service should be hidden (clearActivity)
   */
  hidden: boolean;
  /**
   * Determines if the service is mediaKey able / uses them
   */
  mediaKeys: boolean;
}

//* Define Presence array
var loggedInPresences: Array<Presence> = [],
  errorCount = 0,
  //* Limit in seconds before clearing presence
  presenceTimeoutLimit = 60,
  presencePlaybackSwitch = presenceTimeoutLimit,
  presenceTimeoutInterval = null;

//* Close all presence connections on app exit to prevent issues
app.once("will-quit", () => {
  info("Closing all rpc connections...");
  loggedInPresences.map((presence: Presence) => presence.rpc.destroy());
});

/**
 * Clear PresenceTimout interval
 */
export function clearPresenceTimeout() {
  if (!presenceTimeoutInterval) return;

  clearInterval(presenceTimeoutInterval);
  presenceTimeoutInterval = null;
}

/**
 * Destroys all rpc connections if no playback change since set timeout limit
 */
function presenceTimeout() {
  //* Increace if limit not reached
  if (presencePlaybackSwitch < presenceTimeoutLimit) presencePlaybackSwitch++;

  if (presencePlaybackSwitch == presenceTimeoutLimit) {
    //* clear input bindings
    deinitInputs();

    //* Close active rpc connections
    destroy();

    //* Clear Presence Timeout interval
    clearPresenceTimeout();
  }
}

/**
 * Update Presence function handles data from extension
 * Opens rpc connection if none exists
 * Sets activity on discord
 */
export async function updatePresence(presenceData: PresenceData) {
  //* If playback == true set to 0, continue
  //* Else if playBackSwitch is above limit return
  if (presenceData.playback) presencePlaybackSwitch = 0;
  else if (presencePlaybackSwitch == presenceTimeoutLimit) return;

  //* Hide presence if specified
  if (typeof presenceData.hidden === "boolean" && presenceData.hidden) {
    //* Clear TrayTitle
    tray.setTitle("");

    //* Unregister keybinds
    deinitInputs();

    //* Clear activity for all presences
    loggedInPresences.map(presence =>
      presence.rpc
        .clearActivity()
        .catch(() => errorCount++)
        .then(() => (errorCount = 0))
    );
    return;
  }

  //* Check if presence found
  var presence = loggedInPresences.find(
    lIP => lIP.id === presenceData.clientID
  );

  //* If not log it in
  if (!presence) {
    presence = await loginPresence(presenceData.clientID);
    if (presence == null) return;
  } else if (!presence.ready) return;

  //* Set timeout interval if not already
  if (!presenceTimeoutInterval)
    presenceTimeoutInterval = setInterval(presenceTimeout, 1000);

  //* set input bindings
  if (presenceData.mediaKeys) initInputs();
  else deinitInputs();

  //* Set Activity
  presence.rpc
    .setActivity(presenceData.presenceData)
    .catch(() => errorCount++)
    .then(() => (errorCount = 0));

  //* Set tray title if os == darwin (Mac OS)
  if (platform() == "darwin" && settings.get("trayTitle", true)) {
    presenceData.playback
      ? tray.setTitle(presenceData.trayTitle)
      : tray.setTitle("");
  }

  //* If setActivity failed 10 times (10 seconds) close all rpc connections
  if (errorCount >= 10) {
    error("Connection to Discord lost, reconnecting...");
    destroy().then(() => {
      errorCount = 0;
    });

    //* Stop timeout interval if set
    clearPresenceTimeout();
  }

  //* Increase counter if loggedInPresences > 0
  if (loggedInPresences.length > 0) errorCount++;
}

/**
 * Create RPC connection to discord
 * @param clientId client ID of presence
 */
function loginPresence(clientId: string) {
  return new Promise<Presence | null>((resolve, reject) => {
    var presence: Presence = {
      id: clientId,
      rpc: new Discord.Client({ transport: "ipc" }),
      ready: false
    };

    //* Add presence to object
    loggedInPresences.push(presence);

    //* Try login with client id
    presence.rpc.login({ clientId: clientId }).catch(() => {
      destroy();
      resolve();
    });

    //* Once ready change ready to true
    presence.rpc.once("ready", () => {
      presence.ready = true;
      resolve(presence);
    });
  });
}

/**
 * Destroy open rpc connections
 */
export function destroy() {
  return new Promise((resolve, reject) => {
    if (loggedInPresences.length == 0) {
      reject();
      return;
    }

    if (platform() == "darwin") tray.setTitle("");

    Promise.all(
      loggedInPresences.map((presence: Presence) => {
        presence.rpc.destroy().catch(() => {});
      })
    ).then(resolve);

    loggedInPresences = [];
  });
}
