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
var react_1 = require("react");
var SideMenu_1 = require("../Components/SideMenu");
var Dark_1 = require("../Themes/SideMenuButtonDiv/Dark");
var Light_1 = require("../Themes/SideMenuButtonDiv/Light");
function MenuButton(_a) {
    var theme = _a.theme;
    var _b = (0, react_1.useState)(false), isActive = _b[0], setIsActive = _b[1];
    function Click() {
        setIsActive(function (old) { return !old; });
    }
    var css1 = {};
    var css2 = {};
    if (isActive) {
        css1 = { 'transform': 'translateX(1.5vmax)' };
        css2 = { 'transform': 'translateX(3vmax)' };
    }
    var cssButton = theme === 'dark' ? Dark_1["default"] : Light_1["default"];
    Object.assign(css1, cssButton);
    Object.assign(css2, cssButton);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(SideMenu_1["default"], { active: isActive, theme: theme, isActive: setIsActive }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "MenuButton ", onClick: Click }, { children: [(0, jsx_runtime_1.jsx)("div", { style: cssButton }), (0, jsx_runtime_1.jsx)("div", { style: css1 }), (0, jsx_runtime_1.jsx)("div", { style: css2 })] }))] }));
}
exports["default"] = MenuButton;
