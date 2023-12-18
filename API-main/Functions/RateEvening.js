"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var RateComp_1 = require("./RateComp");
function rateEvening(req, res, localPath) {
    var _a;
    var month = parseInt(req.params.month);
    var day = parseInt(req.params.day);
    if (isNaN(month) || month > 12 || month < 1) {
        res.status(400).json({ error: 1, msg: 'Invalid month' });
        return;
    }
    if (isNaN(day) || day > 31 || day < 1) {
        res.status(400).json({ error: 1, msg: 'Invalid day' });
        return;
    }
    if (!fs_1.default.existsSync(localPath + "menus/".concat(month, "/").concat(day, ".json"))) {
        res.status(404).json({ error: 1, msg: 'Menu not found' });
        return;
    }
    if (!fs_1.default.existsSync(localPath + "ratesEvening/".concat(month, "/").concat(day, ".json"))) {
        if (!fs_1.default.existsSync(localPath + "ratesEvening/".concat(month))) {
            fs_1.default.mkdirSync(localPath + "ratesEvening/".concat(month));
        }
        fs_1.default.writeFileSync(localPath + "ratesEvening/".concat(month, "/").concat(day, ".json"), JSON.stringify([]));
    }
    var r = req.body.rate;
    if (typeof r == 'undefined') {
        res.status(400).json({ error: 1, msg: 'No given rate' });
        return;
    }
    if (r < 0 || r > 5) {
        res.status(400).json({ error: 1, msg: 'Invalid rate: It can only be between 1 and 5.' });
        return;
    }
    var menu = JSON.parse(fs_1.default.readFileSync(localPath + "menus/".concat(month, "/").concat(day, ".json")).toString());
    if (!menu.evening) {
        res.status(404).json({ error: 1, msg: 'Menu not found' });
        return;
    }
    if (menu === null || menu === void 0 ? void 0 : menu.errorEvening) {
        res.status(400).json({ error: 1, msg: 'This menu cannot be rated.' });
        return;
    }
    var date = (_a = menu === null || menu === void 0 ? void 0 : menu.date) === null || _a === void 0 ? void 0 : _a.split('/');
    var MenuDate = new Date(date[2], date[1] - 1, date[0], 19, 0, 0);
    var MenuMaxDate = new Date(MenuDate.getFullYear(), MenuDate.getMonth(), MenuDate.getDate() + 7);
    if (new Date() < MenuDate) {
        res.status(403).json({ error: 1, msg: 'Rate refused: This rate is not available before the initial date.' });
        return;
    }
    if (new Date() > MenuMaxDate) {
        res.status(403).json({ error: 1, msg: 'Rate refused: Rates can only be submitted up to 7 days after the original date.' });
        return;
    }
    var ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress).substring(7);
    var Rates = JSON.parse(fs_1.default.readFileSync(localPath + "ratesEvening/".concat(month, "/").concat(day, ".json")).toString());
    if (typeof Rates.find(function (r) { return r.ip === ip; }) != 'undefined') {
        res.status(403).json({ error: 1, msg: 'Rate refused: You have already rate this one.' });
        return;
    }
    Rates.push(new RateComp_1.default(r, ip, req.body.pc));
    // Get average rate
    if (!fs_1.default.existsSync(localPath + "rates/".concat(month, "/").concat(day, ".json"))) {
        res.status(404).json({ error: 1, msg: 'Rates not found' });
        return;
    }
    var rates = JSON.parse(fs_1.default.readFileSync(localPath + "ratesEvening/".concat(month, "/").concat(day, ".json")).toString());
    var average = 0;
    rates.forEach(function (rate) {
        average += rate.rate;
    });
    average += r;
    average = parseFloat((average / (rates.length + 1)).toFixed(1));
    res.status(200).json({ error: 0, msg: 'Success', rate: average });
    fs_1.default.writeFileSync(localPath + "ratesEvening/".concat(month, "/").concat(day, ".json"), JSON.stringify(Rates));
}
exports.default = rateEvening;
