import * as Discord from "discord-rpc";
import { app } from "electron";
import { platform } from "os";
import { tray } from "./trayManager";
import { info } from "../util/debug";

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
var loggedInPresences: Array<Presence> = [];

/**
 * Sets the users activity
 * @param presence PresenceData to set activity
 */
export function setActivity(presence: PresenceData) {
  //* Check if theres an active RPC connection that we can use
  var rpc = loggedInPresences.find(p => p.id === presence.clientID);

  //* If we have one, use it
  if (rpc) rpc.rpc.setActivity(presence.presenceData);
  //* Create one and use it
  else
    loginPresence(presence.clientID).then(p =>
      p.rpc.setActivity(presence.presenceData)
    );

  //* If platform is darwin (Mac OS) set trayTitle if theres one
  if (platform() === "darwin") tray.setTitle(presence.trayTitle);

  //TODO remove
  console.log(presence);
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
      loggedInPresences = loggedInPresences.filter(p => p.id !== presence.id);

      reject();
    });

    //* Once ready change ready to true
    presence.rpc.once("ready", () => {
      presence.ready = true;
      resolve(presence);
    });
  });
}

export function clearActivity(clientId: string = undefined) {
  if (clientId) {
    var pTC = loggedInPresences.find(p => p.id === clientId);
    if (pTC) {
      pTC.rpc.clearActivity();
      loggedInPresences.filter(p => p.id !== clientId);
    }

    return;
  }

  loggedInPresences.map(p => p.rpc.clearActivity());
}

export function destroy() {
  if (platform() === "darwin") tray.setTitle("");

  var res = Promise.all(
    loggedInPresences.map((presence: Presence) => presence.rpc.destroy())
  );

  loggedInPresences = [];

  return res;
}

//* Close all presence connections on app exit to prevent issues
app.once("will-quit", () => {
  info("Closing all rpc connections...");
  destroy();
});
