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
var Dark_1 = require("../Themes/SideBar/Dark");
var Light_1 = require("../Themes/SideBar/Light");
var Dark_2 = require("../Themes/SideMenuButton/Dark");
var Light_2 = require("../Themes/SideMenuButton/Light");
function SideMenu(_a) {
    var active = _a.active, theme = _a.theme, isActive = _a.isActive;
    var css = Object.assign({}, Light_1["default"], { 'transform': '' });
    var Css = Object.assign({}, Light_2["default"]);
    if (active) {
        css = Object.assign({}, css, { 'transform': 'translateX(110vw)' });
        Css = Object.assign({}, Css, { 'transform': '' });
    }
    if (theme === 'dark') {
        css = Object.assign({}, css, Dark_1["default"]);
        Css = Object.assign({}, Css, Dark_2["default"]);
    }
    function Click() {
        isActive(function (old) { return !old; });
    }
    var list = [
        {
            title: 'Accueil',
            link: '/'
        },
        {
            title: 'Projet',
            link: '/Project'
        },
        {
            title: 'Informations',
            link: '/Informations'
        },
        {
            title: 'Paramètres',
            link: '/Settings'
        }
    ];
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "SideMenu", style: css }, { children: list.map(function (element, i) {
            return (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ to: element.link, className: 'SideMenuElement', onClick: Click }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ style: Css }, { children: element.title })) }), i);
        }) })));
}
exports["default"] = SideMenu;
