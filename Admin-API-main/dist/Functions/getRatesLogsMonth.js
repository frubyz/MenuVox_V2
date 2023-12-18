"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
function getRatesLogsMonth(req, res, localPath) {
    const month = req.params.month;
    if (!fs_1.default.existsSync(localPath + `/logs/${month}.json`)) {
        res.status(404).json({ error: 1, msg: 'Month not found' });
        return;
    }
    const Logs = [];
    JSON.parse(fs_1.default.readFileSync(localPath + `/logs/${month}.json`).toString()).forEach((log) => {
        const index = Logs.findIndex((v) => {
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
    const Rates = [];
    if (fs_1.default.existsSync(localPath + `/rates/${month}/`)) {
        fs_1.default.readdirSync(localPath + `/rates/${month}/`).forEach(rate => {
            const D = JSON.parse(fs_1.default.readFileSync(localPath + `/rates/${month}/` + rate).toString());
            const day = rate.replace('.json', '');
            const date = new Date();
            const data = {
                date: new Date(date.getFullYear(), month - 1, parseInt(day)),
                rate: D.length
            };
            Rates.push(data);
        });
    }
    const result = Logs;
    Rates.forEach((rate) => {
        const index = result.findIndex((v) => {
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
    result.sort((a, b) => (new Date(a.date).getTime() < new Date(b.date).getTime()) ? -1 : 1);
    res.status(200).json({ error: 0, data: result });
}
exports.default = getRatesLogsMonth;
