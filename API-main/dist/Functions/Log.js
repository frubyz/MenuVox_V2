"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
class Log {
    ip;
    date;
    request;
    pc;
    constructor(ip, request, pc) {
        this.ip = ip;
        this.date = new Date();
        this.request = request;
        this.pc = pc;
    }
}
function log(localPath, req) {
    const month = new Date().getMonth() + 1;
    if (!fs_1.default.existsSync(localPath + `/logs/${month}.json`)) {
        fs_1.default.writeFileSync(localPath + `/logs/${month}.json`, JSON.stringify([]));
    }
    const pc = req.body.pc;
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress).substring(7);
    const request = req.body;
    const infos = JSON.parse(fs_1.default.readFileSync(localPath + `/logs/${month}.json`).toString());
    infos.push(new Log(ip, request, pc));
    fs_1.default.writeFileSync(localPath + `/logs/${month}.json`, JSON.stringify(infos));
}
exports.default = log;
