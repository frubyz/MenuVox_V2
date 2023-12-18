"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var AdminCheck_1 = require("./AdminCheck");
function Delete(req, res, localPath) {
    if (!(0, AdminCheck_1.default)(res, req))
        return;
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
    if (!fs_1.default.existsSync(localPath + "/menus/".concat(month, "/").concat(day, ".json"))) {
        res.status(404).json({ error: 1, msg: 'Menu not found' });
        return;
    }
    fs_1.default.unlinkSync(localPath + "/menus/".concat(month, "/").concat(day, ".json"));
    res.status(200).json({ error: 0, msg: 'Success' });
}
exports.default = Delete;
