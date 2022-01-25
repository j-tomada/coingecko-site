import React from 'react';
import Arrow from '../images/right_arrow.png'
import './Exchanges.css'


const Exchanges = ( {theExchange} ) => {
    return (
        <button className='exchange-container'>
            <header className='exchange-header'>
                <img src={theExchange.image} width='75px' />
                <h1 className='exchange-title'>{theExchange.name}</h1>
            </header>

            <ul className='exchange-content'>
                <div><b>Country: </b>{theExchange.country}</div>
                <div><b>Trust Rank: </b>{theExchange.trust_score_rank}</div>
                {/*URL Link*/}
                <div>
                    <b>URL: </b>
                    <a injected href={theExchange.url}>{theExchange.url}</a>
                </div>
            </ul>
            <img className='arrow' src={Arrow} />
        </button>
    );
}

export default Exchanges