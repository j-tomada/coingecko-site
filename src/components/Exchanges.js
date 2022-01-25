import React from 'react';
import { Link } from 'react-router-dom';
import './Exchanges.css'

/**
 * The data for each exchange is stored into 
 * this container. 
 */
const Exchanges = ( {theExchange} ) => {
    return (
        <Link to={theExchange.id.toLowerCase()}>
            <div className='exchange-container'>
                <header className='exchange-header'>
                    <img src={theExchange.image} width='75px' />
                    <h1 className='exchange-title'>{theExchange.name}</h1>
                </header>

                <ul className='exchange-content'>
                    <div><b>Country: </b>{theExchange.country}</div>
                    <div><b>Trust Rank: </b>{theExchange.trust_score_rank}</div>
                    <div><b>URL: </b>{theExchange.url}</div>
                </ul>
            </div>
        </Link>
    );
}

export default Exchanges