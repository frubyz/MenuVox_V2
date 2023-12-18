"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
//import cors from 'cors';
const express_1 = tslib_1.__importDefault(require("express"));
const https_1 = tslib_1.__importDefault(require("https"));
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const app = (0, express_1.default)();
require('dotenv').config();
const Delete_1 = tslib_1.__importDefault(require("./Functions/Delete"));
const Post_1 = tslib_1.__importDefault(require("./Functions/Post"));
const getLogs_1 = tslib_1.__importDefault(require("./Functions/getLogs"));
const getRates_1 = tslib_1.__importDefault(require("./Functions/getRates"));
const getRatesEvening_1 = tslib_1.__importDefault(require("./Functions/getRatesEvening"));
const getRatesLogsMonth_1 = tslib_1.__importDefault(require("./Functions/getRatesLogsMonth"));
const getRatesMonth_1 = tslib_1.__importDefault(require("./Functions/getRatesMonth"));
const getRatesMonthEvening_1 = tslib_1.__importDefault(require("./Functions/getRatesMonthEvening"));
const localPath = '/home/pi/datas/';
//const key = fs.readFileSync('../certs/selfsigned.key');
//const cert = fs.readFileSync('../certs/selfsigned.crt');
const options = {
//key: key,
//cert: cert
};
const server = https_1.default.createServer(options, app);
server.listen(8081, () => {
    console.log('Server started !');
});
//app.use(express.json());
//app.use(cors());
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.sendStatus(400).json({ error: 1, msg: 'Invalid body' });
    }
    next();
});
app.get('/', (req, res) => {
    res.status(200).json({ error: 0, msg: 'Online !' });
});
app.post('/login', (req, res) => {
    if (!verify(req, res))
        return;
    res.status(200).json({ error: 0, msg: 'Token valid' });
});
app.post('/logs/:month', (req, res) => {
    if (!verify(req, res))
        return;
    (0, getLogs_1.default)(req, res, localPath);
});
app.post('/rates/:month', (req, res) => {
    if (!verify(req, res))
        return;
    (0, getRatesMonth_1.default)(req, res, localPath);
});
app.post('/ratesEvening/:month', (req, res) => {
    if (!verify(req, res))
        return;
    (0, getRatesMonthEvening_1.default)(req, res, localPath);
});
app.post('/ratesLogs/:month', (req, res) => {
    if (!verify(req, res))
        return;
    (0, getRatesLogsMonth_1.default)(req, res, localPath);
});
app.post('/rates/:month/:day', (req, res) => {
    if (!verify(req, res))
        return;
    (0, getRates_1.default)(req, res, localPath);
});
app.post('/ratesEvening/:month/:day', (req, res) => {
    if (!verify(req, res))
        return;
    (0, getRatesEvening_1.default)(req, res, localPath);
});
app.post('/menus/:month/:day', (req, res) => {
    if (!verify(req, res))
        return;
    (0, Post_1.default)(req, res, localPath);
});
app.post('/deleteMenus/:month/:day', (req, res) => {
    if (!verify(req, res))
        return;
    (0, Delete_1.default)(req, res, localPath);
});
function verify(req, res) {
    const data = req.body;
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
