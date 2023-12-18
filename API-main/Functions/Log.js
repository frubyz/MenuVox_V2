"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var Log = /** @class */ (function () {
    function Log(ip, request, pc) {
        this.ip = ip;
        this.date = new Date();
        this.request = request;
        this.pc = pc;
    }
    return Log;
}());
function log(localPath, req) {
    var month = new Date().getMonth() + 1;
    if (!fs_1.default.existsSync(localPath + "/logs/".concat(month, ".json"))) {
        fs_1.default.writeFileSync(localPath + "/logs/".concat(month, ".json"), JSON.stringify([]));
    }
    var pc = req.body.pc;
    var ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress).substring(7);
    var request = req.body;
    var infos = JSON.parse(fs_1.default.readFileSync(localPath + "/logs/".concat(month, ".json")).toString());
    infos.push(new Log(ip, request, pc));
    fs_1.default.writeFileSync(localPath + "/logs/".concat(month, ".json"), JSON.stringify(infos));
}
exports.default = log;
