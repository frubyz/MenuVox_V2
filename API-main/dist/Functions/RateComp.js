"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rate {
    rate;
    ip;
    date;
    pc;
    constructor(rate, ip, pc) {
        this.rate = rate;
        this.ip = ip;
        this.date = new Date();
        this.pc = pc;
    }
}
exports.default = Rate;
