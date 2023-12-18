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
var swiper_1 = require("swiper");
var react_1 = require("swiper/react");
var Dish_1 = require("./Dish");
var Rate_1 = require("./Rate");
function setMenu(d) {
    var today = new Date();
    var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    var date = new Date(today.getFullYear(), parseInt(d === null || d === void 0 ? void 0 : d.substring(3, 5)) - 1, parseInt(d === null || d === void 0 ? void 0 : d.substring(0, 2)));
    var Days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    if (today.getDate() === date.getDate()) {
        return 'Menu du Jour';
    }
    else if (tomorrow.getDate() === date.getDate()) {
        return 'Menu de Demain';
    }
    else if (Days[date.getDay()]) {
        return 'Menu de ' + Days[date.getDay()];
    }
    else {
        return '';
    }
}
function setMenuEvening(d) {
    var today = new Date();
    var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    var date = new Date(today.getFullYear(), parseInt(d === null || d === void 0 ? void 0 : d.substring(3, 5)) - 1, parseInt(d === null || d === void 0 ? void 0 : d.substring(0, 2)));
    var Days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    if (today.getDate() === date.getDate()) {
        return 'Menu de ce Soir';
    }
    else if (tomorrow.getDate() === date.getDate()) {
        return 'Menu de Demain Soir';
    }
    else if (Days[date.getDay()]) {
        return 'Menu de ' + Days[date.getDay()] + ' Soir';
    }
    else {
        return '';
    }
}
function MenuSwiper(_a) {
    var menus = _a.menus, isEvening = _a.isEvening, css = _a.css, theme = _a.theme;
    var rMenus = [];
    menus.forEach(function (menu, i) {
        var title = setMenu(menu.date);
        if (menu.error) {
            rMenus.push((0, jsx_runtime_1.jsx)(react_1.SwiperSlide, __assign({ style: css }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "Menu" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "MenuTitle" }, { children: title })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "MenuError" }, { children: menu.errorMessage }))] })) }), i));
        }
        else {
            rMenus.push((0, jsx_runtime_1.jsx)(react_1.SwiperSlide, __assign({ style: css }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "Menu" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "MenuTitle" }, { children: title })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'MenuDishs' }, { children: menu.menu.map(function (dish, i) {
                                return ((0, jsx_runtime_1.jsx)(Dish_1["default"], { dish: dish, theme: theme }, i));
                            }) })), (0, jsx_runtime_1.jsx)(Rate_1["default"], { month: menu.month, day: menu.day, evening: false })] })) }), i));
        }
        if (isEvening) {
            var titleEvening = setMenuEvening(menu.date.toString());
            if (menu.errorEvening) {
                if (menu.errorEveningMessage) {
                    rMenus.push((0, jsx_runtime_1.jsx)(react_1.SwiperSlide, __assign({ style: css }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "Menu" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "MenuTitle" }, { children: titleEvening })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "MenuError" }, { children: menu.errorEveningMessage }))] })) }), i + 0.1));
                }
            }
            else {
                rMenus.push((0, jsx_runtime_1.jsx)(react_1.SwiperSlide, __assign({ style: css }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "Menu" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "MenuTitle" }, { children: titleEvening })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'MenuDishs' }, { children: menu.evening.map(function (dish, i) {
                                    return ((0, jsx_runtime_1.jsx)(Dish_1["default"], { dish: dish, theme: theme }, i));
                                }) })), (0, jsx_runtime_1.jsx)(Rate_1["default"], { month: menu.month, day: menu.day, evening: true })] })) }), i + 0.1));
            }
        }
    });
    return ((0, jsx_runtime_1.jsx)(react_1.Swiper, __assign({ effect: "cards", modules: [swiper_1.EffectCards] }, { children: rMenus })));
}
exports["default"] = MenuSwiper;
