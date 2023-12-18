"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
function getRates(req, res, localPath) {
    const day = req.params.day;
    const month = req.params.month;
    if (!fs_1.default.existsSync(localPath + `/rates/${month}`)) {
        res.status(404).json({ error: 1, msg: 'Month not found' });
        return;
    }
    if (!fs_1.default.existsSync(localPath + `/rates/${month}/${day}.json`)) {
        res.status(404).json({ error: 1, msg: 'Day not found' });
        return;
    }
    const Rates = JSON.parse(fs_1.default.readFileSync(localPath + `/rates/${month}/${day}.json`).toString());
    res.status(200).json({ error: 0, data: Rates });
}
exports.default = getRates;
