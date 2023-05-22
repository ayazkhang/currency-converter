import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import CurrencyConverter from './CurrencyConverter';

jest.mock('axios');

describe('CurrencyConverter', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'post').mockResolvedValueOnce({
      data: {
        convertedAmount: '123.45',
        conversionRate: '1.23',
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('performs currency conversion on button click', async () => {
    render(<CurrencyConverter />);

    // Set amount input value
    const amountInput = screen.getByPlaceholderText('Enter Amount');
    fireEvent.change(amountInput, { target: { value: '100' } });

    // Set fromCurrency select value
    const fromCurrencySelect = screen.getByLabelText('From Currency');
    fireEvent.change(fromCurrencySelect, { target: { value: 'EUR' } });

    // Set toCurrency select value
    const toCurrencySelect = screen.getByLabelText('To Currency');
    fireEvent.change(toCurrencySelect, { target: { value: 'USD' } });

    // Click on convert button
    const convertButton = screen.getByText('Convert');
    fireEvent.click(convertButton);

    // Wait for the conversion result
    await waitFor(() => {
      const resultText = screen.getByText('Conversion Result:');
      expect(resultText).toBeInTheDocument();
    });

    // Verify the conversion result and rate
    const resultValue = screen.getByTestId('conversion-result');
    const rateValue = screen.getByTestId('conversion-rate');
    expect(resultValue).toHaveTextContent('123.45');
    expect(rateValue).toHaveTextContent('1.23');
  });
});
