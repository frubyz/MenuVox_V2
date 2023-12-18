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
var react_1 = require("react");
require("swiper/css");
require("swiper/css/effect-cards");
var MenuSwiper_1 = require("./MenuSwiper");
var url = 'https://menuvox.fr:8080';
function getMenusDate() {
    var menus = [];
    var date = new Date();
    var date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    var date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
    var date3 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate() + 1);
    var date4 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate() + 1);
    switch (date.getDay()) {
        case 1:
            menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
            menus.push({ 'month': date1.getMonth() + 1, 'day': date1.getDate() });
            menus.push({ 'month': date2.getMonth() + 1, 'day': date2.getDate() });
            menus.push({ 'month': date3.getMonth() + 1, 'day': date3.getDate() });
            menus.push({ 'month': date4.getMonth() + 1, 'day': date4.getDate() });
            break;
        case 2:
            menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
            menus.push({ 'month': date1.getMonth() + 1, 'day': date1.getDate() });
            menus.push({ 'month': date2.getMonth() + 1, 'day': date2.getDate() });
            menus.push({ 'month': date3.getMonth() + 1, 'day': date3.getDate() });
            break;
        case 3:
            menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
            menus.push({ 'month': date1.getMonth() + 1, 'day': date1.getDate() });
            menus.push({ 'month': date2.getMonth() + 1, 'day': date2.getDate() });
            break;
        case 4:
            menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
            menus.push({ 'month': date1.getMonth() + 1, 'day': date1.getDate() });
            break;
        case 5:
            menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
            break;
        case 6:
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2);
            date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
            date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
            date3 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate() + 1);
            date4 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate() + 1);
            menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
            menus.push({ 'month': date1.getMonth() + 1, 'day': date1.getDate() });
            menus.push({ 'month': date2.getMonth() + 1, 'day': date2.getDate() });
            menus.push({ 'month': date3.getMonth() + 1, 'day': date3.getDate() });
            menus.push({ 'month': date4.getMonth() + 1, 'day': date4.getDate() });
            break;
        default:
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
            date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
            date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
            date3 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate() + 1);
            date4 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate() + 1);
            menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
            menus.push({ 'month': date1.getMonth() + 1, 'day': date1.getDate() });
            menus.push({ 'month': date2.getMonth() + 1, 'day': date2.getDate() });
            menus.push({ 'month': date3.getMonth() + 1, 'day': date3.getDate() });
            menus.push({ 'month': date4.getMonth() + 1, 'day': date4.getDate() });
            break;
    }
    return menus;
}
function getMenus(menus) {
    return new Promise(function (resolve) {
        axios_1["default"].post("".concat(url, "/menus"), { 'pc': false, 'days': menus })["catch"](function (err) {
            console.error(err);
            resolve(null);
        }).then(function (response) {
            if (typeof response == 'undefined') {
                resolve(null);
            }
            else {
                var data = response.data.data;
                data = data.map(function (d) {
                    var _a, _b;
                    var temp = (_b = (_a = d.data) === null || _a === void 0 ? void 0 : _a.date) === null || _b === void 0 ? void 0 : _b.split('/');
                    if (typeof temp == 'undefined')
                        return d;
                    d.data.day = parseInt(temp[0]);
                    d.data.month = parseInt(temp[1]) - 1;
                    d.data.year = parseInt(temp[2]);
                    return d;
                });
                resolve(data);
            }
        });
    });
}
function Menu(_a) {
    var theme = _a.theme;
    var _b = (0, react_1.useState)((0, jsx_runtime_1.jsx)("div", __assign({ className: "MenuWaiting" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "WaitingError" }, { children: "R\u00E9cup\u00E9ration des menus en cours..." })) }))), menu = _b[0], setMenu = _b[1];
    (0, react_1.useEffect)(function () {
        var isEvening = JSON.parse(window.localStorage.getItem('evening'));
        var cache = JSON.parse(sessionStorage.getItem('menuCache'));
        if (cache) {
            if (!cache.length) {
                if (new Date().getDay() === 6 || new Date().getDay() === 0) {
                    cache.push({ error: 1, errorMessage: 'Bon week-end !', errorEvening: 1, date: new Date().getDate().toString() });
                }
                else {
                    setMenu((0, jsx_runtime_1.jsx)("div", __assign({ className: "MenuWaiting" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "WaitingError" }, { children: "Aucun menu \u00E0 afficher" })) })));
                    return;
                }
            }
            setMenu((0, jsx_runtime_1.jsx)(MenuSwiper_1["default"], { css: {}, menus: cache, isEvening: isEvening, theme: theme }));
            return;
        }
        getMenus(getMenusDate()).then(function (data) {
            var datas = [];
            data.forEach(function (d) {
                if (!(d === null || d === void 0 ? void 0 : d.error)) {
                    datas.push(d.data);
                }
            });
            sessionStorage.setItem('menuCache', JSON.stringify(datas));
            if (!datas.length) {
                if (new Date().getDay() === 6 || new Date().getDay() === 0) {
                    datas.push({ error: 1, errorMessage: 'Bon week-end !', errorEvening: 1, date: new Date().getDate().toString() });
                }
                else {
                    setMenu((0, jsx_runtime_1.jsx)("div", __assign({ className: "MenuWaiting" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "WaitingError" }, { children: "Aucun menu \u00E0 afficher" })) })));
                    return;
                }
            }
            setMenu((0, jsx_runtime_1.jsx)(MenuSwiper_1["default"], { css: {}, menus: datas, isEvening: isEvening, theme: theme }));
        });
    }, [theme]);
    return menu;
}
exports["default"] = Menu;
