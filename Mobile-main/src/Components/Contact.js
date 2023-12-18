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
var Dish_1 = require("./Dish");
var Dark_1 = require("../Themes/Contact/Dark");
var Light_1 = require("../Themes/Contact/Light");
function Contact(_a) {
    var theme = _a.theme;
    var info1 = {
        name: 'E-mail',
        content: 'contact@menuvox.fr'
    };
    var info2 = {
        name: 'Discord',
        content: 'Wiwok: Wiwok#2553\nUnel: Unel#1527'
    };
    var info3 = {
        name: 'Rencontre',
        content: 'Vous pouvez nous trouver en TSTI2D2 au lycée Vaucanson.'
    };
    var info4 = {
        name: 'Github',
        content: 'Le code est disponible ici, vous pouvez également apporter des suggestions et rapporter des bugs.'
    };
    var css = theme === 'dark' ? Dark_1["default"] : Light_1["default"];
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "Contact", style: css }, { children: [(0, jsx_runtime_1.jsx)(Dish_1["default"], { dish: info1, theme: theme }), (0, jsx_runtime_1.jsx)(Dish_1["default"], { dish: info2, theme: theme }), (0, jsx_runtime_1.jsx)(Dish_1["default"], { dish: info3, theme: theme }), (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://github.com/Menu-Vaucanson" }, { children: (0, jsx_runtime_1.jsx)(Dish_1["default"], { dish: info4, theme: theme }) }))] })));
}
exports["default"] = Contact;
