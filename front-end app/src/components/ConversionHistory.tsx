import React from 'react';
import { CurrencyConversionResponse } from '../types';

interface ConversionHistoryProps {
  conversionHistory: CurrencyConversionResponse[];
  onConversionItemClick: (index: number) => void;
}

const ConversionHistory: React.FC<ConversionHistoryProps> = ({
  conversionHistory,
  onConversionItemClick,
}) => {
  return (
    <div className="mt-2">
      <h6 className="bg-color">Conversion History</h6>
      {conversionHistory.length > 0 ? (
        <ul className="bg-color">
          {conversionHistory.map((conversion, index) => (
            <li
              key={index}
              onClick={() => onConversionItemClick(index)}
              style={{ cursor: 'pointer' }}
              className="bg-color"
            >
              From {conversion.fromCurrency} to {conversion.toCurrency}: {conversion.convertedAmount.value}
            </li>
          ))}
        </ul>
      ) : (
        <p className="bg-color">No conversion history available</p>
      )}
    </div>
  );
};

export default ConversionHistory;
