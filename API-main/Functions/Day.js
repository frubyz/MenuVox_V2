"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var Log_1 = require("./Log");
function Day(req, res, localPath) {
    var month = parseInt(req.params.month);
    var day = parseInt(req.params.day);
    if (isNaN(month) || month > 12 || month < 1) {
        res.status(400).json({ error: 1, msg: 'Invalid month' });
        return;
    }
    if (isNaN(day) || day > 31 || day < 1) {
        res.status(400).json({ error: 1, msg: 'Invalid day' });
        return;
    }
    if (!fs_1.default.existsSync(localPath + "menus/".concat(month, "/").concat(day, ".json"))) {
        res.status(404).json({ error: 1, msg: 'Menu not found' });
        return;
    }
    var menu = JSON.parse(fs_1.default.readFileSync(localPath + "menus/".concat(month, "/").concat(day, ".json")).toString());
    res.status(200).json({ error: 0, data: menu });
    (0, Log_1.default)(localPath, req);
}
exports.default = Day;
