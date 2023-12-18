"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var AdminCheck_1 = require("./AdminCheck");
function Post(req, res, localPath) {
    if (!(0, AdminCheck_1.default)(res, req))
        return;
    var data = req.body;
    if (typeof data.menu == 'undefined') {
        res.status(400).json({ error: 1, msg: 'Missing menu' });
        return;
    }
    var day = parseInt(req.params.day);
    var month = parseInt(req.params.month);
    if (isNaN(month) || month > 12 || month < 1) {
        res.status(400).json({ error: 1, msg: 'Invalid month' });
        return;
    }
    if (isNaN(day) || day > 31 || day < 1) {
        res.status(400).json({ error: 1, msg: 'Invalid day' });
        return;
    }
    if (fs_1.default.existsSync(localPath + "/menus/".concat(month, "/").concat(day, ".json"))) {
        res.status(400).json({ error: 1, msg: 'This day already exist' });
        return;
    }
    if (!fs_1.default.existsSync(localPath + "/menus/".concat(month, "/"))) {
        fs_1.default.mkdirSync(localPath + "/menus/".concat(month, "/"));
    }
    fs_1.default.writeFileSync(localPath + "/menus/".concat(month, "/").concat(day, ".json"), JSON.stringify(data.menu));
    res.status(200).json({ error: 0, msg: 'Success' });
}
exports.default = Post;
