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
function Legal(_a) {
    var theme = _a.theme;
    var legalList = [
        {
            name: 'Utilisation',
            content: "Les serveurs, pour leurs bons fonctionnements, enregistrent des données telles que votre adresse IP et les notes que vous attribuez aux menus. La récupération de cette adresse ne sert qu’à deux choses : Faire des statistiques de fréquentation ainsi qu'éviter les notes dupliqués."
        },
        {
            name: 'La récuperation',
            content: "Votre adresse IP est récupérée lorsque vous accédez aux menus. Elle est aussi récupérée lorsque vous notez un menu."
        },
        {
            name: 'Nos engagements',
            content: "Nous nous engageons à ne jamais revendre ou partager ces données en dehors de l’équipe du site, hors cadre légal."
        },
        {
            name: 'Des questions ?',
            content: "Si l’enregistrement de l’une de ces données vous pose un problème, vous pouvez nous contacter ici : contact@menuvox.fr"
        }
    ];
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "legalPage" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: theme === 'dark' ? "legalBoxs legalBoxsDark" : 'legalBoxs' }, { children: legalList.map(function (Element, i) {
                return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "legalBox" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "legalTitle" }, { children: Element.name })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "legalContent" }, { children: Element.content }))] }), i));
            }) })) })));
}
exports["default"] = Legal;
