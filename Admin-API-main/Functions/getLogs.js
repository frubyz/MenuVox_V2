"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function getLogs(req, res, localPath) {
    var month = req.params.month;
    if (!fs_1.default.existsSync(localPath + "/logs/".concat(month, ".json"))) {
        res.status(404).json({ error: 1, msg: 'Month not found' });
        return;
    }
    var Logs = JSON.parse(fs_1.default.readFileSync(localPath + "/logs/".concat(month, ".json")).toString());
    res.status(200).json({ error: 0, data: Logs });
}
exports.default = getLogs;
