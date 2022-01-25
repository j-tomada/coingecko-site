import React from 'react';
import Header from './Header';
import Exchanges from './Exchanges';
import './MainPage.css';

/**
 * Default page in web browser
 * Will showcase the first 10 exchanges
 */
const MainPage = ( {listExchange} ) => (
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

export default MainPage