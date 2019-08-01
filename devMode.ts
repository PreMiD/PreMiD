import * as ts from "typescript";
import chalk from "chalk";
import { ChildProcess, spawn } from "child_process";
import { removeSync, writeFileSync, copySync } from "fs-extra";
import { extname } from "path";
import * as glob from "fast-glob";

//* Current child process = null
var currChild: ChildProcess = null;

//* Format Host
const formatHost: ts.FormatDiagnosticsHost = {
  getCanonicalFileName: path => path,
  getCurrentDirectory: ts.sys.getCurrentDirectory,
  getNewLine: () => ts.sys.newLine
};

//* Create ts program
const createProgram = ts.createSemanticDiagnosticsBuilderProgram;

//* Create Watch compoile host
const host = ts.createWatchCompilerHost(
  "./tsconfig.json",
  {},
  ts.sys,
  createProgram,
  null,
  fileChange
);

if (process.argv.length == 3 && process.argv[2] == "compile")
  prepareDist().then(() => process.exit());
//* Create watch program
else ts.createWatchProgram(host);

async function fileChange(diagnostic: ts.Diagnostic) {
  //* TS compilation != done
  if (diagnostic.code !== 6194) {
    //* If error
    if (diagnostic.code === 6193)
      console.log(chalk.redBright(ts.formatDiagnostic(diagnostic, formatHost)));
    else
      console.log(
        chalk.blueBright(ts.formatDiagnostic(diagnostic, formatHost))
      );
    return;
  }

  //* Kill old child if exists && alive
  if (currChild && !currChild.killed) currChild.kill();

  //* Run devMode script
  prepareDist();

  //* Clear console
  console.clear();

  //* Run child
  currChild = spawn("npm run --silent start", {
    shell: true,
    stdio: "inherit"
  });
}

//* Prepare dist folder
async function prepareDist() {
  //* Select files
  var dist = await glob("dist/app/**/*", { onlyFiles: true }),
    src = await glob("src/**/*", { onlyFiles: true });

  //* Filter file differences
  var nDist = dist.map(f => [f.replace("dist/app/", ""), f]);
  src = src
    .map(f => f.replace("src/", "").split(".")[0])
    .filter(sf => nDist.find(d => d[0].split(".")[0] == sf));

  //* Old files, delete
  Promise.all(
    dist
      .filter(f => !src.includes(f.replace("dist/app/", "").split(".")[0]))
      .map(f => removeSync(f))
  );

  //* Copy package.json (minified)
  var packageJSON = require("./package.json"),
    srcPackageJSON = packageJSON;

  //* Delete scripts, not needed
  delete srcPackageJSON.scripts;

  //* only electron as devDependency
  srcPackageJSON.devDependencies = {
    electron: packageJSON.devDependencies.electron
  };

  //* Write file
  await writeFileSync(
    "./src/package.json",
    JSON.stringify(srcPackageJSON, null, 2)
  );

  //* Copy files from src to dist
  copySync("src", "dist/app", {
    filter: function(path) {
      return extname(path) !== ".ts";
    }
  });
}
