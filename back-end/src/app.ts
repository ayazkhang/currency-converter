import express, { Request, Response } from 'express';
import { convertCurrency }  from './currencyConverter';
import cors from 'cors';
import { CurrencyConversionRequest, CurrencyConversionResponse } from './types';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Currency Converter API');
});


app.post('/convert', async (req: Request<{}, {}, CurrencyConversionRequest>, res: Response<CurrencyConversionResponse>) => {

    const { amount, fromCurrency, toCurrency } = req.body;
    const convertedAmount: any = await convertCurrency(amount, fromCurrency, toCurrency);

    const response: CurrencyConversionResponse = {
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