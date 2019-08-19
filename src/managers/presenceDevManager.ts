import { readdirSync, readFileSync, unwatchFile, watchFile } from "fs";
import { dialog, app } from "electron";
import { socket } from "./socketManager";
import { extname } from "path";
import { platform } from "os";

var presenceDevWatchedFiles = [],
  currWatchPath = "";

export async function watchDir(path: string) {
  var files = await readdirSync(path);
  currWatchPath = path;
  presenceDevWatchedFiles = files;

  presenceDevWatchedFiles.map(f => {
    watchFile(path + "/" + f, { interval: 100 }, async (curr, prev) => {
      files = await readdirSync(path);
      readFiles(files, path);
    });
  });
  readFiles(files, path);
}

async function readFiles(files, path) {
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
  if (presenceDevWatchedFiles.length > 0) {
    await Promise.all(
      presenceDevWatchedFiles.map(f => unwatchFile(currWatchPath + "/" + f))
    );
  }

  if (platform() === "darwin") app.dock.show();
  app.show();
  app.focus();
  var { filePaths } = await dialog.showOpenDialog(null, {
    properties: ["openDirectory"]
  });
  if (platform() === "darwin") app.dock.hide();
  app.hide();

  //* User clicked cancel
  if (!filePaths) return;

  //* Start watching folder and send data to extension
  watchDir(filePaths[0]);
}
