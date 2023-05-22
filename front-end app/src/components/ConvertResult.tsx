import React from 'react'
import Spinner from './Spinner'

type CurrencyConversionProps = {
    Loading: React.ReactNode;
    result: string;
    rate: string;
  };

const ConvertResult: React.FC<CurrencyConversionProps> = ({ Loading, result, rate }) => {
    return (
        <>
            {Loading ? (
                <Spinner />
            ) : (
                result &&
                rate && (
                    <>
                        <h4 className="result">{result}</h4>
                        <h6 className="rate">Current Rate: {rate}</h6>
                    </>
                )
            )}
        </>
    )
}

export default ConvertResult
