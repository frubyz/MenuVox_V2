"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
function getRates(req, res, localPath) {
    const month = parseInt(req.params.month);
    const day = parseInt(req.params.day);
    if (!fs_1.default.existsSync(localPath + `rates/${month}/${day}.json`)) {
        res.status(404).json({ error: 1, msg: 'Rates not found' });
        return;
    }
    const rates = JSON.parse(fs_1.default.readFileSync(localPath + `rates/${month}/${day}.json`).toString());
    let average = 0;
    rates.forEach((rate) => {
        average += rate.rate;
    });
    average = parseFloat((average / rates.length).toFixed(1));
    res.status(200).json({ error: 0, rate: average });
}
exports.default = getRates;
