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
var react_router_dom_1 = require("react-router-dom");
var _404_1 = require("./404");
var Contact_1 = require("./Contact");
var Informations_1 = require("./Informations");
var Legal_1 = require("./Legal");
var Menu_1 = require("./Menu");
var MenuBar_1 = require("./MenuBar");
var Project_1 = require("./Project");
var Settings_1 = require("./Settings");
var App_1 = require("../Themes/App");
var AppDark_1 = require("../Themes/AppDark");
function Main() {
    var _a = (0, react_1.useState)(JSON.parse(window.localStorage.getItem('theme'))), theme = _a[0], setTheme = _a[1];
    if (theme !== 'dark' && theme !== 'light') {
        theme = 'light';
    }
    var css = theme === 'dark' ? AppDark_1["default"] : App_1["default"];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(MenuBar_1["default"], { theme: theme }), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'App', style: css }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(Menu_1["default"], { theme: theme }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/Contact', element: (0, jsx_runtime_1.jsx)(Contact_1["default"], { theme: theme }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/Informations', element: (0, jsx_runtime_1.jsx)(Informations_1["default"], { theme: theme }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/Settings', element: (0, jsx_runtime_1.jsx)(Settings_1["default"], { theme: theme, setTheme: setTheme }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/Project', element: (0, jsx_runtime_1.jsx)(Project_1["default"], {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/Legal', element: (0, jsx_runtime_1.jsx)(Legal_1["default"], { theme: theme }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/*', element: (0, jsx_runtime_1.jsx)(_404_1["default"], { theme: theme }) })] }) }))] }));
}
exports["default"] = Main;
