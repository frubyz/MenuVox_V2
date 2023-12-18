"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function getRatesEvening(req, res, localPath) {
    var day = req.params.day;
    var month = req.params.month;
    if (!fs_1.default.existsSync(localPath + "/ratesEvening/".concat(month))) {
        res.status(404).json({ error: 1, msg: 'Month not found' });
        return;
    }
    if (!fs_1.default.existsSync(localPath + "/ratesEvening/".concat(month, "/").concat(day, ".json"))) {
        res.status(404).json({ error: 1, msg: 'Day not found' });
        return;
    }
    var Rates = JSON.parse(fs_1.default.readFileSync(localPath + "/ratesEvening/".concat(month, "/").concat(day, ".json")).toString());
    res.status(200).json({ error: 0, data: Rates });
}
exports.default = getRatesEvening;
