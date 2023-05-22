import axios from 'axios';
import { ExchangeRateApiResponse } from './types';

export async function convertCurrency(amount: number, fromCurrency: string, toCurrency: string): Promise<object> {
  try {
    const response = await axios.get<ExchangeRateApiResponse>(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const exchangeRate = response.data.rates[toCurrency];
    if (!exchangeRate) {
      throw new Error(`Invalid currency: ${toCurrency}`);
    }
    const value = (amount * exchangeRate).toFixed(2);
    const responsea= {
      exchangeRate,
      value
    };
    return responsea;
  } catch (error: any) {
    throw new Error(`Failed to convert currency: ${(error as Error).message}`);
  }
}