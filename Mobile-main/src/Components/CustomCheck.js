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
function CustomCheck(_a) {
    var type = _a.type;
    if (type) {
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "check", style: { backgroundColor: '#50AC75' } }, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ width: "2vmax", height: "2vmax", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, { children: (0, jsx_runtime_1.jsx)("polyline", { points: "20 6 9 17 4 12" }) })) })));
    }
    else {
        return ((0, jsx_runtime_1.jsx)("div", { className: "check", style: { backgroundColor: '#505155' } }));
    }
}
exports["default"] = CustomCheck;
