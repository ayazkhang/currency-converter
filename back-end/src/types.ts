export interface CurrencyConversionRequest {
    amount: number;
    fromCurrency: string;
    toCurrency: string;
  }
  
  export interface CurrencyConversionResponse {
    amount: number;
    fromCurrency: string;
    toCurrency: string;
    convertedAmount: number;
  }
  
  export interface ExchangeRateApiResponse {
    rates: Record<string, number>;
  }
  