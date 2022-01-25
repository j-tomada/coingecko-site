import React from 'react';
import logo from '../images/CoinGecko.png';
import './Header.css';

/**
 * Header component imported by MainPage component
 * Includes Coingecko Company logo and title
 */
const Header = () => (
    <header className='header-container'>
        <img className='logo-container' src={logo} />
    </header>
);

export default Header;