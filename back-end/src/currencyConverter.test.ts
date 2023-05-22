import { convertCurrency } from './currencyConverter';

describe('convertCurrency', () => {
  it('should convert currency correctly', async () => {
    const amount = 100;
    const fromCurrency = 'USD';
    const toCurrency = 'EUR';

    const result = await convertCurrency(amount, fromCurrency, toCurrency);

    expect(result).toMatch(`${amount} ${fromCurrency} =`);
    expect(result).toContain(toCurrency);
  });

  it('should throw an error for invalid currency', async () => {
    const amount = 100;
    const fromCurrency = 'USD';
    const toCurrency = 'XYZ';

    await expect(convertCurrency(amount, fromCurrency, toCurrency)).rejects.toThrowError(
      'Invalid currency: XYZ'
    );
  });
});
