"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
function Month(req, res, localPath) {
    const month = parseInt(req.params.month);
    if (!fs_1.default.existsSync(localPath + `menus/${month}/`)) {
        res.status(404).json({ error: 1, msg: 'Month not found' });
        return;
    }
    const menu = fs_1.default.readdirSync(localPath + `menus/${month}/`).map(m => {
        return m.replace('.json', '');
    });
    res.status(200).json({ error: 0, data: menu });
}
exports.default = Month;
