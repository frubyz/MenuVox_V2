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
var CustomCheck_1 = require("./CustomCheck");
function Settings(_a) {
    var theme = _a.theme, setTheme = _a.setTheme;
    var _b = (0, react_1.useState)(theme === 'dark' ? true : false), Button1 = _b[0], setButton1 = _b[1];
    var _c = (0, react_1.useState)(JSON.parse(window.localStorage.getItem('evening'))), Button2 = _c[0], setButton2 = _c[1];
    function DarkClick() {
        setButton1(function (old) {
            if (old) {
                setTheme('light');
                window.localStorage.setItem('theme', JSON.stringify('light'));
                return false;
            }
            else {
                setTheme('dark');
                window.localStorage.setItem('theme', JSON.stringify('dark'));
                return true;
            }
        });
    }
    function EveningClick() {
        setButton2(function (old) {
            if (old) {
                window.localStorage.setItem('evening', JSON.stringify(false));
                return false;
            }
            else {
                window.localStorage.setItem('evening', JSON.stringify(true));
                return true;
            }
        });
    }
    function CleanClick() {
        window.sessionStorage.clear();
    }
    function DeleteClick() {
        setTheme('light');
        setButton1(false);
        setButton2(false);
        window.localStorage.clear();
        window.sessionStorage.clear();
    }
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "Settings" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'Setting', onClick: DarkClick }, { children: ["Mode sombre", (0, jsx_runtime_1.jsx)(CustomCheck_1["default"], { type: Button1 })] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'Setting', onClick: CleanClick }, { children: "Effacer le cache" })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'Setting red', onClick: DeleteClick }, { children: "Effacer toute les donn\u00E9es" }))] })));
}
exports["default"] = Settings;
