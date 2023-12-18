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
var react_router_dom_1 = require("react-router-dom");
var Logo_svg_1 = require("../Assets/Logo.svg");
var Dark_1 = require("../Themes/MenuBar/Dark");
var Light_1 = require("../Themes/MenuBar/Light");
var MenuButton_1 = require("./MenuButton");
function MenuBar(_a) {
    var theme = _a.theme;
    var css = theme === 'dark' ? Dark_1["default"] : Light_1["default"];
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "MenuBar", style: css }, { children: [(0, jsx_runtime_1.jsx)(MenuButton_1["default"], { theme: theme }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ className: 'MenuBarTitle', style: css, to: '/' }, { children: "Menu Vaucanson" })), (0, jsx_runtime_1.jsx)("a", __assign({ className: 'MenuLogo', href: 'https://www.yout-ube.com/watch?v=dQw4w9WgXcQ' }, { children: (0, jsx_runtime_1.jsx)("img", { className: 'MenuLogo', src: Logo_svg_1["default"], alt: 'Logo' }) }))] })));
}
exports["default"] = MenuBar;
