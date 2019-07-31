import socketIo from "socket.io";
import { createServer, Server } from "http";
import { app, dialog } from "electron";
import { success, error } from "../util/debug";
import {
  updatePresence,
  destroy as destroyRPCConnections,
  clearPresenceTimeout
} from "./discordManager";
import { deinit as deinitInputs } from "./inputManager";
import { update as updateSettings } from "./settingsManager";
import { openFileDialog } from "./presenceDevManager";

export var io: socketIo.Server;
export var socket: socketIo.Socket;
export var server: Server;

export function init() {
  return new Promise(resolve => {
    server = createServer();
    io = socketIo(server, { serveClient: false });

    server.listen(3020, () => {
      resolve();
      success("Successfully bound port.");
    });

    //* On Socket errors
    server.on("error", socketError);

    //* On socket connections
    io.on("connection", socketConnection);
  });
}

var retryDiscordClient = null;
function socketConnection(cSocket: socketIo.Socket) {
  //* Show debug
  success("Connected to extension.");

  //* Set exported socket variable to current socket
  socket = cSocket;

  //* Handle updateData event
  socket.on("updateData", updatePresence);

  //* Handle settingsUpdate
  socket.on("optionUpdate", updateSettings);

  //* Handle presenceDev
  socket.on("watchPresenceFolder", openFileDialog);

  socket.once("disconnect", () => {
    //* Clear retryDiscordClient interval
    if (retryDiscordClient) {
      clearInterval(retryDiscordClient);
      retryDiscordClient = null;
    }

    //* Clear timout interval if set
    clearPresenceTimeout();

    //* Close open rpc connections
    destroyRPCConnections().catch(() => {});

    //* Show debug
    error("Disconnected from extension.");

    //* deinit input bindings
    deinitInputs();
  });
}

function socketError(e: any) {
  error(e.message);

  //* Focus app so user notices
  app.focus();

  //* If port in use
  if (e.code === "EADDRINUSE") {
    //* Show error dialog
    dialog.showErrorBox(
      "Error while binding port",
      `${app.getName()} could not bind to port ${
        e.port
      }. Is ${app.getName()} running already?`
    );
  }

  app.exit(0);
}
