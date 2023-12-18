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
function Star(_a) {
    var state = _a.state, number = _a.number, onClick = _a.onClick;
    var color = state ? 'yellow' : 'black';
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ onClick: function () { return onClick(number); }, className: "Star", viewBox: "0 0 100 95.11" }, { children: (0, jsx_runtime_1.jsx)("polygon", { fill: color, points: "50 0 61.8 36.33 100 36.33 69.1 58.78 80.9 95.11 50 72.65 19.1 95.11 30.9 58.78 0 36.33 38.2 36.33 50 0" }) })));
}
exports["default"] = Star;
