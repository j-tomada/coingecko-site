import React from 'react';

const Exchanges = ( {theExchange} ) => (
    <button className='exchange-container'>
        <img className='exchange-img' src={theExchange.image}/>
        <div>{theExchange.name}</div>
        <div>{theExchange.country}</div>
        <div>{theExchange.trust_score_rank}</div>
        <div>{theExchange.url}</div>
    </button>
)

export default Exchanges