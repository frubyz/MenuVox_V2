"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AdminCheck(res, req) {
    if (req.body?.jwt == process.env.JWT2) {
        return true;
    }
    res.status(403).json({ error: 1, msg: 'Insufficient permissions' });
    return false;
}
exports.default = AdminCheck;
