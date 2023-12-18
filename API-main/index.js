"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = require("cors");
var express_1 = require("express");
var fs_1 = require("fs");
var https_1 = require("https");
var app = (0, express_1.default)();
var Day_1 = require("./Functions/Day");
var Days_1 = require("./Functions/Days");
var getRates_1 = require("./Functions/getRates");
var getRatesEvening_1 = require("./Functions/getRatesEvening");
var Month_1 = require("./Functions/Month");
var Rate_1 = require("./Functions/Rate");
var RateEvening_1 = require("./Functions/RateEvening");
var localPath = '/home/pi/datas/';
var key = fs_1.default.readFileSync('../certs/selfsigned.key');
var cert = fs_1.default.readFileSync('../certs/selfsigned.crt');
var options = {
    key: key,
    cert: cert
};
var server = https_1.default.createServer(options, app);
server.listen(8080, function () {
    console.log('Server started !');
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(function (err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.sendStatus(400);
    }
    next();
});
app.get('/', function (req, res) {
    res.status(200).json({ error: 0, msg: 'Online !' });
});
app.get('/menus', function (req, res) {
    res.status(200).json({ error: 0, msg: 'To access a menu, get /menus/month/day/. To access all the month menus, get /menus/month' });
});
app.post('/menus', function (req, res) {
    (0, Days_1.default)(req, res, localPath);
});
app.get('/menus/:month/:day', function (req, res) {
    (0, Day_1.default)(req, res, localPath);
});
app.get('/menus/:month', function (req, res) {
    (0, Month_1.default)(req, res, localPath);
});
app.post('/rates/:month/:day', function (req, res) {
    (0, Rate_1.default)(req, res, localPath);
});
app.get('/rates/:month/:day', function (req, res) {
    (0, getRates_1.default)(req, res, localPath);
});
app.post('/ratesEvening/:month/:day', function (req, res) {
    (0, RateEvening_1.default)(req, res, localPath);
});
app.get('/ratesEvening/:month/:day', function (req, res) {
    (0, getRatesEvening_1.default)(req, res, localPath);
});
