"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
function getRatesMonthEvening(req, res, localPath) {
    const month = req.params.month;
    if (!fs_1.default.existsSync(localPath + `/ratesEvening/${month}`)) {
        res.status(404).json({ error: 1, msg: 'Month not found' });
        return;
    }
    const Rates = fs_1.default.readdirSync(localPath + `/ratesEvening/${month}/`).map((rate) => {
        let d = JSON.parse(fs_1.default.readFileSync(localPath + `/ratesEvening/${month}/` + rate).toString());
        d = [rate.replace('.json', ''), d];
        return d;
    });
    res.status(200).json({ error: 0, data: Rates });
}
exports.default = getRatesMonthEvening;
