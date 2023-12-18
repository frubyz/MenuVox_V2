"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AdminCheck(res, req) {
    var _a;
    if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.jwt) == process.env.JWT2) {
        return true;
    }
    res.status(403).json({ error: 1, msg: 'Insufficient permissions' });
    return false;
}
exports.default = AdminCheck;
