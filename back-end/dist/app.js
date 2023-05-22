"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const currencyConverter_1 = require("./currencyConverter");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Currency Converter API');
});
app.post('/convert', async (req, res) => {
    const { amount, fromCurrency, toCurrency } = req.body;
    const convertedAmount = await (0, currencyConverter_1.convertCurrency)(amount, fromCurrency, toCurrency);
    const response = {
        amount,
        fromCurrency,
        toCurrency,
        convertedAmount,
    };
    res.json(response);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
