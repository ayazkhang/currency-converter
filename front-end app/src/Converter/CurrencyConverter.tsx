import React, { Component, useState, useEffect } from 'react'
import Dropdowns from '../components/Dropdowns'
import ConvertResult from '../components/ConvertResult';
import axios from 'axios';
import { CurrencyConversionRequest, CurrencyConversionResponse } from '../types';
import ConversionHistory from '../components/ConversionHistory';
import { APIURL } from '../config/api';

const CurrencyConverter: React.FC = () => {

    const [amount, setAmount] = useState<number>(10);
    const [loading, setLoading] = useState<boolean>(false);
    const [fromCurrency, setFromCurrency] = useState<string | ''>('EUR');
    const [toCurrency, setToCurrency] = useState<string | ''>('PKR');
    const [conversionResult, setConversionResult] = useState<string>('');
    const [conversionRate, setConversionRate] = useState<string>('');
    const [conversionHistory, setConversionHistory] = useState<
        CurrencyConversionResponse[]
    >([]);


    const convertCurrency = async () => {

        setLoading(true);
        const requestData: CurrencyConversionRequest = {
            amount: amount,
            fromCurrency: fromCurrency,
            toCurrency: toCurrency,
        };

        try {

            const response = await axios.post<CurrencyConversionResponse>(APIURL, requestData);
            setConversionResult(response.data.convertedAmount.value.toString());
            setConversionRate(response.data.convertedAmount.exchangeRate.toString());
            const updatedHistory = [
                response.data,
                ...conversionHistory.slice(0, 9),
            ];
            setConversionHistory(updatedHistory);

            setLoading(false);

        } catch (error: any) {

            console.error('Failed to convert currency:', error.message);

        }
    }

    const handleInput = (event: any) => {
        setAmount(event.target.value);
    }

    const handleFrom = (event: any) => {
        setFromCurrency(event.currentTarget.value);
    }

    const handleInto = (event: any) => {
        setToCurrency(event.currentTarget.value);
    }

    const handleReset = () => {
        setAmount(0);
        setLoading(false);
        setFromCurrency('EUR');
        setToCurrency('PKR');
        setConversionResult('');
        setConversionRate('');
    }

    const handleSwitch = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    const handleConversionHistoryClick = (index: number) => {
        const historyItem = conversionHistory[index];
        if (historyItem) {
            setAmount(historyItem.amount);
            setFromCurrency(historyItem.fromCurrency);
            setToCurrency(historyItem.toCurrency);
        }
    };

    return (
        <>
            <div className='container-fluid shadow'>

                <input
                    className='form-control-lg mt-5 shadow amount bg-dark'
                    placeholder='Enter Amount'
                    value={amount}
                    type='number'
                    onChange={handleInput}
                />
                <div className='fromdrop'>
                    <Dropdowns
                        labelName='From Currency'
                        handleChange={handleFrom}
                        value={fromCurrency}
                    ></Dropdowns>
                </div>
                <div className='text-center swap'>
                    <button className='btn shadow text-center' onClick={handleSwitch}><i className='fas fa-sort'></i></button>
                </div>
                <div className='intodrop'>
                    <Dropdowns
                        labelName='To Currency'
                        handleChange={handleInto}
                        value={toCurrency}
                    ></Dropdowns>
                </div>
                <div className='mt-5 text-center'>
                    <button
                        className='btn btn-scolor btn-lg shadow'
                        disabled={amount === 0 || amount < 0}
                        onClick={convertCurrency}
                    >Convert</button>
                </div>
                <div className='mt-4 text-center'>
                    <button
                        className='btn btn-rcolor btn-lg shadow'
                        onClick={handleReset}
                    >Reset <i className='fas fa-redo-alt'></i></button>
                </div>
                <div className='mt-5 mb-2 text-center'>
                    <ConvertResult
                        Loading={loading}
                        result={conversionResult}
                        rate={conversionRate}
                    ></ConvertResult>
                </div>

                <ConversionHistory
                    conversionHistory={conversionHistory}
                    onConversionItemClick={handleConversionHistoryClick}
                />

            </div >
        </>
    )

};

export default CurrencyConverter