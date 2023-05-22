"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCurrency = void 0;
const axios_1 = __importDefault(require("axios"));
async function convertCurrency(amount, fromCurrency, toCurrency) {
    try {
        const response = await axios_1.default.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const exchangeRate = response.data.rates[toCurrency];
        if (!exchangeRate) {
            throw new Error(`Invalid currency: ${toCurrency}`);
        }
        const value = (amount * exchangeRate).toFixed(2);
        const responsea = {
            exchangeRate,
            value
        };
        return responsea;
    }
    catch (error) {
        throw new Error(`Failed to convert currency: ${error.message}`);
    }
}
exports.convertCurrency = convertCurrency;
