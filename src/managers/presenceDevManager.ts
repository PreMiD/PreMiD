import { readdirSync, readFileSync, unwatchFile, watchFile } from "fs";
import { dialog } from "electron";
import { socket } from "./socketManager";
import { extname } from "path";
import { info } from "../util/debug";

let presenceDevWatchedFiles = [],
  currWatchPath = "";

export async function watchDir(path: string) {
  //* Read dir
  //* Set currWatchDir
  //* Set watched files to files
  //* Add file watcher to each file
  let files = await readdirSync(path);
  currWatchPath = path + "/";
  presenceDevWatchedFiles = files;
  presenceDevWatchedFiles.map(f => {
    //* Watch file
    //* ReadFiles
    watchFile(currWatchPath + f, { interval: 250 }, async () => {
      //* Read dir
      //* ReadFiles
      files = await readdirSync(path);
      readFiles(files, path);
    });
  });
  readFiles(files, path);
}

async function readFiles(files, path) {
  //* Send files to extension
  socket.emit("localPresence", {
    files: await Promise.all(
      files.map(f => {
        if (extname(f) === ".json")
          return {
            file: f,
            contents: JSON.parse(readFileSync(`${path}/${f}`).toString())
          };
        else if (extname(f) === ".js")
          return {
            file: f,
            contents: readFileSync(`${path}/${f}`).toString()
          };
        else return;
      })
    )
  });
}

export async function openFileDialog() {
  //* Open file dialog
  //* If user cancels
  //* Unwatch all still watched files
  //* Watch directory
  let oDialog = await dialog.showOpenDialog(null, {
    title: "Select Presence Folder",
    message:
      "Please select the folder that contains the presence you want to load.\n(metadata.json, presence.js, iframe.js)",
    buttonLabel: "Load Presence",
    properties: ["openDirectory"]
  });
  if (oDialog.canceled) {
    //* Show debug
    //* return
    info("Presence load canceled.");
    return;
  }
  info(`Watching ${oDialog.filePaths[0]}`);
  if (presenceDevWatchedFiles.length > 0)
    await Promise.all(
      presenceDevWatchedFiles.map(f => unwatchFile(currWatchPath + f))
    );

  watchDir(oDialog.filePaths[0]);
}
