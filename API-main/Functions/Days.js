"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var Log_1 = require("./Log");
function Days(req, res, localPath) {
    var _a, _b;
    var days = req.body.days;
    if (!(days === null || days === void 0 ? void 0 : days.length)) {
        res.status(400).json({ error: 1, msg: 'No given days' });
        return;
    }
    if (days.length > 14) {
        res.status(413).json({ error: 1, msg: 'More than 14 days were requested' });
        return;
    }
    var D = days.map(function (menu) {
        var _a, _b;
        var day = (_a = menu === null || menu === void 0 ? void 0 : menu.day) === null || _a === void 0 ? void 0 : _a.toString();
        var month = (_b = menu === null || menu === void 0 ? void 0 : menu.month) === null || _b === void 0 ? void 0 : _b.toString();
        if (typeof day == 'undefined') {
            return { error: 1, msg: 'Day not specified for this menu' };
        }
        if (typeof month == 'undefined') {
            return { error: 1, msg: 'Month not specified for this menu' };
        }
        if (isNaN(day) || day > 31 || day < 1) {
            return { error: 1, msg: 'Invalid day specified for this menu' };
        }
        if (isNaN(month) || month > 12 || month < 1) {
            return { error: 1, msg: 'Invalid month specified for this menu' };
        }
        if (!fs_1.default.existsSync(localPath + "menus/".concat(month, "/").concat(day, ".json"))) {
            return { error: 1, msg: 'Menu not found' };
        }
        return { error: 0, data: JSON.parse(fs_1.default.readFileSync(localPath + "menus/".concat(month, "/").concat(day, ".json")).toString()) };
    });
    if (!D.length) {
        res.status(400).json({ error: 1, msg: 'Invalid request' });
        return;
    }
    res.status(200).json({ error: 0, data: D });
    var month = (_b = (_a = days[0]) === null || _a === void 0 ? void 0 : _a.month) === null || _b === void 0 ? void 0 : _b.toString();
    if (month) {
        (0, Log_1.default)(localPath, req);
    }
}
exports.default = Days;
