"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_1 = tslib_1.__importDefault(require("express"));
const https_1 = tslib_1.__importDefault(require("https"));
const app = (0, express_1.default)();
const Day_1 = tslib_1.__importDefault(require("./Functions/Day"));
const Days_1 = tslib_1.__importDefault(require("./Functions/Days"));
const getRates_1 = tslib_1.__importDefault(require("./Functions/getRates"));
const getRatesEvening_1 = tslib_1.__importDefault(require("./Functions/getRatesEvening"));
const Month_1 = tslib_1.__importDefault(require("./Functions/Month"));
const Rate_1 = tslib_1.__importDefault(require("./Functions/Rate"));
const RateEvening_1 = tslib_1.__importDefault(require("./Functions/RateEvening"));
const localPath = '/home/pi/datas/';
//const key = fs.readFileSync('../certs/selfsigned.key');
//const cert = fs.readFileSync('../certs/selfsigned.crt');
const options = {
//key: key,
//cert: cert
};
const server = https_1.default.createServer(options, app);
server.listen(8080, () => {
    console.log('Server started !');
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.sendStatus(400);
    }
    next();
});
app.get('/', (req, res) => {
    res.status(200).json({ error: 0, msg: 'Online !' });
});
app.get('/menus', (req, res) => {
    res.status(200).json({ error: 0, msg: 'To access a menu, get /menus/month/day/. To access all the month menus, get /menus/month' });
});
app.post('/menus', (req, res) => {
    (0, Days_1.default)(req, res, localPath);
});
app.get('/menus/:month/:day', (req, res) => {
    (0, Day_1.default)(req, res, localPath);
});
app.get('/menus/:month', (req, res) => {
    (0, Month_1.default)(req, res, localPath);
});
app.post('/rates/:month/:day', (req, res) => {
    (0, Rate_1.default)(req, res, localPath);
});
app.get('/rates/:month/:day', (req, res) => {
    (0, getRates_1.default)(req, res, localPath);
});
app.post('/ratesEvening/:month/:day', (req, res) => {
    (0, RateEvening_1.default)(req, res, localPath);
});
app.get('/ratesEvening/:month/:day', (req, res) => {
    (0, getRatesEvening_1.default)(req, res, localPath);
});
