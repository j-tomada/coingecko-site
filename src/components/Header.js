import React from 'react';
import logo from '../images/logo.png';
import './Header.css';

const Header = () => (
    <header className='header-container'>
        <img className='logo-container' src={logo} />
        <div className='title-container'>Coingecko Exchanges</div>
    </header>
);

export default Header;