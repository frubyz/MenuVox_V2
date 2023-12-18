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
var Dish_1 = require("./Dish");
var Dark_1 = require("../Themes/Informations/Dark");
var Light_1 = require("../Themes/Informations/Light");
function Informations(_a) {
    var theme = _a.theme;
    var info1 = {
        name: 'Contact',
        content: 'Vous pouvez nous contacter ici.'
    };
    var info2 = {
        name: 'Légal',
        content: 'Cliquez ici pour accéder aux mentions légales.'
    };
    var info3 = {
        name: 'Le code',
        content: 'Le site est réalisé en HTML, CSS et JavaScript (TypeScript) avec React. Le code source est disponible sur GitHub.'
    };
    var info4 = {
        name: 'Des questions ?',
        content: 'Si vous avez une idée, une suggestion, un bug à rapporter, etc... vous pouvez nous contacter via la page de contact.'
    };
    var info5 = {
        name: 'Fiabilité',
        content: 'Les menus affichés ne sont que des copies de ceux fournis par l\'établissement. Ils sont sous réserve de modification.'
    };
    var info6 = {
        name: 'Publication',
        content: 'Les menus nous sont transmis par l\'établissement. Ils seront disponibles en fin de semaine.'
    };
    var css = theme === 'dark' ? Dark_1["default"] : Light_1["default"];
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "Contact", style: css }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ to: '../Contact' }, { children: (0, jsx_runtime_1.jsx)(Dish_1["default"], { dish: info1, theme: theme }, 1) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ to: '../legal' }, { children: (0, jsx_runtime_1.jsx)(Dish_1["default"], { dish: info2, theme: theme }, 1) })), (0, jsx_runtime_1.jsx)(Dish_1["default"], { dish: info3, theme: theme }, 3), (0, jsx_runtime_1.jsx)(Dish_1["default"], { dish: info4, theme: theme }, 4), (0, jsx_runtime_1.jsx)(Dish_1["default"], { dish: info5, theme: theme }, 5), (0, jsx_runtime_1.jsx)(Dish_1["default"], { dish: info6, theme: theme }, 6)] })));
}
exports["default"] = Informations;
