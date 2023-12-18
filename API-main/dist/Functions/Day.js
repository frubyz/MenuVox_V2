"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const Log_1 = tslib_1.__importDefault(require("./Log"));
function Day(req, res, localPath) {
    const month = parseInt(req.params.month);
    const day = parseInt(req.params.day);
    if (isNaN(month) || month > 12 || month < 1) {
        res.status(400).json({ error: 1, msg: 'Invalid month' });
        return;
    }
    if (isNaN(day) || day > 31 || day < 1) {
        res.status(400).json({ error: 1, msg: 'Invalid day' });
        return;
    }
    if (!fs_1.default.existsSync(localPath + `menus/${month}/${day}.json`)) {
        res.status(404).json({ error: 1, msg: 'Menu not found' });
        return;
    }
    const menu = JSON.parse(fs_1.default.readFileSync(localPath + `menus/${month}/${day}.json`).toString());
    res.status(200).json({ error: 0, data: menu });
    (0, Log_1.default)(localPath, req);
}
exports.default = Day;
