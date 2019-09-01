"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var ts = require("typescript");
var chalk_1 = require("chalk");
var child_process_1 = require("child_process");
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var glob = require("fast-glob");
//* Current child process = null
var currChild = null;
//* Format Host
var formatHost = {
    getCanonicalFileName: function (path) { return path; },
    getCurrentDirectory: ts.sys.getCurrentDirectory,
    getNewLine: function () { return ts.sys.newLine; }
};
//* Create ts program
var createProgram = ts.createSemanticDiagnosticsBuilderProgram;
//* Create Watch compoile host
var host = ts.createWatchCompilerHost("./tsconfig.json", {}, ts.sys, createProgram, null, fileChange);
if (process.argv.length == 3 && process.argv[2] == "compile")
    prepareDist().then(function () { return process.exit(); });
//* Create watch program
else
    ts.createWatchProgram(host);
function fileChange(diagnostic) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            //* TS compilation != done
            if (diagnostic.code !== 6194) {
                //* If error
                if ([6031, 6032].includes(diagnostic.code))
                    console.log(chalk_1["default"].blueBright(ts.formatDiagnostic(diagnostic, formatHost)));
                else
                    console.log(chalk_1["default"].redBright(ts.formatDiagnostic(diagnostic, formatHost)));
                return [2 /*return*/];
            }
            else
                console.log(chalk_1["default"].greenBright(ts.formatDiagnostic(diagnostic, formatHost)));
            //* Kill old child if exists && alive
            if (currChild && !currChild.killed)
                currChild.kill();
            //* Run devMode script
            prepareDist();
            //* Clear console
            console.clear();
            //* Run child
            currChild = child_process_1.spawn("npm run --silent start", {
                shell: true,
                stdio: "inherit"
            });
            return [2 /*return*/];
        });
    });
}
//* Prepare dist folder
function prepareDist() {
    return __awaiter(this, void 0, void 0, function () {
        var dist, src, nDist, packageJSON, srcPackageJSON;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, glob("dist/app/**/*", { onlyFiles: true })];
                case 1:
                    dist = _a.sent();
                    return [4 /*yield*/, glob("src/**/*", { onlyFiles: true })];
                case 2:
                    src = _a.sent();
                    nDist = dist.map(function (f) { return [f.replace("dist/app/", ""), f]; });
                    src = src
                        .map(function (f) { return f.replace("src/", "").split(".")[0]; })
                        .filter(function (sf) { return nDist.find(function (d) { return d[0].split(".")[0] == sf; }); });
                    //* Old files, delete
                    Promise.all(dist
                        .filter(function (f) { return !src.includes(f.replace("dist/app/", "").split(".")[0]); })
                        .map(function (f) { return fs_extra_1.removeSync(f); }));
                    packageJSON = require("./package.json"), srcPackageJSON = packageJSON;
                    //* Delete scripts, not needed
                    delete srcPackageJSON.scripts;
                    //* only electron as devDependency
                    srcPackageJSON.devDependencies = {
                        electron: packageJSON.devDependencies.electron
                    };
                    //* Write file
                    return [4 /*yield*/, fs_extra_1.writeFileSync("./src/package.json", JSON.stringify(srcPackageJSON, null, 2))];
                case 3:
                    //* Write file
                    _a.sent();
                    //* Copy files from src to dist
                    fs_extra_1.copySync("src", "dist/app", {
                        filter: function (path) {
                            return path_1.extname(path) !== ".ts";
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
