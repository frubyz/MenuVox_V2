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
var Corinan_png_1 = require("../Assets/Corinan.png");
var Unel_png_1 = require("../Assets/Unel.png");
var Wiwok_png_1 = require("../Assets/Wiwok.png");
function Motivation() {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'Motivation' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "MotivationTitle" }, { children: "Motivation" })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "MotivationText" }, { children: ["Le site a \u00E9t\u00E9 cr\u00E9\u00E9 afin que chacun puisse consulter le menu avant de r\u00E9server son repas.", (0, jsx_runtime_1.jsx)("br", {}), "Et \u00E9galement pour satisfaire un besoin de consultation universel : nous ne comptons plus le nombre de fois o\u00F9 nous nous sommes interrog\u00E9s sur la composition du menu.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "Il a donc \u00E9t\u00E9 pens\u00E9 dans l\u2019optique d\u2019\u00EAtre un menu de poche, pratique \u00E0 l\u2019utilisation."] }))] })));
}
function Contributor(_a) {
    var name = _a.name, desc = _a.desc, img = _a.img;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'ContributorBox' }, { children: [(0, jsx_runtime_1.jsx)("img", { src: img, className: "ContributorIcon", alt: name }), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'ContributorName' }, { children: name })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'ContributorDescription' }, { children: desc }))] })));
}
function Contributors() {
    var contributors = [
        {
            name: 'Wiwok',
            desc: 'Fondateur, Développeur, Designer',
            img: Wiwok_png_1["default"]
        },
        {
            name: 'Unel',
            desc: 'Développeur, Designer',
            img: Unel_png_1["default"]
        },
        {
            name: 'Corinan',
            desc: 'Designer, Testeur',
            img: Corinan_png_1["default"]
        }
    ];
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'ContributorsBox' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'ContributorsTitle' }, { children: "Contributeurs" })), contributors.map(function (c, i) {
                return (0, jsx_runtime_1.jsx)(Contributor, { name: c.name, desc: c.desc, img: c.img }, i);
            })] })));
}
function TimeLineComp(_a) {
    var title = _a.title, text = _a.text, date = _a.date;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "TimelineElement" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "TimelineIcon" }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "TimelineBody" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'TimelineTitle' }, { children: title })), (0, jsx_runtime_1.jsx)("p", { children: text }), (0, jsx_runtime_1.jsx)("p", __assign({ className: "TimelineDate" }, { children: date }))] }))] })));
}
function Timeline() {
    var timelineElements = [
        {
            title: "Début du projet",
            description: "Wiwok écrit les premières lignes de code de ce projet.",
            date: "25 Mars 2022"
        },
        {
            title: "Premier menu en ligne",
            description: "Wiwok met en ligne le premier menu sur le site.",
            date: "4 Avril 2022"
        },
        {
            title: "Unel rejoint le projet",
            description: "Unel rejoint le projet, il aide Wiwok dans le développement.",
            date: "12 Juin 2022"
        },
        {
            title: "Un nouveau site ?",
            description: "Wiwok et Unel réfléchissent sérieusement à refaire l’interface complète du site.",
            date: "10 Juillet 2022"
        },
        {
            title: "Un nouveau site !",
            description: "Il est maintenant décidé que le site doit être refait de manière plus propre. Les premières maquettes sont créées.",
            date: "24 Juillet 2022"
        },
        {
            title: "Corinan nous rejoint",
            description: "On n'a jamais trop d’aide, Corinan vient en renfort sur les maquettes, les corrections, etc...",
            date: "9 Août 2022"
        },
        {
            title: "Le site est en test",
            description: "Le site est terminé, il est en test et des petits fignolages sont en cours.",
            date: "1 Septembre 2022"
        },
        {
            title: "Le projet est open-source",
            description: "Le projet passe en open-source ! Le code est donc ouvert à tout le monde sur GitHub.",
            date: "10 Septembre 2022"
        },
        {
            title: "Le site devient bien plus sécurisé",
            description: "Le site fait un grand bond en termes de sécurité, il est désormais noté A+ par la plupart des audits de sécurité web !",
            date: "3 Octobre 2022"
        },
        {
            title: "Le site dépasse les 1 000 vues mensuelles",
            description: "Le site cummule un total de 1161 vues pour le mois de Novembre, un record !",
            date: "1 Décembre 2022"
        },
        {
            title: "Le site dépasse les 2 000 vues mensuelles",
            description: "Le site cummule un total de 2026 vues pour le mois de Mars, un nouveau record !",
            date: "1 Avril 2022"
        }
    ];
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "Timeline" }, { children: timelineElements.map(function (t, i) {
            return (0, jsx_runtime_1.jsx)(TimeLineComp, { title: t.title, text: t.description, date: t.date }, i);
        }) })));
}
function Project() {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'ProjectBox' }, { children: [(0, jsx_runtime_1.jsx)(Motivation, {}), (0, jsx_runtime_1.jsx)(Contributors, {}), (0, jsx_runtime_1.jsx)(Timeline, {})] })));
}
exports["default"] = Project;
