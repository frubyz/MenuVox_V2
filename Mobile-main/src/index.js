"use strict";
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var Main_1 = require("./Components/Main");
require("./Stylesheets/index.css");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(Main_1["default"], {}) }));
