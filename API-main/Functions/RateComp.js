"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rate = /** @class */ (function () {
    function Rate(rate, ip, pc) {
        this.rate = rate;
        this.ip = ip;
        this.date = new Date();
        this.pc = pc;
    }
    return Rate;
}());
exports.default = Rate;
