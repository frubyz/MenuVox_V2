"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var axios_1 = require("axios");
var js_confetti_1 = require("js-confetti");
var react_1 = require("react");
var Star_1 = require("./Star");
var selected = 0;
var url = 'https://menuvox.fr:8080';
function getRate(month, day, evening) {
    if (evening) {
        return new Promise(function (resolve) {
            axios_1["default"].get("".concat(url, "/ratesEvening/").concat(month + 1, "/").concat(day))["catch"](function (err) {
                console.error(err);
                resolve(null);
            }).then(function (response) {
                resolve(response === null || response === void 0 ? void 0 : response.data);
            });
        });
    }
    else {
        return new Promise(function (resolve) {
            axios_1["default"].get("".concat(url, "/rates/").concat(month + 1, "/").concat(day))["catch"](function (err) {
                console.error(err);
                resolve(null);
            }).then(function (response) {
                resolve(response === null || response === void 0 ? void 0 : response.data);
            });
        });
    }
}
function postRate(month, day, rate, evening) {
    if (evening) {
        return new Promise(function (resolve) {
            axios_1["default"].post("".concat(url, "/ratesEvening/").concat(month + 1, "/").concat(day), { rate: rate, pc: false })["catch"](function (err) {
                console.error(err);
                resolve(null);
            }).then(function (response) {
                resolve(response === null || response === void 0 ? void 0 : response.data);
            });
        });
    }
    else {
        return new Promise(function (resolve) {
            axios_1["default"].post("".concat(url, "/rates/").concat(month + 1, "/").concat(day), { rate: rate, pc: false })["catch"](function (err) {
                console.error(err);
                resolve(null);
            }).then(function (response) {
                resolve(response === null || response === void 0 ? void 0 : response.data);
            });
        });
    }
}
function Rate(_a) {
    var month = _a.month, day = _a.day, evening = _a.evening;
    var _b = (0, react_1.useState)(false), star1 = _b[0], setStar1 = _b[1];
    var _c = (0, react_1.useState)(false), star2 = _c[0], setStar2 = _c[1];
    var _d = (0, react_1.useState)(false), star3 = _d[0], setStar3 = _d[1];
    var _e = (0, react_1.useState)(false), star4 = _e[0], setStar4 = _e[1];
    var _f = (0, react_1.useState)(false), star5 = _f[0], setStar5 = _f[1];
    var _g = (0, react_1.useState)((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})), sendButton = _g[0], setSendButton = _g[1];
    var _h = (0, react_1.useState)({ 'display': 'none' }), StarsCss = _h[0], setStarsCss = _h[1];
    function sendRate() {
        var _a;
        var rates = (_a = JSON.parse(window.localStorage.getItem('rates'))) !== null && _a !== void 0 ? _a : [];
        if (evening) {
            rates.push("".concat(month, "/").concat(day, "e"));
        }
        else {
            rates.push("".concat(month, "/").concat(day));
        }
        window.localStorage.setItem('rates', JSON.stringify(rates));
        setStarsCss({ 'display': 'none' });
        setSendButton((0, jsx_runtime_1.jsx)("div", __assign({ className: 'MenuRate' }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'RateText' }, { children: "Envoi en cours..." })) })));
        postRate(month, day, selected, evening).then(function (rate) {
            var jsConfetti = new js_confetti_1["default"]();
            if (selected === 1) {
                jsConfetti.addConfetti({ emojis: ['💩'] });
            }
            else if (selected === 2) {
                jsConfetti.addConfetti({ emojis: ['🍴'] });
            }
            else if (selected === 4) {
                jsConfetti.addConfetti({ emojis: ['⭐'] });
            }
            else if (selected === 5) {
                jsConfetti.addConfetti({ emojis: ['🤩'] });
            }
            else {
                jsConfetti.addConfetti({
                    confettiColors: [
                        '#4775FF', '#E74855', '#08A47C', '#FFC482'
                    ],
                    confettiNumber: 500,
                    confettiRadius: 10
                });
            }
            if (rate != null && rate.rate != null) {
                setSendButton((0, jsx_runtime_1.jsx)("div", __assign({ className: 'MenuRate' }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'RateText' }, { children: ["La moyenne est de ", rate.rate] })) })));
            }
            else {
                setSendButton((0, jsx_runtime_1.jsx)("div", __assign({ className: 'MenuRate' }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'RateText' }, { children: "Merci !" })) })));
            }
        });
    }
    function SendButton() {
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'SendButton', onClick: sendRate }, { children: "Envoyer" })));
    }
    function setStar(number) {
        if (number === selected) {
            selected = 0;
            setStar1(false);
            setStar2(false);
            setStar3(false);
            setStar4(false);
            setStar5(false);
            setSendButton((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
        }
        else if (number === 1) {
            selected = 1;
            setStar1(true);
            setStar2(false);
            setStar3(false);
            setStar4(false);
            setStar5(false);
            setSendButton((0, jsx_runtime_1.jsx)(SendButton, {}));
        }
        else if (number === 2) {
            selected = 2;
            setStar1(true);
            setStar2(true);
            setStar3(false);
            setStar4(false);
            setStar5(false);
            setSendButton((0, jsx_runtime_1.jsx)(SendButton, {}));
        }
        else if (number === 3) {
            selected = 3;
            setStar1(true);
            setStar2(true);
            setStar3(true);
            setStar4(false);
            setStar5(false);
            setSendButton((0, jsx_runtime_1.jsx)(SendButton, {}));
        }
        else if (number === 4) {
            selected = 4;
            setStar1(true);
            setStar2(true);
            setStar3(true);
            setStar4(true);
            setStar5(false);
            setSendButton((0, jsx_runtime_1.jsx)(SendButton, {}));
        }
        else {
            selected = 5;
            setStar1(true);
            setStar2(true);
            setStar3(true);
            setStar4(true);
            setStar5(true);
            setSendButton((0, jsx_runtime_1.jsx)(SendButton, {}));
        }
    }
    (0, react_1.useEffect)(function () {
        var rates = JSON.parse(window.localStorage.getItem('rates'));
        if (rates != null) {
            if (evening) {
                if (rates.includes("".concat(month, "/").concat(day, "e"))) {
                    setStarsCss({ 'display': 'none' });
                    getRate(month, day, evening).then(function (rate) {
                        if (rate != null && rate.rate != null) {
                            setSendButton((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'RateText' }, { children: ["La moyenne est de ", rate.rate] })));
                        }
                    });
                }
                else {
                    setStarsCss({ 'display': 'block' });
                }
            }
            else {
                if (rates.includes("".concat(month, "/").concat(day))) {
                    setStarsCss({ 'display': 'none' });
                    getRate(month, day, evening).then(function (rate) {
                        if (rate != null && rate.rate != null) {
                            setSendButton((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'RateText' }, { children: ["La moyenne est de ", rate.rate] })));
                        }
                    });
                }
                else {
                    setStarsCss({ 'display': 'block' });
                }
            }
        }
        else {
            setStarsCss({ 'display': 'block' });
        }
    }, [day, month, evening]);
    var date = new Date();
    if (month !== date.getMonth() || day !== date.getDate()) {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
    }
    var menuDate = new Date(new Date().getFullYear(), month, day, 11, 45);
    var EveningDate = new Date(new Date().getFullYear(), month, day, 19);
    var currentDate = new Date();
    if (evening && EveningDate >= currentDate) {
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'MenuRate' }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'RateText' }, { children: "Les votes sont ouverts \u00E0 19h00." })) })));
    }
    if (menuDate >= currentDate) {
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'MenuRate' }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'RateText' }, { children: "Les votes sont ouverts \u00E0 11h45." })) })));
    }
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'MenuRate' }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'Stars', style: StarsCss }, { children: [(0, jsx_runtime_1.jsx)(Star_1["default"], { onClick: setStar, number: 1, state: star1 }), (0, jsx_runtime_1.jsx)(Star_1["default"], { onClick: setStar, number: 2, state: star2 }), (0, jsx_runtime_1.jsx)(Star_1["default"], { onClick: setStar, number: 3, state: star3 }), (0, jsx_runtime_1.jsx)(Star_1["default"], { onClick: setStar, number: 4, state: star4 }), (0, jsx_runtime_1.jsx)(Star_1["default"], { onClick: setStar, number: 5, state: star5 })] })), sendButton] })));
}
exports["default"] = Rate;
