"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function Month(req, res, localPath) {
    var month = parseInt(req.params.month);
    if (!fs_1.default.existsSync(localPath + "menus/".concat(month, "/"))) {
        res.status(404).json({ error: 1, msg: 'Month not found' });
        return;
    }
    var menu = fs_1.default.readdirSync(localPath + "menus/".concat(month, "/")).map(function (m) {
        return m.replace('.json', '');
    });
    res.status(200).json({ error: 0, data: menu });
}
exports.default = Month;
