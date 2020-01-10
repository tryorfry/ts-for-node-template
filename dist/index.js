"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 4000;
app.get('/', (req, res) => {
    res.send('YAY! It actually works!');
});
app.get('/hello', (req, res) => {
    res.send({ 'hello': 'world' });
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map