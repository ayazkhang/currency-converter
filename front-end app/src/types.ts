export interface CurrencyConversionRequest {
    amount: number;
    fromCurrency: string | null;
    toCurrency: string | null;
  }
  

  export interface  convertedAmount{
    exchangeRate: string;
    value: string
}
  export interface CurrencyConversionResponse {
    amount: number;
    fromCurrency: string;
    toCurrency: string;
    convertedAmount: convertedAmount;
  }