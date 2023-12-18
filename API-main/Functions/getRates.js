"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function getRates(req, res, localPath) {
    var month = parseInt(req.params.month);
    var day = parseInt(req.params.day);
    if (!fs_1.default.existsSync(localPath + "rates/".concat(month, "/").concat(day, ".json"))) {
        res.status(404).json({ error: 1, msg: 'Rates not found' });
        return;
    }
    var rates = JSON.parse(fs_1.default.readFileSync(localPath + "rates/".concat(month, "/").concat(day, ".json")).toString());
    var average = 0;
    rates.forEach(function (rate) {
        average += rate.rate;
    });
    average = parseFloat((average / rates.length).toFixed(1));
    res.status(200).json({ error: 0, rate: average });
}
exports.default = getRates;
