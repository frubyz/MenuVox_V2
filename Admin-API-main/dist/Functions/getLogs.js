"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
function getLogs(req, res, localPath) {
    const month = req.params.month;
    if (!fs_1.default.existsSync(localPath + `/logs/${month}.json`)) {
        res.status(404).json({ error: 1, msg: 'Month not found' });
        return;
    }
    const Logs = JSON.parse(fs_1.default.readFileSync(localPath + `/logs/${month}.json`).toString());
    res.status(200).json({ error: 0, data: Logs });
}
exports.default = getLogs;
