import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Exchanges from './Exchanges';
import InfoPage from './InfoPage';
import './MainPage.css';

const MainPage = ( {listExchange} ) => {
    return (
        <div className='main-container'>
            <Header/>
            <ul className='exchange-list'>
            {
                /**
                 * Will go throughout each JSON in exchanges and
                 * create a component with pagination out of it
                 */
                listExchange.map((value, key) => (
                    <li className='exchange-items' key={key}>
                        <Exchanges theExchange={value}/>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default MainPage