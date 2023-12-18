"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function getRatesLogsMonth(req, res, localPath) {
    var month = req.params.month;
    if (!fs_1.default.existsSync(localPath + "/logs/".concat(month, ".json"))) {
        res.status(404).json({ error: 1, msg: 'Month not found' });
        return;
    }
    var Logs = [];
    JSON.parse(fs_1.default.readFileSync(localPath + "/logs/".concat(month, ".json")).toString()).forEach(function (log) {
        var index = Logs.findIndex(function (v) {
            return new Date(v.date).getDate() == new Date(log.date).getDate();
        });
        if (index != -1) {
            Logs[index] = {
                date: new Date(log.date),
                view: Logs[index].view + 1,
                rate: 0
            };
        }
        else {
            Logs.push({
                date: new Date(log.date),
                view: 1,
                rate: 0
            });
        }
    });
    var Rates = [];
    if (fs_1.default.existsSync(localPath + "/rates/".concat(month, "/"))) {
        fs_1.default.readdirSync(localPath + "/rates/".concat(month, "/")).forEach(function (rate) {
            var D = JSON.parse(fs_1.default.readFileSync(localPath + "/rates/".concat(month, "/") + rate).toString());
            var day = rate.replace('.json', '');
            var date = new Date();
            var data = {
                date: new Date(date.getFullYear(), month - 1, parseInt(day)),
                rate: D.length
            };
            Rates.push(data);
        });
    }
    var result = Logs;
    Rates.forEach(function (rate) {
        var index = result.findIndex(function (v) {
            return new Date(v.date).getDate() == new Date(rate.date).getDate();
        });
        if (index != -1) {
            result[index] = {
                date: result[index].date,
                view: result[index].view,
                rate: rate.rate
            };
        }
        else {
            result.push({
                date: new Date(rate.date),
                view: 0,
                rate: rate.rate
            });
        }
    });
    result.sort(function (a, b) { return (new Date(a.date).getTime() < new Date(b.date).getTime()) ? -1 : 1; });
    res.status(200).json({ error: 0, data: result });
}
exports.default = getRatesLogsMonth;
