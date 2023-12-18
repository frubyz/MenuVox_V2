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
function E404(_a) {
    var theme = _a.theme;
    var css = theme === 'dark' ? { color: '#F5FEF5' } : {};
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: css }, { children: "La page que vous cherchez n'existe pas." })));
}
exports["default"] = E404;
