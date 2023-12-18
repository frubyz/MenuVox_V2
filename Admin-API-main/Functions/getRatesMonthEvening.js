"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function getRatesMonthEvening(req, res, localPath) {
    var month = req.params.month;
    if (!fs_1.default.existsSync(localPath + "/ratesEvening/".concat(month))) {
        res.status(404).json({ error: 1, msg: 'Month not found' });
        return;
    }
    var Rates = fs_1.default.readdirSync(localPath + "/ratesEvening/".concat(month, "/")).map(function (rate) {
        var d = JSON.parse(fs_1.default.readFileSync(localPath + "/ratesEvening/".concat(month, "/") + rate).toString());
        d = [rate.replace('.json', ''), d];
        return d;
    });
    res.status(200).json({ error: 0, data: Rates });
}
exports.default = getRatesMonthEvening;
