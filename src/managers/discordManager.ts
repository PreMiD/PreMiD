import { Client } from "discord-rpc";
import { app } from "electron";
import { platform } from "os";
import { tray } from "./trayManager";
import { info } from "../util/debug";

//* Import custom types
import Presence from "../../@types/PreMiD/Presence";
import PresenceData from "../../@types/PreMiD/PresenceData";

//* Define Presence array
let loggedInPresences: Array<Presence> = [];

/**
 * Sets the user's activity
 * @param presence PresenceData to set activity
 */
export function setActivity(presence: PresenceData) {
  //* If platform is darwin (Mac OS) set trayTitle if theres one
  //* Check if theres an active RPC connection that we can use
  //* If we have one, use it
  //* Else create one and use it
  //* Show debug
  if (platform() === "darwin" && presence.trayTitle)
    tray.setTitle(presence.trayTitle);
  let rpc = loggedInPresences.find(p => p.clientId === presence.clientId);
  if (rpc) rpc.rpc.setActivity(presence.presenceData).catch(destroy);
  else
    loginPresence(presence.clientId).then(p =>
      p.rpc.setActivity(presence.presenceData).catch(destroy)
    );
  info("setActivity");
}

/**
 * Clear a user's activity
 * @param clientId clientId of presence to clear
 */
export function clearActivity(clientId: string = undefined) {
  //* Clear tray title
  //* If clientId set
  //* Else map through presences and clear them
  //* Show Debug
  if (platform() === "darwin") tray.setTitle("");
  if (clientId) {
    //* Check if this presence is logged in
    //* If it is clear its activity
    //* Return to prevent further actions
    let pTC = loggedInPresences.find(p => p.clientId === clientId);
    if (pTC) pTC.rpc.clearActivity().catch(destroy);
    return;
  }
  loggedInPresences.map(p => p.rpc.clearActivity().catch(destroy));
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
    //* Destroy all clients when Discord closed (My issue #42)
    let presence: Presence = {
      clientId: clientId,
      rpc: new Client({ transport: "ipc" }),
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
    // @ts-ignore
    presence.rpc.once("disconnected", destroy);
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
  if (platform() === "darwin" && typeof tray !== "undefined") tray.setTitle("");
  let res = Promise.all(
    loggedInPresences.map((presence: Presence) =>
      presence.rpc.destroy().catch(() => {})
    )
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
