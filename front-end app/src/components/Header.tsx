import React from 'react'
import '../App.css';
import { heading } from '../config/api';

const Header: React.FC= () => {
    return (
        <div className='header'>
            <span className='text-center'>{heading}</span>
        </div>
    )
}

export default Header
