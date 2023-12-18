"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = require("cors");
var express_1 = require("express");
var fs_1 = require("fs");
var https_1 = require("https");
var lodash_1 = require("lodash");
var app = (0, express_1.default)();
require('dotenv').config();
var Delete_1 = require("./Functions/Delete");
var Post_1 = require("./Functions/Post");
var getLogs_1 = require("./Functions/getLogs");
var getRates_1 = require("./Functions/getRates");
var getRatesEvening_1 = require("./Functions/getRatesEvening");
var getRatesLogsMonth_1 = require("./Functions/getRatesLogsMonth");
var getRatesMonth_1 = require("./Functions/getRatesMonth");
var getRatesMonthEvening_1 = require("./Functions/getRatesMonthEvening");
var localPath = '/home/pi/datas/';
var key = fs_1.default.readFileSync('../certs/selfsigned.key');
var cert = fs_1.default.readFileSync('../certs/selfsigned.crt');
var options = {
    key: key,
    cert: cert
};
var server = https_1.default.createServer(options, app);
server.listen(8081, function () {
    console.log('Server started !');
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(function (err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.sendStatus(400).json({ error: 1, msg: 'Invalid body' });
    }
    next();
});
app.get('/', function (req, res) {
    res.status(200).json({ error: 0, msg: 'Online !' });
});
app.post('/login', function (req, res) {
    if (!verify(req, res))
        return;
    res.status(200).json({ error: 0, msg: 'Token valid' });
});
app.post('/logs/:month', function (req, res) {
    if (!verify(req, res))
        return;
    (0, getLogs_1.default)(req, res, localPath);
});
app.post('/rates/:month', function (req, res) {
    if (!verify(req, res))
        return;
    (0, getRatesMonth_1.default)(req, res, localPath);
});
app.post('/ratesEvening/:month', function (req, res) {
    if (!verify(req, res))
        return;
    (0, getRatesMonthEvening_1.default)(req, res, localPath);
});
app.post('/ratesLogs/:month', function (req, res) {
    if (!verify(req, res))
        return;
    (0, getRatesLogsMonth_1.default)(req, res, localPath);
});
app.post('/rates/:month/:day', function (req, res) {
    if (!verify(req, res))
        return;
    (0, getRates_1.default)(req, res, localPath);
});
app.post('/ratesEvening/:month/:day', function (req, res) {
    if (!verify(req, res))
        return;
    (0, getRatesEvening_1.default)(req, res, localPath);
});
app.post('/menus/:month/:day', function (req, res) {
    if (!verify(req, res))
        return;
    (0, Post_1.default)(req, res, localPath);
});
app.post('/deleteMenus/:month/:day', function (req, res) {
    if (!verify(req, res))
        return;
    (0, Delete_1.default)(req, res, localPath);
});
function verify(req, res) {
    var data = req.body;
    if (lodash_1.default.isEqual(data, {})) {
        res.status(400).json({ error: 1, msg: 'Invalid body' });
        return false;
    }
    if (data.jwt != process.env.JWT && data.jwt != process.env.JWT2) {
        res.status(401).json({ error: 1, msg: 'Invalid token' });
        return false;
    }
    return true;
}
