import React from 'react';
import './Exchanges.css'

const Exchanges = ( {theExchange} ) => (
    <button className='exchange-container'>
        <header className='exchange-header'>
            <img className='exchange-img' src={theExchange.image}/>
            <h1 className='exchange-title'>{theExchange.name}</h1>
        </header>
        <div>{theExchange.country}</div>
        <div>{theExchange.trust_score_rank}</div>
        <div>{theExchange.url}</div>
    </button>
)

export default Exchanges