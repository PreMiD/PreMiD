import * as Discord from "discord-rpc";
import { app } from "electron";
import { platform } from "os";
import { tray } from "./trayManager";
import { info } from "../util/debug";
import { init as initKeybinds, deinit as deinitKeybinds } from "./inputManager";

//* Define Presence array
var loggedInPresences: Array<Presence> = [];

/**
 * Sets the user's activity
 * @param presence PresenceData to set activity
 */
export function setActivity(presence: PresenceData) {
  //* If presence.mediakeys defined & enabled, init
  //* If platform is darwin (Mac OS) set trayTitle if theres one
  //* Check if theres an active RPC connection that we can use
  //* If we have one, use it
  //* Else create one and use it
  //* Show debug
  if (presence.mediaKeys) initKeybinds();
  else deinitKeybinds();
  if (platform() === "darwin") tray.setTitle(presence.trayTitle);
  var rpc = loggedInPresences.find(p => p.clientId === presence.clientId);
  if (rpc) rpc.rpc.setActivity(presence.presenceData);
  else
    loginPresence(presence.clientId).then(p =>
      p.rpc.setActivity(presence.presenceData)
    );
  info("setActivity");
}

/**
 * Clear a user's activity
 * @param clientId clientId of presence to clear
 */
export function clearActivity(clientId: string = undefined) {
  //* Clear keybinds
  //* Clear tray title
  //* If clientId set
  //* Else map through presences and clear them
  //* Show Debug
  deinitKeybinds();
  if (platform() === "darwin") tray.setTitle("");
  if (clientId) {
    //* Check if this presence is logged in
    //* If it is clear its activity
    //* Return to prevent further actions
    var pTC = loggedInPresences.find(p => p.clientId === clientId);
    if (pTC) pTC.rpc.clearActivity();
    return;
  }
  loggedInPresences.map(p => p.rpc.clearActivity());
  info("clearActivity");
}

/**
 * Create RPC connection to discord
 * @param clientId client ID of presence
 */
function loginPresence(clientId: string) {
  //* Return promise that will resolve to either Presence or null
  return new Promise<Presence>((resolve, reject) => {
    //* Create presence object
    //* Add presence to object
    //* Try login with client id
    //* Once RPC connection is ready
    var presence: Presence = {
      clientId: clientId,
      rpc: new Discord.Client({ transport: "ipc" }),
      ready: false
    };
    loggedInPresences.push(presence);
    presence.rpc.login({ clientId: clientId }).catch(() => {
      //* If couldn't log in remove it from loggedInPresences
      //* Reject promise
      loggedInPresences = loggedInPresences.filter(
        p => p.clientId !== presence.clientId
      );
      reject();
    });
    presence.rpc.once("ready", () => {
      //* Update status
      //* Resolve with presence
      presence.ready = true;
      resolve(presence);
    });
  });
}

/**
 * Destroys all rpc connections
 */
export function destroy() {
  //* Clear tray title
  //* Map through loggedInPresences and destroy their rpcs
  //* Set loggedInPresences to new Array
  //* Return the promise
  if (platform() === "darwin") tray.setTitle("");
  var res = Promise.all(
    loggedInPresences.map((presence: Presence) => presence.rpc.destroy())
  );
  loggedInPresences = [];
  return res;
}

//* if app will quit
app.once("will-quit", () => {
  //* Show debug
  //* Destroy all connections
  info("Closing rpc connections");
  destroy();
});

//TODO Try to move this to a type file
interface Presence {
  /**
   * Client ID of presence
   */
  clientId: string;
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
  clientId: string;
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
