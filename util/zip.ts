import * as archiver from "archiver";
import { Extract } from "unzipper";
import { createWriteStream, createReadStream } from "fs";
import { basename } from "path";

if (process.argv.includes("--zip")) {
  const archive = archiver("zip"),
    output = createWriteStream(process.argv[3]);

  archive.pipe(output);
  archive.directory(process.argv[2], basename(process.argv[3], ".zip"));

  archive.finalize();
} else {
  createReadStream(process.argv[2]).pipe(Extract({ path: process.cwd() }));
}
