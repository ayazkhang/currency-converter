"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currencyConverter_1 = require("./currencyConverter");
describe('convertCurrency', () => {
    it('should convert currency correctly', async () => {
        const amount = 100;
        const fromCurrency = 'USD';
        const toCurrency = 'EUR';
        const result = await (0, currencyConverter_1.convertCurrency)(amount, fromCurrency, toCurrency);
        expect(result).toMatch(`${amount} ${fromCurrency} =`);
        expect(result).toContain(toCurrency);
    });
    it('should throw an error for invalid currency', async () => {
        const amount = 100;
        const fromCurrency = 'USD';
        const toCurrency = 'XYZ';
        await expect((0, currencyConverter_1.convertCurrency)(amount, fromCurrency, toCurrency)).rejects.toThrowError('Invalid currency: XYZ');
    });
});
