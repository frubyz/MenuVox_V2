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
var blue_1 = require("../Themes/Menus/blue");
var green_1 = require("../Themes/Menus/green");
var red_1 = require("../Themes/Menus/red");
var yellow_1 = require("../Themes/Menus/yellow");
var blueDark_1 = require("../Themes/Menus/blueDark");
var greenDark_1 = require("../Themes/Menus/greenDark");
var redDark_1 = require("../Themes/Menus/redDark");
var yellowDark_1 = require("../Themes/Menus/yellowDark");
var halloween_1 = require("../Themes/Menus/halloween");
var halloweenDark_1 = require("../Themes/Menus/halloweenDark");
var ChristmasBlue_1 = require("../Themes/Menus/ChristmasBlue");
var ChristmasGreen_1 = require("../Themes/Menus/ChristmasGreen");
var ChristmasRed_1 = require("../Themes/Menus/ChristmasRed");
var ChristmasYellow_1 = require("../Themes/Menus/ChristmasYellow");
function Dish(_a) {
    var dish = _a.dish, theme = _a.theme;
    var css = {};
    if (theme === 'dark') {
        if (dish.styleDark === 'blueDark') {
            css = blueDark_1["default"];
        }
        else if (dish.styleDark === 'redDark') {
            css = redDark_1["default"];
        }
        else if (dish.styleDark === 'greenDark') {
            css = greenDark_1["default"];
        }
        else if (dish.styleDark === 'yellowDark') {
            css = yellowDark_1["default"];
        }
        else if (dish.styleDark === 'halloweenDark') {
            css = halloweenDark_1["default"];
        }
        else if (dish.styleDark === 'ChristmasBlue') {
            css = ChristmasBlue_1["default"];
        }
        else if (dish.styleDark === 'ChristmasRed') {
            css = ChristmasRed_1["default"];
        }
        else if (dish.styleDark === 'ChristmasGreen') {
            css = ChristmasGreen_1["default"];
        }
        else if (dish.styleDark === 'ChristmasYellow') {
            css = ChristmasYellow_1["default"];
        }
    }
    else {
        if (dish.style === 'blue') {
            css = blue_1["default"];
        }
        else if (dish.style === 'red') {
            css = red_1["default"];
        }
        else if (dish.style === 'green') {
            css = green_1["default"];
        }
        else if (dish.style === 'yellow') {
            css = yellow_1["default"];
        }
        else if (dish.style === 'halloween') {
            css = halloween_1["default"];
        }
        else if (dish.styleDark === 'ChristmasBlue') {
            css = ChristmasBlue_1["default"];
        }
        else if (dish.styleDark === 'ChristmasRed') {
            css = ChristmasRed_1["default"];
        }
        else if (dish.styleDark === 'ChristmasGreen') {
            css = ChristmasGreen_1["default"];
        }
        else if (dish.styleDark === 'ChristmasYellow') {
            css = ChristmasYellow_1["default"];
        }
    }
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'Dish', style: css }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'DishTitle' }, { children: dish.name })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'DishContent' }, { children: dish.content }))] })));
}
exports["default"] = Dish;
