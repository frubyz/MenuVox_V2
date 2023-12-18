"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const AdminCheck_1 = tslib_1.__importDefault(require("./AdminCheck"));
function Post(req, res, localPath) {
    if (!(0, AdminCheck_1.default)(res, req))
        return;
    const data = req.body;
    if (typeof data.menu == 'undefined') {
        res.status(400).json({ error: 1, msg: 'Missing menu' });
        return;
    }
    const day = parseInt(req.params.day);
    const month = parseInt(req.params.month);
    if (isNaN(month) || month > 12 || month < 1) {
        res.status(400).json({ error: 1, msg: 'Invalid month' });
        return;
    }
    if (isNaN(day) || day > 31 || day < 1) {
        res.status(400).json({ error: 1, msg: 'Invalid day' });
        return;
    }
    if (fs_1.default.existsSync(localPath + `/menus/${month}/${day}.json`)) {
        res.status(400).json({ error: 1, msg: 'This day already exist' });
        return;
    }
    if (!fs_1.default.existsSync(localPath + `/menus/${month}/`)) {
        fs_1.default.mkdirSync(localPath + `/menus/${month}/`);
    }
    fs_1.default.writeFileSync(localPath + `/menus/${month}/${day}.json`, JSON.stringify(data.menu));
    res.status(200).json({ error: 0, msg: 'Success' });
}
exports.default = Post;
